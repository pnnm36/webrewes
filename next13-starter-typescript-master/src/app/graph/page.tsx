"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import { Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  plugins,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { title } from "process";
import { text } from "stream/consumers";
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  scales
);

function TestPage() {
  const [uSvData, setUSvData] = useState<number[]>([]);
  const [localTimeData, setLocalTimeData] = useState<string[]>([]);
  const [temperatureData, setTemperatureData] = useState<number[]>([]);
  const [datas, setDatas] = useState<any>([]);
  const [CpsData, setCpsData] = useState<number[]>([]);
  const [humidityData, setHumidityData] = useState<number[]>([]);
  const [countsData, setCountsData] = useState<number[]>([]);
  useEffect(() => {
    const Timeclx = setInterval(async () => {
      await axios
        .get(
          "https://xoj0i9dqie.execute-api.ap-southeast-1.amazonaws.com/lastest"
        )
        .then((res) => {
          console.log(res.data);
          setDatas(res.data);
          setTemperatureData((prevData) => {
            let newData = [...prevData, res.data[0].Temperature];
            return newData.length > 30 ? newData.slice(-30) : newData;
          });

          setUSvData((prevData) => {
            let newData = [...prevData, res.data[0].uSv];
            return newData.length > 30 ? newData.slice(-30) : newData;
          });

          setLocalTimeData((prevData) => {
            let newData = [...prevData, res.data[0].LocalTime];
            return newData.length > 30 ? newData.slice(-30) : newData;
          });

          setCpsData((prevData) => {
            let newData = [...prevData, res.data[0].Cps];
            return newData.length > 30 ? newData.slice(-30) : newData;
          });
          setHumidityData((prevData) => {
            let newData = [...prevData, res.data[0].Humidity];
            return newData.length > 30 ? newData.slice(-30) : newData;
          });
          setCountsData((prevData) => {
            let newData = [...prevData, res.data[0].Counts];
            return newData.length > 30 ? newData.slice(-30) : newData;
          });
        });
    }, 7000);
    return () => {
      clearInterval(Timeclx);
    };
  }, []);
  var rounded = Math.round(datas[0]?.uSv * 100) / 100;
  var rounded1 = Math.round(datas[0]?.Cps * 100) / 100;
  const data = {
    labels: localTimeData,
    datasets: [
      {
        label: "Temperature (oC)",
        data: temperatureData,
        borderColor: "orange",
        borderWidth: 2,
        pointRadius: 2,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (oC)",
        },
      },
    },
  };
  const data1 = {
    labels: localTimeData,
    datasets: [
      {
        label: "uSv",
        data: uSvData,
        borderColor: "red",
        borderWidth: 2,
        pointRadius: 2,
      },
    ],
  };
  const options1 = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "uSv/h",
        },
      },
    },
  };
  const data2 = {
    labels: localTimeData,
    datasets: [
      {
        label: "cps",
        data: CpsData,
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 2,
      },
    ],
  };
  const options2 = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "cps",
        },
      },
    },
  };
  const data3 = {
    labels: localTimeData,
    datasets: [
      {
        label: "Humidity (%)",
        data: humidityData,
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 2,
      },
    ],
  };
  const options3 = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Humidity (%)",
        },
      },
    },
  };
  const data4 = {
    labels: localTimeData,
    datasets: [
      {
        label: "counts",
        data: countsData,
        borderColor: "purple",
        borderWidth: 2,
        pointRadius: 2,
      },
    ],
  };
  const options4 = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "counts",
        },
      },
    },
  };

  return (
    <div className={styles.background}>
      <div className={styles.upside}>
        <Card className={styles.cardWithBorder}>
          <Card.Title className={styles.cardTittle}>
            Temperature Now: {datas[0]?.Temperature}
          </Card.Title>
          <Card.Body className={styles.cardBody}>
            <Line data={data} options={options} />
          </Card.Body>
        </Card>
        <Card className={styles.cardWithBorder}>
          <Card.Title className={styles.cardTittle}>
            Humidity Now: {datas[0]?.Humidity}
          </Card.Title>
          <Card.Body className={styles.cardBody}>
            <Line data={data3} options={options3} />
          </Card.Body>
        </Card>
      </div>
      <div className={styles.downside}>
        <Card className={styles.cardWithBorder}>
          <Card.Title className={styles.cardTittle}>
            uSv Now: {rounded} uSv/h
          </Card.Title>
          <Card.Body className={styles.cardBody}>
            <Line data={data1} options={options1} />
          </Card.Body>
        </Card>
        <Card className={styles.cardWithBorder}>
          <Card.Title className={styles.cardTittle}>
            Cps Now: {rounded1}
          </Card.Title>
          <Card.Body className={styles.cardBody}>
            <Line data={data2} options={options2} />
          </Card.Body>
        </Card>
        <Card className={styles.cardWithBorder}>
          <Card.Title className={styles.cardTittle}>
            Counts Now: {datas[0]?.Counts}
          </Card.Title>
          <Card.Body className={styles.cardBody}>
            <Line data={data4} options={options4} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TestPage;
//multi y axis
// const config = {
//   labels: localTimeData,
//   datasets: [
//     {
//       label: "Temperature",
//       data: temperatureData,
//       fill: false,
//       borderColor: "rgb(75, 192, 192)",
//       tension: 0.1,
//     },
//     {
//       label: "Humidity",
//       data: humidityData,
//       borderColor: "yellow",
//       borderWidth: 2,
//       pointRadius: 4,
//     },
//   ],
//   options: {
//     responsive: true,
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     stacked: false,
//     plugins: {
//       title: {
//         display: true,
//         text: "Temperature- Humidity by Time",
//       },
//     },
//     scales: {
//       y: {
//         type: "linear",
//         display: true,
//         position: "left",
//       },
//       y1: {
//         type: "linear",
//         display: true,
//         position: "right",
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//     },
//   },
// };
