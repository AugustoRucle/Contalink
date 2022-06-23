import { notification, } from 'antd';

/**
 * Open a notification
 * 
 * @param {object} data
 * @return  
 */
const openNotification = (data) => {
    notification[data.type]({
        message: data.message,
        description: data.description,
    });
};

export default {
    open: openNotification,
}