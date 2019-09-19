import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DataService } from '../_services/data.service';
import { RequesthttpService } from '../_services/requesthttp.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalService } from '../_services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows = [];
  temp = [];
  selectedData = [];
  message: string;
  issuesDetail: any;

  constructor(private service: RequesthttpService, public localservice: LocalService, public router: Router) { }
  // private dataservice: DataService
  ngOnInit() {
    // this.dataservice.currentMessage.subscribe(message => this.message = message);
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];
      this.rows = data;
    });
  }

  // newMessage() {
  //   this.dataservice.changeMessage('Hello from Sibling');
  // }
  // {{message}}
  // <button (click)="newMessage()">New Message</button>
  // <!-- https://github.com/swimlane/ngx-datatable/blob/master/demo/selection/selection-chkbox-template.component.ts -->


  fetch(cb) {
    // this.service.getIssues().subscribe((issues) => { this.issuesDetail = issues; });
    const req = new XMLHttpRequest();
    req.open('GET', `http://localhost:3000/issues`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter((d) => {
      return d.description.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  onDelete(selected) {
    if (selected.id) {
      const r = confirm('Do you want to Edit: ' + selected.description);
      if (r === true) {
        this.service.delIssues(selected.id)
          .subscribe(
            () => {
              this.localservice.toastMsg('Data deleted successfully', 'success');
              this.ngOnInit();
            },
            (error: HttpErrorResponse) => {
              console.log('HttpErrorResponse: Error', error);
              this.localservice.toastMsg('Some error occur, Please try again!', 'error');
            }
          );
      } else {
        console.log('You pressed Cancel!');
      }
    }
  }

  onEdit(selected) {
    if (selected.id) {
      const r = confirm('Do you want to delete: ' + selected.description);
      if (r === true) {
        this.router.navigate(['newissue', selected]);
      } else {
        console.log('You pressed Cancel!');
      }
    }
  }
}
