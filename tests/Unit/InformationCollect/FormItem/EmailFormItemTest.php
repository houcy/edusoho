<?php

namespace Tests\Unit\InformationCollect\FormItem;

use Biz\BaseTestCase;

class EmailFormItemTest extends BaseTestCase
{
    public function testGetData()
    {
        $data = [
            'type' => 'input',
            'title' => 'Email',
            'field' => 'email',
            'group' => 'contact',
            'value' => 'edusoho@edusoho.com',
            'required' => true,
            'validate' => [
                [
                    'required' => true,
                    'message' => 'Email不能为空',
                ],
                [
                    'pattern' => '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
                    'message' => 'Email格式错误',
                ],
                ['min' => 4, 'message' => '最少输入4个字符'],
                ['max' => 64, 'message' => '最多输入64个字符'],
            ],
        ];

        $formItem = new \Biz\InformationCollect\FormItem\EmailFormItem();

        $this->assertEquals($data, $formItem->required(true)->value('edusoho@edusoho.com')->getData());
    }
}
