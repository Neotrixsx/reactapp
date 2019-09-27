import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
//import columns from '../constant.js';

const MyComponentHook = (data,updateSelectedState) => {
  const handleAction = value => updateSelectedState(value);
  // unlike class methods updateState will be re-created on each render pass, therefore, make sure that callbacks passed to onRowSelected are memoized using useCallback
   function updateState ( state ){
       console.log(state);
   };
  const columns = useMemo(() => [
    {
        name: "Description",
        sortable: true,
        selector: 'description'
    },
    {
        name: "Severity",
        sortable: true,
        selector: 'severity'
    },
    {
        name: "Status",
        sortable: true,
        selector: 'status'
    },
    {
        name: "Created Date",
        sortable: true,
        selector: 'createddate'
    },
    {
        name: "Resolved Date",
        sortable: true,
        selector: 'resolveddate'
    },
    {
        name: "Edit",
        cell: () => <button raised primary onClick={handleAction}>Edit</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
    {
        name: "Delete",
        cell: () => <button raised primary onClick={handleAction}>delete</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
  ]);

  return (
    <DataTable
      data={data}
      columns={columns}
      onRowSelected={updateState}
      selectableRows
    />
  );
}

export default MyComponentHook;