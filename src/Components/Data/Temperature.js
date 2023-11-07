import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Temperature.scss";

export default function Temperature({ temp }) {
  let [width, setWidth] = useState(5);
  let charts = [
    { from: 0, to: 10, status: "Cold", bar: 20, color: "#023e8a" },
    { from: 10, to: 20, status: "Cool", bar: 40, color: "#8ecae6" },
    { from: 20, to: 30, status: "Warm", bar: 60, color: "#f7924e" },
    {
      from: 30,
      to: 40,
      status: "Hot",
      bar: 80,
      color: "#f8741d",
    },
    {
      from: 40,
      to: 100000000,
      status: "Blazing",
      bar: 100,
      color: "#fc4646",
    },
  ];

  let [status, setStatus] = useState("");
  let [barWidth, setBarWidth] = useState(0);
  let [color, setColor] = useState("f9dc5c");

  useEffect(() => {
    charts.forEach((el) => {
      if (temp >= el.from && temp <= el.to) {
        setStatus(el.status);
        setBarWidth(el.bar);
        setColor(el.color);
      }
    });
  }, []);
  return (
    <motion.div className="Temperature">
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
          <h3>Temperature</h3>
          <p>{temp} Degrees</p>
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
