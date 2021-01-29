import ColumnChart from "./components/ColumnChart";
import Header from "./components/Header";
import ReportCard from "./components/ReportCard";
import TableData from "./components/TableData";
const App = (props) => {
  return (
    <div className="m-3">
      <Header />
      <div className="row">
        <div className="col-md-6 p-0 d-sm-flex flex-fill">
          <ReportCard title="RainFall Inc" value={4.5} delta={69.69} />
          <ReportCard title="Temp Inc" value={3.2} delta={32.3} />
        </div>
        <div className="col-md-6 p-0 d-sm-flex flex-fill">
          <ReportCard title="RainFall Inc" value={4.5} delta={69.69} />
          <ReportCard title="Temp Inc" value={3.2} delta={-32.3} />
        </div>
      </div>
      <div className="d-lg-flex">
        <ColumnChart {...props} />
        <ColumnChart {...props} />
      </div>
      <div className="d-lg-flex">
        <TableData />
        <TableData />
        <TableData />
      </div>
    </div>
  );
};

export default App;
