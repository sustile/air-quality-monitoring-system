import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Humidity.css";

export default function Humidity({ humidity }) {
  let [width, setWidth] = useState(5);
  let charts = [
    { from: 0, to: 25, status: "Poor", bar: 20, color: "#fc4646" },
    { from: 25, to: 30, status: "Fair", bar: 40, color: "#f9dc5c" },
    { from: 30, to: 60, status: "Good", bar: 60, color: "#9cf06a" },
    {
      from: 60,
      to: 70,
      status: "Fair",
      bar: 80,
      color: "#f9dc5c",
    },
    {
      from: 70,
      to: 100000000,
      status: "Harmful",
      bar: 100,
      color: "#fc4646",
    },
  ];

  let [status, setStatus] = useState("");
  let [barWidth, setBarWidth] = useState(0);
  let [color, setColor] = useState("f9dc5c");

  useEffect(() => {
    charts.forEach((el) => {
      if (humidity >= el.from && humidity <= el.to) {
        setStatus(el.status);
        setBarWidth(el.bar);
        setColor(el.color);
      }
    });
  }, []);

  return (
    <motion.div className="Humidity">
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
          <h3>Humidity</h3>
          <p>{humidity}%</p>
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
