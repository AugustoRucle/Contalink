import React, { useState } from 'react';

import { DatePicker, Form } from 'antd';
import Button from '../../../../components/Button';

import './style.scoped.sass';

function InvoiceForm({
    onSubmit,
}) {
    const [failedForm, setFailedForm] = useState(false);

    /**
     * Get moment with date format
     * 
     * @param {moment} date
     * @return {string}
     */
    const getMomentDateWithFormat = (date) => {
        return date.format('YYYY-MM-DD');
    }

    /**
     * On finish
     * 
     * @param {object} values
     * @return
     */
    const onFinish = (values) => {
        onSubmit({
            dateStart: getMomentDateWithFormat(values.dateStart),
            dateEnd: getMomentDateWithFormat(values.dateEnd)
        });

        setFailedForm(false)
    };

    /**
     * onFinishFailed
     * 
     */
    const onFinishFailed = () => {
        setFailedForm(true);
    }

    return <div className='invoice-form'>
        <Form
            name="invoice-form"
            layout='vertical'
            initialValues={{ remember: false }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className='input-date'>
                <Form.Item
                    label="Fecha de inicio"
                    name="dateStart"
                    rules={[{
                        required: true,
                        message: 'Fecha de inicio requerida!'
                    }]}
                    style={{ marginBottom: 0 }}
                >
                    <DatePicker
                        placeholder='Fecha de inicio'
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            </div>

            <div className='input-date'>
                <Form.Item
                    label="Fecha de termino"
                    name="dateEnd"
                    rules={[{
                        required: true,
                        message: 'Fecha de termino requerida!'
                    }]}
                    style={{ marginBottom: 0 }}
                >
                    <DatePicker
                        placeholder='Fecha de termino'
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            </div>

            <div className='submit'>
                <Form.Item
                    style={{ marginBottom: 0 }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ height: '100%' }}
                    >
                        Enviar
                    </Button>
                </Form.Item>
            </div>
        </Form>
    </div>
}

export default InvoiceForm;