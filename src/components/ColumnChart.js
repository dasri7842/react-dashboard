import Chart from "./Chart";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { BarChart2, Activity } from "react-feather";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#3b82ec"),
    backgroundColor: "#3b82ec",
    "&:hover": {
      backgroundColor: "#0066ff",
    },
  },
}))(Button);

const ColumnChart = ({ TempData, RainData }) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState(TempData);

  useEffect(() => {
    // This Effect is for Chart resizing. Due to Window scroll Bar.
    // Need help in dynamic resize of chart when window resizing.
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 0);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleRainData = () => {
    const { Data, Name, Units } = RainData;
    setOptions((prev) => {
      return { ...prev, Data, Name, Units };
    });
  };

  const handleTempData = () => {
    const { Data, Name, Units } = TempData;
    setOptions((prev) => {
      return { ...prev, Data, Name, Units };
    });
  };

  return (
    <div className="columnchart shadow-sm m-2">
      <div className="flex-fill">
        <div className="d-flex chartbuttons justify-content-between align-items-end p-2">
          <h5>{`${options.Name} (${options.Units})`}</h5>
          <div className="d-flex justify-content-end">
            <ColorButton
              variant="contained"
              size="small"
              className="m-1"
              onClick={handleRainData}
            >
              Rain
            </ColorButton>
            <ColorButton
              variant="contained"
              size="small"
              className="m-1"
              onClick={handleTempData}
            >
              Temp
            </ColorButton>
            <ColorButton
              variant="contained"
              size="small"
              className="m-1"
              onClick={() => {
                setOptions((prev) => {
                  const change = prev.Type === "column" ? "line" : "column";
                  return { ...prev, Type: change };
                });
              }}
            >
              {options.Type === "column" ? <Activity /> : <BarChart2 />}
            </ColorButton>
          </div>
        </div>
        <div>
          {loading ? (
            <div className="chartholder"> </div>
          ) : (
            <Chart options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
