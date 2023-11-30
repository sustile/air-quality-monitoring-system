import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./FPM.css";
import Graph from "./Graph";

export default function FPM({ fpm, setGraphData }) {
  let [width, setWidth] = useState(5);
  let [textColor, setTextColor] = useState("#242423");
  let charts = [
    { from: 0, to: 54, status: "Good", bar: 20, color: "#9cf06a" },
    { from: 55, to: 154, status: "Moderate", bar: 40, color: "#f7924e" },
    {
      from: 155,
      to: 254,
      status: "Unhealthy for Sensitive Gorups",
      bar: 60,
      color: "#f8741d",
    },
    {
      from: 255,
      to: 354,
      status: "Unhealthy",
      bar: 80,
      color: "#fc4646",
    },
    {
      from: 355,
      to: 100000000,
      status: "Very Unhealthy",
      bar: 100,
      color: "#612c42",
      textColor: "#d8e2dc",
      //   textColor: "#adb5bd",
    },
  ];

  let [status, setStatus] = useState("");
  let [barWidth, setBarWidth] = useState(0);
  let [color, setColor] = useState("f9dc5c");

  useEffect(() => {
    charts.forEach((el) => {
      if (fpm >= el.from && fpm <= el.to) {
        setStatus(el.status);
        setBarWidth(el.bar);
        setColor(el.color);
        if (el.textColor) setTextColor(el.textColor);
      }
    });
  }, []);
  return (
    <motion.div className="FPM">
      <div className="FPM-bg">
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
            setGraphData({ status: true, type: "fpm" });
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
            Fine Particulate Matter
          </h3>
          <p
            style={{
              color: textColor,
              fontWeight: textColor === "#242423" ? "600" : "500",
            }}
          >
            {fpm} ppm
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
