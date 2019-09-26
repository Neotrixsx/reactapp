import React from 'react';

const columns =(handleEdits,HandleDeletes) => [{
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
        <button onClick={() => handleEdits(row.id)}>Edit</button>
    )
},
{
    Header: 'Delete',
    id:'id',
    Cell: row => (
        <button onClick={() => HandleDeletes(row.id)}>Delete</button>
    )
}
];

export default columns;