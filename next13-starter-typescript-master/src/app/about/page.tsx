"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
const about = () => {
  return (
    <div className={styles.about}>
      <Container className={styles.about1}>
        <h1>Real Time Monitor là gì</h1>
        <h2>
          Real Time Monitor hay bộ quan trắc thời gian thực là dự án hướng tới
          xây dựng các trạm đo môi trường nhằm thu nhận các dữ liệu ở nhiều địa
          phương và truyền tải thông tin một cách tức thời lên trang web hiển
          thị.
        </h2>
        <h1>Các công cụ xây dựng Real Time Monitor</h1>
        <div className={styles.listpic}>
          <div className={styles.anh1}>Mô hình Cloud Server AWS</div>
          <div className={styles.anh2}>Trạm đo thực tế</div>
          <div className={styles.anh3}>
            Mô hình hệ đo thời gian thực trực tuyến
          </div>
        </div>
        <h2>
          Về phía trạm đo, sử dụng firmare ESP8266 nhằm gửi thông tin từ trạm
          đến hệ thống truyền dữ liệu. Hệ thống truyền dữ liệu sử dụng các dịch
          vụ của AWS hay Amazon Web Services nhằm cung một hệ thống truyền thông
          tin đơn giản và dễ dàng tái sử dụng. Về phần website, framework được
          sử dụng là NextJs, là một framework mới và nhiều tiềm năng, sẽ giúp
          tối thiểu gánh nặng của server.{" "}
        </h2>
      </Container>
    </div>
  );
};

export default about;
