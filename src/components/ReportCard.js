import IconButton from "@material-ui/core/IconButton";
import { ArrowUpRight } from "react-feather";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#d8e5fd"),
    backgroundColor: "#d8e5fd",
    "&:hover": {
      backgroundColor: "#cddefd",
    },
  },
}))(IconButton);

const ReportCard = ({ title, value, delta }) => {
  return (
    <div className="reportcard m-2 p-3 shadow-sm">
      <div>
        <div className="d-flex justify-content-between">
          <h5>{title}</h5>
          <ColorButton color="primary" size="small">
            <ArrowUpRight color="#3b82ec" size={24} />
          </ColorButton>
        </div>
        <h5>{value}</h5>
        {delta < 0 ? (
          <div>
            <span className="list-group-item-danger fs-5 p-1">
              {`${delta}%`}
            </span>
            <span className="mx-1 fs-5">Uff!</span>
          </div>
        ) : (
          <div>
            <span className="list-group-item-success fs-5 p-1">
              {`+${delta}%`}{" "}
            </span>
            <span className="mx-1 fs-5">Yay!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
