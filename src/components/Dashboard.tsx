import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#1E1E1E",
        color: "#fff",
        height: "100vh",
      }}
    >
      <h1>Generate Solana</h1>
      <div
        style={{
          border: "1px solid #14F195",
          padding: "20px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid #14F195",
            padding: "80px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            {" "}
            Please connect your wallet to create a token
          </p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#9945FF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
