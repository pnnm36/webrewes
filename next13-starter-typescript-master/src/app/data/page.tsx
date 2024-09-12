"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import style from "./page.module.css";
import Link from "next/link";

interface dataTime {
  datetime: string;
  unixtime: number;
  timezone: string;
  utc_datetime: string;
}

export default function Home() {
  const [data, setData] = useState<dataTime>({
    datetime: "",
    unixtime: 0,
    timezone: "",
    utc_datetime: "",
  });
  const [datas, setDatas] = useState<any>([]);
  useEffect(() => {
    const Timecls = setInterval(async () => {
      await axios
        .get("http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh")
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
        });
    }, 1000);
    const Timeclx = setInterval(async () => {
      await axios
        .get(
          "https://xoj0i9dqie.execute-api.ap-southeast-1.amazonaws.com/lastest"
        )
        .then((res) => {
          console.log(res.data);
          setDatas(res.data);
        });
    }, 7000);
    return () => {
      clearInterval(Timecls);
      clearInterval(Timeclx);
    };
  }, []);
  var rounded = Math.round(datas[0]?.uSv * 100) / 100;
  var rounded1 = Math.round(datas[0]?.Cps * 100) / 100;
  return (
    <div className={style.page}>
      {/* <div className={style.space1}></div> */}
      <div className={style.detail}>
        {" "}
        <div className={style.station}>
          <h2>Station 1</h2>
          <h2>
            I89, Nguyen Van Cu, District 5, Ho Chi Minh University of Science{" "}
          </h2>
        </div>
        <div className={style.Time}>
          <h2>
            Vietnam Time: {data.datetime.substring(11, 19)} UTC{" "}
            {data.datetime.substring(26, 32)} {data.datetime.substring(0, 10)}
          </h2>
          <h2>ESP DateTime: {datas[0]?.LocalTime}</h2>
          <h2>ESP EpochTime: {datas[0]?.TimeStamp}</h2>
          <h2>EpochTime Now: {data.unixtime + 7 * 3600}</h2>
        </div>
        <div>
          {" "}
          {/* <a href="https://kt9diobf69.execute-api.ap-southeast-1.amazonaws.com/data/lam_rds/csvfile">
            <button className={style.button17}>Download Data</button>
          </a> */}
          <a href="https://xoj0i9dqie.execute-api.ap-southeast-1.amazonaws.com/csvfilef">
            <button className={style.button17}>
              Download (compressed .gz)
            </button>
          </a>
        </div>
      </div>
      <div className={style.space1}></div>
      <Container className={style.container1}>
        <div></div>
        <div className={style.content_list}>
          <div className={style.content}>
            <div className={style.category1}></div>
            <div>
              <h3 className={style.h3}>Temperature</h3>
              <p className={style.p}>Recent Received</p>
              <h2 className={style.h2}>{datas[0]?.Temperature} oC</h2>
            </div>
            {/* <Image
              src="s3://rewes2024/imgTemp.jpg"
              alt=""
              width={100}
              height={100}
            /> */}
          </div>
          <div className={style.content}>
            <div className={style.category2}></div>
            <div>
              <h3 className={style.h3}>Humidity</h3>
              <p className={style.p}>Recent Received</p>
              <h2 className={style.h2}>{datas[0]?.Humidity} %</h2>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.category3}></div>
            <div>
              <h3 className={style.h3}>Radiation</h3>
              <p className={style.p}>Recent Received</p>
              <h2 className={style.h2}>{rounded} uSv/h</h2>
            </div>
            {/* <Image
              src="s3://rewes2024/imgRadiation.jpg"
              alt=""
              width={100}
              height={100}
            /> */}
          </div>
          <div className={style.content}>
            <div className={style.category4}></div>
            <div>
              <h3 className={style.h3}>Cps</h3>
              <p className={style.p}>Recent Received</p>
              <h2 className={style.h2}>{rounded1}</h2>
            </div>
            {/* <Image
              src="s3://rewes2024/imgCps.jpg"
              alt=""
              width={100}
              height={100}
            /> */}
          </div>
        </div>
      </Container>
      {/* <div className={style.space2}> </div> */}
    </div>
  );
}
