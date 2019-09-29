import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const APIURL = 'http://localhost:3000';

function loadData() {
    return axios.get(APIURL+'/issues');
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

export function newData(newIssue) {
    return axios.post(APIURL+'/issues', newIssue);
}

export function deleteData(newIssue) {
    return axios.delete(APIURL+'/issues/'+newIssue.id);
}

export function EditData(newIssue) {
    return axios.put(APIURL+'/issues/'+newIssue.id, newIssue);
}

export default loadData;