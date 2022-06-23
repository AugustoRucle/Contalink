import React, { useState, useEffect } from 'react';

import DesktopTable from './components/DesktopTable';
import MobileTable from './components/MobileTable';
import Loading from './components/Loading';

function InvoicesTable({
    invoices,
    loading,
    isMobileTable,
}) {
    if (loading) {
        return <Loading />
    }

    return !isMobileTable
        ? <DesktopTable invoices={invoices} />
        : <MobileTable invoices={invoices} />
}

export default InvoicesTable;