import React from 'react';
import ReactTable from 'react-table';
import action, { onClickConfirm } from './action.js';
import NewIssue from '../NewIssue/NewIssue.js';
import 'react-table/react-table.css';
import columns from '../Constants/Constant.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIssues: [],
            loading: true,
            clickedEditYes: false,
            action: '',
            ObjSelected: {},
        };
    }

    componentDidMount() {
        action()
            .then(Response => {
                this.setState({
                    dataIssues: Response.data,
                });
            });
    }

    ToastChange = () => {
        const {
            ObjSelected: {
                description,
            },
            action,
        } = this.state;
        if (action === 'Edit') {
            toast.success('Edited: ' + description);
        } else {
            toast.success('Deleted: ' + description);
        }
    }

    handledAction = (state, rowInfo, column, instance) => {
        return {
            onClick: () => {
                if (column.Header === 'Edit') {
                    console.log(rowInfo.row._original.id);
                    this.setState({
                        ObjSelected: rowInfo.row._original,
                        action: 'Edit',
                    });
                    onClickConfirm(rowInfo.row._original.description, 'Edit', this.handleYesClick);
                }
                else if (column.Header === 'Delete') {
                    this.setState({
                        ObjSelected: rowInfo.row._original,
                        action: 'Delete',
                    });
                    onClickConfirm(rowInfo.row._original.description, 'Delete', this.handleYesClick);
                }
            }
        }
    }

    handleYesClick = () => {
        const {
            action,
        } = this.state;
        if (action === 'Edit') {
            this.setState({
                clickedEditYes: true,
            });
        }
        else if (action === 'Delete') {
            this.ToastChange();
        }
    }

    render() {
        const {
            dataIssues = [],
            clickedEditYes,
            ObjSelected,
        } = this.state;
        return (
            <div>
                <div className="pad-top10"></div>
                <ToastContainer />
                {
                    !clickedEditYes &&
                    <div className="wrapper">
                        <div className="content-wrapper">
                            <section className="content-header">
                                <section className="content">
                                    <div className="form-group">
                                        <ReactTable
                                            getTdProps={this.handledAction}
                                            data={dataIssues}
                                            columns={columns}
                                            showPagination={true}
                                            showPaginationTop={true}
                                            pageSizeOptions={[5, 10, 20, 25, 50, 100]}
                                            defaultPageSize={5}
                                        />
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>}
                {
                    clickedEditYes &&
                    <NewIssue
                        {...ObjSelected}
                    />
                }
            </div>
        );
    }


}
export default Dashboard;