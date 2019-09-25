import React from 'react';
import Datatable from 'react-data-table-component';
import axios from 'axios';
import columns from '../Constants/Constant.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIssues: [],
        };
        this.fetchData = this.fetchData.bind(this);
        this.fetchData();
    }

    fetchData(){
        axios.get('http://localhost:3000/issues')
            .then(function (response) {
                console.log(response.data);
                this.setState({
                    dataIssues: response.data,
                });
            });
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
                                    <Datatable
                                        data={dataIssues}
                                        columns={columns}
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