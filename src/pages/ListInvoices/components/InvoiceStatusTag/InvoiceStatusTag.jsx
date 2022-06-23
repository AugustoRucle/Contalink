import React from 'react';

import {
    Tag,
} from 'antd';

function TagStatusOrder({
    status,
}) {

    return <Tag
        color={status == "Vigente" ? "processing" : "success"}
    >
        {status}
    </Tag>
}

export default TagStatusOrder;