import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function loadData() {
    return axios.get('http://localhost:3000/issues');
}

export const onClickConfirm = (desciption,type , onChange) => {
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure you want to '+type+' '+desciption+' ?',
        buttons: [
            {
                label: 'Yes',
                onClick: () => onChange()
            },
            {
                label: 'No',
            }
        ]
    });
}

export default loadData;