import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import styles from "./Speedometer2.module.scss";

const SpeedometerComponent2 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.npoint.io/2593d8907a16c103ca03")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Caricamento...</div>;
  }

  const { color: needleColor, label } = getLabelInfoForValue(data.value, data.labels);

  return (
    <>
    <div className={styles.wrapper}>
      <ReactSpeedometer
        className={styles.speedometer}
        {...data} 
        needleColor={needleColor}
        width={300}
        height={230}
        />
      <div className={styles.valueLabel}>
        <span>{data.value}<br />{label}</span>
      </div>
    </div>
    <div className={styles.pageLoadInfo}>
      <h2>First Interaction</h2>
      <span>0.9s</span>
    </div>
   
    </>
  );
};

const getLabelInfoForValue = (value, labels) => {
  const labelInfo = labels.find(({ range }) => value >= range[0] && value < range[1]) || {};
  return {
    color: labelInfo.color || "#FFFFFF",
    label: labelInfo.label || ""
  };
};

export default SpeedometerComponent2;
