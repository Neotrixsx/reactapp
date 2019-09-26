import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';

const MyComponentHook = data => {
  const [thing, setThing] = useState();
  const handleAction = value => {
    setThing(value);
    console.log(value);
  }
  // unlike class methods updateState will be re-created on each render pass, therefore, make sure that callbacks passed to onRowSelected are memoized using useCallback
  const updateState = useMemo(state => console.log(state));
  const columns = useMemo(() => [{
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
  },
  {
    name: 'resolveddate',
    cell: () => <button raised primary onClick={this.handledAction}>Edit </button>,
    sortable: true,
    right: true,
  },
  {
    name: 'resolveddate',
    selector: 'resolveddate',
    sortable: true,
    right: true,
  }]);

  return (
    <div><div class="pad-top10"></div>
      <div class="wrapper">
        <div class="content-wrapper">
          <section class="content-header">
            <section class="content">
              <div class="form-group">
                <DataTable
                  data={data}
                  columns={columns}
                  onRowSelected={updateState}
                  selectableRows
                />
              </div>
            </section>
          </section>
        </div>
      </div>

    </div>
  );
}

export default MyComponentHook;