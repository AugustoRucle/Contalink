import React from 'react';

import { Link } from "react-router-dom";
import {
    Button,
} from 'antd';

import {
    HomeOutlined,
} from '@ant-design/icons';

import IMAGE_SEARCH from '../../assets/image/search.png';

import './style.scoped.sass';

function NotFound() {
    return < div className='w-100 h-100 d-flex justify-content-center align-items-center'>
        <div className='not-found-page'>
            <img src={IMAGE_SEARCH} class="not-found-page--loading" alt="Search" />
            <h1 className="display-3 mb-0 fw-lighter text-center">
                Pagina no encontrada
            </h1>

            <Link
                className='d-flex justify-content-center mt-4'
                to="/"
            >
                <Button
                    icon={<HomeOutlined />}
                    style={{
                        borderColor: "#1890ff",
                        color: "#1890ff",
                    }}
                >
                    Regresar al inicio
                </Button>
            </Link>
        </div>
    </div>
}

export default NotFound;