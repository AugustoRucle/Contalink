import React, { useEffect, useState } from 'react';

import InvoicesTable from './components/InvoicesTable';
import InvoiceForm from './components/InvoiceForm';
import Container from '../../components/Container';
import Loading from '../../components/Loading';


import { isEmptyObject } from '../../utils/ functions';
import useMediaQuery from '../../hooks/useMediaQuery';
import notification from '../../utils/notification';

import requestInvoices from '../../request/invoices';

import './style.scoped.sass'

function ListInvoices() {
    const [showLoadingInvoices, setShowLoadingInvoices] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    const [invoices, setInvoices] = useState([]);
    const matchMediaQuery = useMediaQuery("(max-width: 800px)");

    /**
     * Submit invoice form
     * 
     * @param {object} form
     * @return
     */
    const submitInvoiceForm = async (form) => {
        try {

            setShowLoadingInvoices(true);

            if (isEmptyObject(form)) {
                setInvoices([]);
            } else {
                setInvoices(
                    await requestInvoices.getByDateRange(form.dateStart, form.dateEnd)
                );
            }

            setTimeout(() => {
                setShowLoadingInvoices(false);
            }, 500);
        } catch (error) {

            notification.open({
                type: 'error',
                message: 'Tuvimos un problema al obtener las invoces',
            });

            setInvoices([]);
            setShowLoadingInvoices(false);
        }
    }

    useEffect(() => {
        setTimeout(() => setShowLoading(false), 500);
    }, []);

    return showLoading
        ? <Loading />
        : <Container>
            <div className="shadow-sm p-3 mb-4 bg-primary rounded list-invoices-header">
                <h1 className="display-3 mb-0 fw-lighter text-white">
                    Facturas
                </h1>

                <div className='list-invoices-header--form'>
                    <InvoiceForm onSubmit={submitInvoiceForm} />
                </div>
            </div>

            <div className="shadow p-3 rounded-4">
                <InvoicesTable
                    isMobileTable={matchMediaQuery}
                    loading={showLoadingInvoices}
                    invoices={invoices}
                />
            </div>
        </Container>
}

export default ListInvoices;