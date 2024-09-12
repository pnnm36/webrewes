"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
//import Container from "react-bootstrap/Container";
export default function Home() {
  return (
    <div className={styles.about}>
      <div className={styles.about1}>
        {/* <h1 className={styles.h1}> CHÀO MỪNG ĐẾN VỚI REAL TIME MONITOR</h1> */}
        <h1 className={styles.h1}> WELCOME TO REAL TIME MONITOR</h1>
        <Link href="/data">
          <button className={styles.button24}>Explore Data</button>
        </Link>
      </div>
    </div>
  );
}
