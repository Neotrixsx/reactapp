import React from 'react';
import DatePicker from 'react-date-picker';

class newIssue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id || '',
            description: props.description || '',
            severity: props.severity || '',
            status: props.status || '',
            createddate: props.createddate || '',
            resolveddate: props.resolveddate || '',
            edited: (props.id)? true : false,
        }
    }

    handleClickEvent = () => {
        console.log ("Submitted");
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
            createddate: date,
        });
    }
    onResolvedDateChange = (date) => {
        this.setState({
            resolveddate: date,
        });
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <div class="pad-top10"></div>
                <form class="form-horizontal" onSubmit="onClickSubmit(newIssues.value)">
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
                                value={this.state.createddate}
                                onChange={this.onCreateDateChange}
                            />
                        </div>
                    </div >
                    <div class="form-group">
                        <label for="inputTitle" class="col-sm-2 control-label">Resolved Date</label>
                        <div class="input-group col-10">
                            <DatePicker
                                value={this.state.resolveddate}
                                onChange={this.onResolvedDateChange}
                            />
                        </div>
                    </div >
                    <hr />
                    <div class="form-group">
                        <div class="col-10">
                            <button class="btn col-sm-12 btn-success">Submit</button>
                        </div>
                    </div>
                </form >
            </div>
        );
    }
}
export default newIssue;