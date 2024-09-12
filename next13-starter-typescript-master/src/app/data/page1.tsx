// "use client";
// import Image from "next/image";
// import styles from "./page.module.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { Container } from "react-bootstrap";
// import { error } from "console";
// export default function Home() {
//   //cach ban dau duung chung api nhung can set lai esp de gui 1s 1 lan
//   // const [data, setData] = useState([]);
//   // const [dataTime, setDataTime] = useState([]);
//   // useEffect(() => {
//   //   const fetch = async () => {
//   //     await axios
//   //       .get(
//   //         "https://kt9diobf69.execute-api.ap-southeast-1.amazonaws.com/data/lam_rds/lastest"
//   //       )
//   //       .then((response) => {
//   //         setData(response.data);
//   //       });
//   //   };
//   //   const timer = setTimeout(() => {
//   //     fetch();
//   //   }, 8000);
//   //   return () => clearTimeout(timer);
//   // });

//   //cach thu2 dung api rieng la worldwideAPI
//   // const [data, setData] = useState([]);
//   // const [dataTime, setDataTime] = useState([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         "https://kt9diobf69.execute-api.ap-southeast-1.amazonaws.com/data/lam_rds/lastest"
//   //       );
//   //       setData(response.data);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   const timer1 = setTimeout(fetchData, 8000);

//   //   return () => clearTimeout(timer1);
//   // }, []); // Add an empty dependency array

//   // useEffect(() => {
//   //   const fetchDataTime = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         "http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh"
//   //       );
//   //       setDataTime(response.data.dateTime);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   const timer2 = setTimeout(fetchDataTime, 1000);

//   //   return () => clearTimeout(timer2);
//   // }); // Add an empty dependency array

//   // const [data, setData] = useState([]);
//   // const [dataTime, setDataTime] = useState([]);
//   // const [currentTime, setCurrentTime] = useState(new Date());
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         "https://kt9diobf69.execute-api.ap-southeast-1.amazonaws.com/data/lam_rds/lastest"
//   //       );
//   //       setData(response.data);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   const timer1 = setTimeout(fetchData, 8000);

//   //   return () => clearTimeout(timer1);
//   // });

//   // useEffect(() => {
//   //   const fetchDataTime = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         "http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh"
//   //       );
//   //       // Assuming you need the 'datetime' property from the response
//   //       setDataTime(response.data.datetime);
//   //     } catch (error) {
//   //       console.error("Error fetching dataTime:", error);
//   //     }
//   //   };

//   //   const timer2 = setTimeout(fetchDataTime, 1000);

//   //   return () => clearTimeout(timer2);
//   // });

//   // useEffect(() => {
//   //   const timer2 = setInterval(() => {
//   //     setCurrentTime(new Date());
//   //   }, 1000);

//   //   return () => clearInterval(timer2);
//   // }, []);

//   //su dung setInterval
//   const [data, setData] = useState([]);
//   const [dataTime, setDataTime] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchData = () => {
//       axios
//         .get(
//           "https://kt9diobf69.execute-api.ap-southeast-1.amazonaws.com/data/lam_rds/lastest"
//         )
//         .then((respone) => {
//           setData(respone.data);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching time:", error);
//           setIsLoading(false);
//         });
//     };
//     const interval1 = setInterval(fetchData, 8000);
//     return () => {
//       clearInterval(interval1);
//     };
//   }, []);
//   useEffect(() => {
//     const fetchDataTime = () => {
//       axios
//         .get("http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh")
//         .then((respone) => {
//           setDataTime(respone.data.dateTime);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching time:", error);
//           setIsLoading(false);
//         });
//     };
//     const interval2 = setInterval(fetchDataTime, 1000);
//     return () => {
//       clearInterval(interval2);
//     };
//   }, []);

//   // console.log(data);
//   console.log(dataTime);
//   return (
//     <main
//       style={{
//         background: "#b3dff7",
//         height: "90vh",
//         width: "100%",
//         // textAlign: "center",
//         // padding: "5px 0",
//         // border: "1px solid black",
//       }}
//     >
//       <div>
//         <div>{dataTime}</div>
//         {/* {data.map((data) => (
//           <div>{data.epochTime}</div>
//         ))} */}
//         {/* <div>{currentTime.toLocaleString()}</div> */}

//         {/* {data.map((data) => (
//           <div>{data.Temperature}</div>
//         ))} */}
//         {/* {data.map((data) => (
//           <div>{data.Humidity}</div>
//         ))} */}
//       </div>
//       <div className="col">
//         <div
//           className="container"
//           style={{ background: "black", width: "300px", height: "300px" }}
//         >
//           1
//         </div>
//         <div className="container " style={{ background: "black" }}>
//           2
//         </div>
//       </div>
//       <div className="col">
//         <div className="container" style={{ background: "black" }}>
//           3
//         </div>
//         <div className="container" style={{ background: "black" }}>
//           4
//         </div>
//       </div>
//       <div className="col">
//         <div className="container" style={{ background: "black" }}>
//           5
//         </div>
//         <div className="container" style={{ background: "black" }}>
//           6
//         </div>
//       </div>
//     </main>
//   );
// }
