import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { RequesthttpService } from '../_services/requesthttp.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalService } from '../_services/local.service';
import { MomentDateFormatter } from '../_services/momentdateformatter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newissues',
  templateUrl: './newissues.component.html',
  styleUrls: ['./newissues.component.scss']
})
export class NewissuesComponent implements OnInit {

  message: string;

  description = '';
  id: any;
  severity: string;
  status: string;
  createddate: any;
  resolveddate: any;
  value: {};
  pramId: number;
  private sub: any;

  constructor(private data: DataService, private service: RequesthttpService, public localservice: LocalService, public dateformat: MomentDateFormatter, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.description = params.description;
      this.severity = params.severity;
      this.status = params.status;
      this.createddate = this.dateformat.reformat(params.createddate);
      this.resolveddate = this.dateformat.reformat(params.resolveddate);
    });
  }


  onClickSubmit(formData: any) {
    if (this.description && this.severity && this.status && this.createddate) {
      const createddata = this.dateformat.format(this.createddate);
      const resolveddata = this.dateformat.format(this.resolveddate);

      this.value = {
        description: this.description,
        severity: this.severity,
        status: this.status,
        createddate: createddata,
        resolveddate: resolveddata,
        id: this.id,
      };

      if (this.id) {
        this.service.updateIssues(this.id, this.value)
          .subscribe(
            (data) => {
              this.clearDta(data);
            },
            (error: HttpErrorResponse) => {
              console.log(error);
            }
          );
      } else {
        this.service.newIssuesForm(this.value)
          .subscribe(
            (data) => {
              this.clearDta(data);
            },
            (error: HttpErrorResponse) => {
              console.log(error);
            }
          );
      }
    } else {
      this.localservice.toastMsg('Fill all fields', 'error');
    }
  }

  clearDta(data) {
    console.log(data);
    this.localservice.toastMsg('Data submitted successfully', 'success');
    this.description = '';
    this.severity = '';
    this.status = '';
    this.createddate = '';
    this.resolveddate = '';
    this.id = '';
  }
}
