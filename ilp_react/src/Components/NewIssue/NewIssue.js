import React from 'react';
import DatePicker from 'react-datepicker';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import { newData } from '../Dashboard/action.js';

class newIssue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id || '',
            description: props.description || '',
            severity: props.severity || '',
            status: props.status || '',
            createddate: props.createddate || moment(new Date()).format('MM/DD/YYYY'),
            resolveddate: props.resolveddate || moment(new Date()).format('MM/DD/YYYY'),
            edited: (props.id) ? true : false,
            redirect: false,
        }
        moment.locale('in');
    }

    handleClickEvent = event => {
        const {
            id,
            description,
            severity,
            status,
            createddate,
            resolveddate,
            edited,
        } = this.state;
        if (description === '' || severity === '' || status === '' || createddate === '' || resolveddate === '') {
            toast.error('Please Fill all the fields');
            event.preventDefault();
            return;
        }
        const newIssue = {
            id,
            description,
            severity,
            status,
            createddate,
            resolveddate,
        }
        if (!edited) {
            newData(newIssue).then((Response) => {
                toast.success("Added");
                this.setState({
                    redirect: true,
                });
            })
                .catch((error) => {
                    toast.error('Error occured');
                });
        } else {
            const {
                onHandleChange,
            } = this.props;
            onHandleChange(newIssue);
        }
        event.preventDefault();
    }

    onIdEnter = (event) => {
        this.setState({
            ip: event.target.value,
        });
    }
    ondescriptionEnter = (event) => {
        this.setState({
            description: event.target.value,
        });
    }
    onseverityChange = (event) => {
        this.setState({
            severity: event.target.value,
        });
    }
    onStatusChange = (event) => {
        this.setState({
            status: event.target.value,
        });
    }
    onCreateDateChange = (date) => {
        this.setState({
            createddate: moment(date).format('MM/DD/YYYY'),
        });
    }
    onResolvedDateChange = (date) => {
        this.setState({
            resolveddate: moment(date).format('MM/DD/YYYY'),
        });
    }


    render() {
        const {
            redirect
        } = this.state;
        if (redirect) {
            return <Redirect to='/' />;
        }
        return (
            <div>
                <ToastContainer />
                <div class="pad-top10"></div>
                <form class="form-horizontal">
                    <div class="form-group" hidden>
                        <label for="inputId" class="col-sm-2 control-label">ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value={this.state.id} onChange={this.onIdEnter} name="id" id="id" placeholder="id" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputTitle" class="col-sm-2 control-label">Description</label>
                        <div class="col-sm-10">
                            <textarea value={this.state.description} onChange={this.ondescriptionEnter} class="form-control" name="description" id="title" placeholder="Title"
                                cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputTitle" class="col-sm-2 control-label">Severity</label>
                        <div class="col-sm-10">
                            <select name="severity" value={this.state.severity} onChange={this.onseverityChange} id="severity" class="form-control">
                                <option value=''>Select</option>
                                <option value="Minor">Minor</option>
                                <option value="Major">Major</option>
                                <option value="Critical">Critical</option>
                            </select>
                        </div>
                    </div >
                    <div class="form-group">
                        <label for="inputTitle" class="col-sm-2 control-label">Status</label>
                        <div class="col-sm-10">
                            <select name="status" value={this.state.status} onChange={this.onStatusChange} id="status" class="form-control">
                                <option value=''>Select</option>
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                    </div >
                    <div class="form-group">
                        <label for="inputTitle" class="col-sm-2 control-label">Created Date</label>
                        <div class="input-group col-10">
                            <DatePicker
                                selected={new Date(this.state.createddate)}
                                onChange={this.onCreateDateChange}
                            />
                        </div>
                    </div >
                    <div class="form-group">
                        <label for="inputTitle" class="col-sm-2 control-label">Resolved Date</label>
                        <div class="input-group col-10">
                            <DatePicker
                                selected={new Date(this.state.resolveddate)}
                                onChange={this.onResolvedDateChange}
                            />
                        </div>
                    </div >
                    <hr />
                    <div class="form-group">
                        <div class="col-10">
                            <button class="btn col-sm-12 btn-success" onClick={this.handleClickEvent}>Submit</button>
                        </div>
                    </div>
                </form >
            </div>
        );
    }
}
export default newIssue;