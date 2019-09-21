 import {toast} from 'react-toastify';


 const toastmessege = (type) => {
    if(type === 'submit') {
        toast.success("Insertion success!!",{});
    }
 }

 export default toastmessege;