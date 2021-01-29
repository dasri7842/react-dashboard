import React from "react";

const TableData = () => {
  return (
    <div className="m-2 flex-fill">
      <h5 className="bg-white table-title p-2 m-0">Title of the Table</h5>
      <table className="table table-borderless">
        <thead className="bg-white shadow-sm">
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
