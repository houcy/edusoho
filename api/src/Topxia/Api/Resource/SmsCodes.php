<?php 

namespace Topxia\Api\Resource;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Gregwar\Captcha\CaptchaBuilder;
use Symfony\Component\HttpFoundation\Response;
use Topxia\Api\Util\ImgCodeUtil;

class SmsCodes extends BaseResource
{
    protected $imgBuilder;

    public function post(Application $app, Request $request)
    {
        $biz = $this->getServiceKernel()->getBiz();
        $factory = $biz['ratelimiter.factory'];
        $limiter = $factory('ip', 5, 86400);

        $remain = $limiter->check($request->getClientIp());

        if ($request->request->get('img_code') && $request->request->get('img_token')) {
            $imgCode  = $request->request->get('img_code');
            $imgToken = $request->request->get('img_token');

            if (empty($imgCode)) {
                return $this->error('500', '图形验证码为空');
            }

            if (empty($imgToken)) {
                return $this->error('500', 'Token为空');
            }            

            $imgCodeUtil = new ImgCodeUtil();
            try {
                $imgCodeUtil->verifyImgCode('img_verify', $imgCode, $imgToken);
            } catch(Expection $e) {
                return array('500', $e->getMessage());
            }

            $remain = -1;
        }

        if ($remain == 0) {
            $this->imgBuilder = new CaptchaBuilder;
            $str = $this->buildImg();

            $imgToken = $this->getTokenService()->makeToken('img_verify', array(
                'times'    => 5,
                'duration' => 60 * 2,
                'userId'   => 0,
                'data'     => array(
                    'img_code' => $this->imgBuilder->getPhrase(),
                )
            ));

            $this->imgBuilder = null;
            
            return array('img_code' => $str, 'img_token' => $imgToken['token'], 'status' => 'limited');
        }

        $type   = $request->request->get('type');
        $mobile = $request->request->get('mobile');

        if (!in_array($type, array('sms_change_password', 'sms_verify_mobile', 'sms_third_registration'))) {
            return $this->error('500', '短信服务不支持该业务');
        }
        if (empty($mobile)) {
            return $this->error('500', '手机号为空');
        }

        if ($type == 'sms_third_registration') {
            if ($this->getUserService()->getUserByVerifiedMobile($mobile)) {
                return $this->error('500', '该手机号已被绑定');
            }
            
            $user = $this->getCurrentUser();

            $this->getUserService()->changeMobile($user['id'], $mobile);

            try {
                $result = $this->getSmsService()->sendVerifySms('sms_forget_password', $mobile);
            } catch(Exception $e) {
                return $this->error('500', $e->getMessage());
            }
        }

        if ($type == 'sms_change_password') {
            try {
                $result = $this->getSmsService()->sendVerifySms('sms_forget_password', $mobile);
            } catch(Exception $e) {
                return $this->error('500', $e->getMessage());
            }
        }

        if ($type == 'sms_verify_mobile') {
            try {
                $result = $this->getSmsService()->sendVerifySms('sms_bind', $mobile);
            } catch(Exception $e) {
                return $this->error('500', $e->getMessage());
            }
        }
        
        $smsToken = $this->getTokenService()->makeToken($type, array(
            'times'    => 5,
            'duration' => 60 * 2,
            'userId'   => 0,
            'data'     => array(
                'sms_code' => $result['captcha_code'],
            )
        ));

        return array(
            'mobile'    => $mobile,
            'sms_token' => $smsToken['token'],
            'status'    => 'ok'
        );
    }

    public function filter($res)
    {
        return $res;
    }

    protected function buildImg()
    {
        $this->imgBuilder->build($width = 150, $height = 32, $font = null);

        ob_start();
        $this->imgBuilder->output();
        $str = ob_get_clean();

        return base64_encode($str);
    }

    protected function getSettingService()
    {
        return $this->getServiceKernel()->createService('System.SettingService');
    }

    protected function getTokenService()
    {
        return $this->getServiceKernel()->createService('User.TokenService');
    }

    protected function getSmsService()
    {
        return $this->getServiceKernel()->createService('Sms.SmsService');
    }

    protected function getUserService()
    {
        return $this->getServiceKernel()->createService('User.UserService');
    }
}