import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private toast: ToastrService) { }

  toastMsg(msg: string, toasttype: string) {
    if (toasttype === 'success') {
      this.toast.success(msg, 'Success!', {
        progressBar: true,
        closeButton: true,
        // positionClass: 'top-right' //if 'positionClass' class pass in app.module then please don't use in here.
      });
    } else if (toasttype === 'error') {
      this.toast.error(msg);
    }
  }
  
}
