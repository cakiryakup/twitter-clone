import React from "react";
import styles from "../styles/Footer.module.css";

const HeroFooter = () => {
  return (
    <div
      style={{
        marginTop: "-20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "72px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12.5px",
          gap: "16px",
          color: "#71767b",
        }}
      >
        <a href="#">Hakkında</a>
        <a href="#">Yardım Merkezi</a>
        <a href="#">Hizmet Şartları</a>
        <a href="#">Gizlilik Politakası</a>
        <a href="#">Çerez Politakası</a>
        <a href="#">Imprint</a>
        <a href="#">Erişilebilirlik</a>
        <a href="#">Reklam Bilgisi</a>
        <a href="#">Blog</a>
        <a href="#">Durum</a>
        <a href="#">Kariyer</a>
        <a href="#">Marka Kaynakları</a>
        <a href="#">Reklam</a>
        <a href="#">Pazarlama</a>
        <a href="#">İşletmeler için Twitter</a>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12.5px",
          gap: "16px",
          color: "#71767b",
          marginTop: "-16px",
          marginBottom: "16px",
        }}
      >
        <a href="#">Geliştiriciler</a>
        <a href="#">Dizin</a>
        <a href="#">Ayarlar</a>
        <a href="#">© 2022 Twitter, Inc.</a>
      </div>
    </div>
  );
};

export default HeroFooter;
