import React from "react";

import InvoiceStatusTag from '../../../InvoiceStatusTag';
import { Table, Space } from 'antd';

import dataFormatting from '../../../../../../utils/dataFormatting';
import { normalizeDate } from '../../../../../../utils/ functions';

import '../style.scoped.sass';

function DesktopTable({
    invoices,
}) {
    return <Table
        columns={[
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'number',
                render: (_, invoice) => {
                    return <p className="table--text">
                        {dataFormatting.numero(invoice.id, 0)}
                    </p>
                }
            },
            {
                title: 'Num.',
                dataIndex: 'invoice_number',
                key: 'number',
            },
            {
                title: 'Total',
                key: 'total',
                render: (_, invoice) => {
                    return <p className="table--text fw-bold">
                        {dataFormatting.price(invoice.total, 'MXN')}
                    </p>
                }
            },
            {
                title: 'Creación',
                key: 'invoice_date',
                render: (_, invoice) => {
                    return <p className="table--text">
                        {normalizeDate(invoice.invoice_date)}
                    </p>
                }
            },
            {
                title: 'Estatus',
                key: 'status',
                render: (_, invoice) => (
                    <Space size="middle">
                        <InvoiceStatusTag status={invoice.status} />
                    </Space>
                ),
            },
        ]}
        dataSource={invoices}
        rowKey="id"
    />
}

export default DesktopTable