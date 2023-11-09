import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./CarbonMonoxide.css";

export default function CarbonMonoxide({ carbon, setGraphData }) {
  let [width, setWidth] = useState(5);
  let charts = [
    { from: 0, to: 50, status: "Good", bar: 20, color: "#9cf06a" },
    { from: 51, to: 100, status: "Medium", bar: 40, color: "#f9dc5c" },
    { from: 101, to: 199, status: "Unhealthy", bar: 60, color: "#f7924e" },
    { from: 200, to: 299, status: "Very Unhealthy", bar: 80, color: "#f8741d" },
    { from: 300, to: 100000000, status: "Harmful", bar: 100, color: "#fc4646" },
  ];

  let [status, setStatus] = useState("");
  let [barWidth, setBarWidth] = useState(0);
  let [color, setColor] = useState("f9dc5c");

  useEffect(() => {
    charts.forEach((el) => {
      if (carbon >= el.from && carbon <= el.to) {
        setStatus(el.status);
        setBarWidth(el.bar);
        setColor(el.color);
      }
    });
  }, []);
  return (
    <motion.div className="CarbonMonoxide">
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
          setGraphData({ status: true, type: "carbon" });
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

      <motion.div
        className="MainData"
        style={
          width === 5
            ? { width: `calc(100% - 5rem)` }
            : { width: `calc(100% - 20rem)` }
        }
      >
        <div className="textData">
          <h3>Carbon Monoxide</h3>
          <p>{carbon}ppm</p>
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
