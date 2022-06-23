import React from "react";

import InvoiceStatusTag from '../../../InvoiceStatusTag';
import { Table, Space } from 'antd';

import dataFormatting from '../../../../../../utils/dataFormatting';
import { normalizeDate } from '../../../../../../utils/ functions';

import '../style.scoped.sass';

function MobileTable({
    invoices,
}) {
    return <Table
        showHeader={false}
        columns={[
            {
                title: "",
                render: (invoice) => {
                    return (
                        <div>
                            <div className='table-data-mobile'>
                                <h4 className='table-data-mobile--header'>ID</h4>
                                <p className="table-data-mobile--content-right table-data-mobile--text">
                                    {dataFormatting.numero(invoice.id, 0)}
                                </p>
                            </div>
                            <div className='table-data-mobile'>
                                <h4 className='table-data-mobile--header'>Num.</h4>
                                <p className="table-data-mobile--content-right table-data-mobile--text">
                                    {invoice.invoice_number}
                                </p>
                            </div>
                            <div className='table-data-mobile'>
                                <h4 className='table-data-mobile--header'>Total</h4>
                                <p className="table-data-mobile--content-right table-data-mobile--text fw-bold">
                                    {dataFormatting.price(invoice.total, 'MXN')}
                                </p>
                            </div>
                            <div className='table-data-mobile'>
                                <h4 className='table-data-mobile--header'>Creación</h4>
                                <p className="table-data-mobile--content-right table-data-mobile--text">
                                    {normalizeDate(invoice.invoice_date)}
                                </p>
                            </div>
                            <div className='table-data-mobile'>
                                <h4 className='table-data-mobile--header'>Estatus</h4>
                                <div className="table-data-mobile--content-right d-flex align-items-center justify-content-end">
                                    <InvoiceStatusTag status={invoice.status} />
                                </div>
                            </div>
                        </div>
                    )
                }
            },
        ]}
        dataSource={invoices}
    />
}

export default MobileTable