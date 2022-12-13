const TableForData = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((columnName) => (
            <td>{columnName}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataObj) => (
          <tr>
            {Object.values(dataObj).map((dataVal) => (
              <td>{typeof dataVal === 'object' ? dataVal.toString() :  dataVal}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableForData;
