import React from 'react';

import {
    Tag,
} from 'antd';

function TagStatusOrder({
    status,
}) {

    /**
     * Get color status
     * 
     * @return {string}
     */
    const getColor = () => {
        switch (status) {
            case "Vigente":
                return "processing";
            case "Cancelado":
                return "error";

            default:
                "success";
        }
    }

    return <Tag
        color={getColor()}
    >
        {status}
    </Tag>
}

export default TagStatusOrder;