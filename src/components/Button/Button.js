import React from 'react';

import {
    Button,
} from 'antd';

function CustomButton(props) {
    return <Button
        {...props}
        style={{
            ...(props.style || {}),
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
        }}
    >
        {props.children}
    </Button>

}

export default CustomButton;