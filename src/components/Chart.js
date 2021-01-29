import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ options }) => {
  const Opt = {
    chart: {
      type: options.Type,
      height: 350,
    },
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    chartHeight: 100,
    xAxis: {
      lineWidth: 5,
      lineColor: "#ffffff",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      title: {
        text: null,
      },
    },
    yAxis: {
      lineWidth: 1,
      gridLineWidth: 0,
      min: 0,
      title: {
        text: null,
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.35,
        borderRadius: 5,
        color: "#3b82ec",
      },
    },
    series: [
      {
        name: options.Name,
        data: [...options.Data],
      },
    ],
  };
  return (
    <HighchartsReact highcharts={Highcharts} options={Opt} oneToOne={true} />
  );
};

export default Chart;
