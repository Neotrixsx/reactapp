//import React from 'react';
import { memoize } from 'react-data-table-component';

const columnsDisplay = [
    {
        name: "Description",
        sortable: true,
        prop: 'description'
    },
    {
        name: "Severity",
        sortable: true,
        prop: 'severity'
    },
    {
        name: "Status",
        sortable: true,
        prop: 'status'
    },
    {
        name: "Created Date",
        sortable: true,
        prop: 'createddate'
    },
    {
        name: "Resolved Date",
        sortable: true,
        prop: 'resolveddate'
    },
];

export default columnsDisplay;