import React from "react";

import {
    LoadingOutlined,
} from '@ant-design/icons';

import './style.scoped.sass';

function Loading(props) {
    return <div className='container-loading'>
        <LoadingOutlined
            className='text-gray-300'
            style={{
                fontSize: "180px",
            }}
        />

        <p className='container-loading__text'>
            Cargando facturas ...
        </p>
    </div>
}

export default Loading;