import React from 'react';
//import Datatable, { memoize } from 'react-data-table-component';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
//import MyComponentHook from './NewDashboard.js';
import columns from '../Constants/Constant.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIssues: [],
        };
        this.fetchData();
    }

    fetchData = () => {
        axios.get('http://localhost:3000/issues')
            .then((response) => {
                this.setState({
                    dataIssues: response.data,
                });
            });
    }

    handledActionEdit = state => {
        console.log(state);
    }
    handledActionDelete = state => {
        console.log('Delete'+state);
    }
    render() {
        const {
            dataIssues = [],
        } = this.state;
        return (
            <div><div class="pad-top10"></div>
                <div class="wrapper">
                    <div class="content-wrapper">
                        <section class="content-header">
                            <section class="content">
                                <div class="form-group">
                                    <ReactTable
                                        data={dataIssues}
                                        columns={columns(this.handledActionEdit,this.handledActionDelete)}
                                        showPagination = {true}
                                        showPaginationTop = {true}
                                        pageSizeOptions = {[5, 10, 20, 25, 50, 100]}
                                        defaultPageSize = {5}
                                    />
                                </div>
                            </section>
                        </section>
                    </div>
                </div>

            </div>
        );
    }


}
export default Dashboard;