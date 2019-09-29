import React from 'react';

const columns = [{
    Header: 'descriptions',
    accessor: 'description',
},
{
    Header: 'status',
    accessor: 'status',
},
{
    Header: 'severity',
    accessor: 'severity',
},
{
    Header: 'createddate',
    accessor: 'createddate',
    sortable: true,
    right: true,
},
{
    Header: 'resolveddate',
    accessor: 'resolveddate',
},
{
    Header: 'Edit',
    Cell: row => (
        <button>Edit</button>
    )
},
{
    Header: 'Delete',
    id:'id',
    Cell: row => (
        <button>Delete</button>
    )
}
];

export default columns;