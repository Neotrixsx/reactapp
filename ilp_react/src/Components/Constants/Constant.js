import React from 'react';

const columns = [{
    name: 'descriptions',
    selector: 'description',
    sortable: true,
},
{
    name: 'status',
    selector: 'status',
    sortable: true,
    right: true,
},
{
    name: 'severity',
    selector: 'severity',
    sortable: true,
    right: true,
},
{
    name: 'createddate',
    selector: 'createddate',
    sortable: true,
    right: true,
},
{
    name: 'resolveddate',
    selector: 'resolveddate',
    sortable: true,
    right: true,
},];

export default columns;