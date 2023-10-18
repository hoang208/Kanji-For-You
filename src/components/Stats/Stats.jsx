import { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

ChartJS.defaults.color = "#FFF";
ChartJS.defaults.borderColor = "#FFF";

export default function Stats() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);
  const status = count.map((statuses) => statuses.status);
  const countPerStatus = count.map((statuses) => parseInt(statuses.count));

  useEffect(() => {
    dispatch({ type: "GET_COUNT" });
  }, []);

  const data = {
    labels: status,
    datasets: [
      {
        label: "Count",
        data: countPerStatus,
        backgroundColor: [
          "rgba(255, 0, 0, 0.6)",
          "rgba(255, 255, 0, 0.6)",
          "rgba(0, 0, 255, 0.6)",
          "rgba(0, 255, 0, 0.6)",
        ],
        borderWidth: 1,
        datalabels: {
          color: "white",
        },
      },
    ],
  };

  return (
    <div className="aboutContainer">
      <div className="heroSection">
        <div className="heroBox">
          <div className="heroTitle left">
            <h1 className="subHeader">Bar</h1>
          </div>

          <div className="heroContent">
            <Bar
              data={data}
              plugins={[ChartDataLabels]}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Status Count",
                  },
                  legend: {
                    display: false,
                  },
                  datalabels: {
                    color: "white",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="heroSection">
        <div className="heroBox">
          <div className="heroContent">
            <Pie
              data={data}
              plugins={[ChartDataLabels]}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Status Count",
                  },
                  datalabels: {
                    formatter: (value, ctx) => {
                      let sum = 0;
                      let dataArr = ctx.chart.data.datasets[0].data;
                      dataArr.map((data) => {
                        sum += data;
                      });
                      let percentage = ((value * 100) / sum).toFixed(2) + "%";
                      return percentage;
                    },
                    color: "#fff",
                  },
                },
              }}
            />
          </div>
          <div className="heroTitle right">
            <h1 className="subHeader">Pie</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
