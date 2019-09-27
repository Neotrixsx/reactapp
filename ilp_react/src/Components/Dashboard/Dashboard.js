import React from 'react';
//import Datatable from 'react-data-table-component';

import MyComponentHook from './NewTable.js';
//import { SmartDataTable as Datatable } from 'react-smart-data-table';
import columns from '../constant.js';
//import Datatable from '../Material-table.js';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issueData: [],
            data:[],
            selectedRows:[],
        }
        this.updateState = this.updateState.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.fetchData();
    }
    updateState = state => {
        console.log(state.selectedRows);
        this.setState({ selectedRows: state.selectedRows });
    }

    fetchData() {
        axios.get('http://localhost:3000/issues').then(response => {
            this.setState({
                data: response.data,
            });
        });
    }


    render() {
        const {
            data = [],
        } = this.state;
        if (data.length === 0) {
            return (<div></div>);
        }
        return (
            <div>
                <div class="pad-top10"></div>
                <div class="wrapper">
                    <div class="content-wrapper">
                        <section class="content-header">
                            <section class="content">
                                <div class="form-group">
                                    <MyComponentHook
                                        data={data}
                                        updateSelectedState = {this.updateState}
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