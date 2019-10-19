import React from 'react';
import ReactTable from 'react-table';
import action, { onClickConfirm, deleteData, EditData } from './action.js';
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
        this.updateList();
    }

    updateList = () => {
        action()
            .then(Response => {
                this.setState({
                    dataIssues: Response.data,
                    clickedEditYes: false,
                });
            }).catch(() => {
                toast.error("Error Occured!");
            });
    }

    onEditHandle = (edittedIssue) => {
        this.setState({
            ObjSelected: edittedIssue,
        }, () => { this.ToastChange(); });
    }

    ToastChange = () => {
        const {
            ObjSelected,
            ObjSelected: {
                description,
            },
            action,
        } = this.state;
        if (action === 'Edit') {
            EditData(ObjSelected).then(() => {
                toast.success("Edited: " + description);
                this.updateList();
            }).catch(() => {
                toast.error('Error occured');
            });
        } else {
            deleteData(ObjSelected).then(() => {
                toast.success(description + " Deleted");
                this.updateList();
            }).catch(() => {
                toast.error('Error occured');
            });
        }
    }

    handledAction = (state, rowInfo, column, instance) => {
        return {
            onClick: () => {
                if (column.Header === 'Edit') {
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
                <ToastContainer
                    preventDuplicated={true}
                />
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
                        onHandleChange={this.onEditHandle}
                    />
                }
            </div>
        );
    }


}
export default Dashboard;