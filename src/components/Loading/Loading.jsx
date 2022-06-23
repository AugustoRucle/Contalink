import React from 'react';

import {
    LoadingOutlined,
} from '@ant-design/icons';

import './style.scoped.sass';

function Loading() {
    return <div className="loading">
        <div>
            <LoadingOutlined
                style={{
                    fontSize: "180px",
                    color: "#1890ff"
                }}
            />

            <p
                className='display-6 fw-lighter text-primary'
                style={{ marginTop: 60 }}
            >
                Cargando...
            </p>
        </div>
    </div>
}

export default Loading;