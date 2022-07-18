import React from "react";
import closeIcon from "../../assets/svg/close.svg";

const AlertModal = ({ setOpenModal, alert }) => {
  return (
    <div
      style={{
        zIndex: "2",
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "3rem",
        alignItems: "center",
        background: "#fbdad9",
        border: "solid 2px red",
      }}
    >
      <div>{alert}</div>
      <img
        style={{ position: "absolute", right: "1rem" }}
        src={closeIcon}
        onClick={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
};

export default AlertModal;
