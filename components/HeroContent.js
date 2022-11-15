import React from "react";
import styles from "../styles/HeroContent.module.css";
import Image from "next/image";

const HeroContent = () => {
  return (
    <div
      style={{
        padding: 36 + "px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Image src="/white_logo.svg" width={43} height={43} alt="Twitter Logo" />
      <h1
        style={{
          marginTop: 48 + "px",
          marginBottom: 48 + "px",
          fontWeight: "900",
          fontSize: "4rem",
          color: "#e7e9ea",
        }}
      >
        Şu anda olup
        <br />
        bitenler
      </h1>
      <h2
        style={{
          marginBottom: 32 + "px",
          color: "#e7e9ea",
          fontWeight: "900",
          fontSize: "2rem",
        }}
      >
        {"Twitter'a bugün katıl."}
      </h2>
      <div
        style={{
          width: "300px",
          height: "40px",
          borderRadius: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          color: "#3c4043",
          marginBottom: "12px",
          fontWeight: "500",
          fontSize: "16",
          cursor: "pointer",
          gap: "8px",
        }}
      >
        <Image src="/google.svg" width={16} height={16} alt="Google Logo" />
        Google ile kaydolun
      </div>
      <div
        style={{
          width: "300px",
          height: "40px",
          borderRadius: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          color: "#000000",
          marginBottom: "20px",
          fontWeight: "500",
          fontSize: "16",
          cursor: "pointer",
          gap: "8px",
        }}
      >
        <Image src="/apple.svg" width={15} height={18} alt="Apple Logo" />
        Apple ile kaydol
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "300px",
          height: "1px",
          backgroundColor: "#2f3336",
        }}
      >
        <span
          style={{
            position: "absolute",
            fontSize: "15px",
            backgroundColor: "#000",
            fontWeight: "300",
            padding: "0px 4px",
            fontSize: "15px",
          }}
        >
          veya
        </span>
      </div>
      <div
        style={{
          marginTop: "16px",
          width: "300px",
          height: "40px",
          borderRadius: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1d9bf0",
          color: "white",
          fontWeight: "500",
          fontSize: "16",
          cursor: "pointer",
          gap: "8px",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: "600" }}>
          Telefon numarası veya e-posta adre...
        </p>
      </div>
      <p style={{ fontSize: "11px", color: "#71767b", marginTop: "4px" }}>
        By signing up, you agree to the{" "}
        <span style={{ color: "#1d9bf0" }}>Terms of Service</span> and{" "}
        <span style={{ color: "#1d9bf0" }}>
          Privacy <br /> Policy
        </span>
        , including <span style={{ color: "#1d9bf0" }}>Cookie Usage.</span>
      </p>
      <h3 style={{ marginTop: "40px", fontSize: "17px" }}>
        Zaten hesabın var mı?
      </h3>
      <a
        href="#"
        style={{
          display: "flex",
          width: "320px",
          height: "40px",
          marginTop: "20px",
          borderRadius: "250px",
          border: "1px solid rgb(83, 100, 113)",
          justifyContent: "center",
          alignItems: "center",
          color: "#1d9bf0",
          fontWeight: "600",
        }}
      >
        Giriş Yap
      </a>
    </div>
  );
};
{
}

export default HeroContent;
