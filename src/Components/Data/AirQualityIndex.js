import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./AirQualityIndex.css";
import Graph from "./Graph";

export default function AirQualityIndex({ index, setGraphData }) {
  let [width, setWidth] = useState(5);
  let [textColor, setTextColor] = useState("#242423");
  let charts = [
    { from: 0, to: 50, status: "Good", bar: 20, color: "#9cf06a" },
    { from: 51, to: 100, status: "Moderate", bar: 30, color: "#ffc300" },
    {
      from: 101,
      to: 150,
      status: "Unhealthy for Sensitive Groups",
      bar: 40,
      color: "#f7924e",
    },
    {
      from: 151,
      to: 200,
      status: "Unhealthy",
      bar: 60,
      color: "#fc4646",
    },
    {
      from: 201,
      to: 300,
      status: "Very Unhealthy",
      bar: 80,
      color: "#826aed",
    },
    {
      from: 301,
      to: 100000000000000,
      status: "Hazardous",
      bar: 100,
      color: "#612c42",
      textColor: "#ced4da",
    },
  ];

  let [status, setStatus] = useState("");
  let [barWidth, setBarWidth] = useState(0);
  let [color, setColor] = useState("f9dc5c");

  useEffect(() => {
    charts.forEach((el) => {
      if (index >= el.from && index <= el.to) {
        setStatus(el.status);
        setBarWidth(el.bar);
        setColor(el.color);
        if (el.textColor) setTextColor(el.textColor);
      }
    });
  }, []);
  return (
    <motion.div className="AirQualityIndex">
      <div className="AirQualityIndex-bg">
        <motion.p
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.03,
            transition: {
              duration: 0.3,
              type: "spring",
            },
          }}
          whileTap={{
            scale: 1,
            transition: {
              duration: 0.3,
              type: "spring",
            },
          }}
          className="view-graph"
          onClick={() => {
            setGraphData({ status: true, type: "air" });
          }}
        >
          View Graph
        </motion.p>
        <AnimatePresence>
          {width === 5 && (
            <motion.img
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                  type: "spring",
                },
              }}
              whileTap={{
                scale: 1,
                transition: {
                  duration: 0.3,
                  type: "spring",
                },
              }}
              onClick={() => {
                setWidth(20);
              }}
              src={"/Icons/RightArrow.svg"}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {width === 20 && (
            <motion.img
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                  type: "spring",
                },
              }}
              whileTap={{
                scale: 1,
                transition: {
                  duration: 0.3,
                  type: "spring",
                },
              }}
              onClick={() => {
                setWidth(5);
              }}
              src={"/Icons/x.svg"}
            />
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="MainData"
        style={
          width === 5
            ? { width: `calc(100% - 5rem)` }
            : { width: `calc(100% - 20rem)` }
        }
      >
        <div className="textData">
          <h3
            style={{
              color: textColor,
              fontWeight: textColor === "#242423" ? "600" : "500",
            }}
          >
            Air Quality Index
          </h3>
          <p
            style={{
              color: textColor,
              fontWeight: textColor === "#242423" ? "600" : "500",
            }}
          >
            {index}
          </p>
        </div>
        <span>{status}</span>
        <div
          className="colorBar"
          style={{ width: `${barWidth}%`, backgroundColor: color }}
        ></div>
      </motion.div>
    </motion.div>
  );
}
