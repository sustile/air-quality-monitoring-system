import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Data.css";
import Temperature from "./Temperature";
import CarbonMonoxide from "./CarbonMonoxide";
import Humidity from "./Humidity";
import Hydrogen from "./Hydrogen";
const Choreographer = require("choreographer-js");

export default function Data({ latest, data, setGraphData, number }) {
  let date = new Date(data.time);
  let box = useRef();
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dateString = `${String(date.getDate()).padStart(2, "0")} ${
    monthList[date.getMonth()]
  } ${date.getFullYear()}, ${
    date.getHours() > 12
      ? String(date.getHours() - 12).padStart(2, "0")
      : String(date.getHours()).padStart(2, "0")
  }:${String(date.getMinutes()).padStart(2, "0")} ${
    date.getHours() > 12 ? "PM" : "AM"
  }`;

  // useEffect(() => {
  //   if (!box) return;
  //   let data = box.current.getBoundingClientRect();
  //   let fromRange = Math.round(data.top - data.height / 2) - 100;
  //   let toRange = Math.round(data.top - data.height / 2);
  //   console.log([fromRange, toRange]);

  //   let choreographer = new Choreographer({
  //     animations: [
  //       {
  //         range: [fromRange, toRange],
  //         selector: `#box-${number}`,
  //         type: "scale",
  //         style: "transform:translateX",
  //         from: -500,
  //         to: 0,
  //         unit: "px",
  //       },
  //       {
  //         range: [fromRange, toRange],
  //         selector: `#box-${number}`,
  //         type: "scale",
  //         style: "opacity",
  //         from: 0,
  //         to: 1,
  //       },
  //     ],
  //   });

  //   window.addEventListener("scroll", () => {
  //     choreographer.runAnimationsAt(window.pageYOffset);
  //   });
  // }, [box]);

  // useEffect(() => {
  //   if (!box) return;
  //   // console.log(box.current.getBoundingClientRect());
  // }, [box]);

  return (
    <AnimatePresence>
      <motion.div
        className="Data"
        ref={box}
        initial={{ translateX: number % 2 === 0 ? 300 : -300, opacity: 0 }}
        animate={{
          translateX: 0,
          opacity: 1,
          transition: {
            duration: 1,
            type: "spring",
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.5,
            type: "spring",
          },
        }}
      >
        <h2>
          {latest && "Latest Data from"} <span>{dateString}</span>
        </h2>
        <Temperature temp={data.temperature} setGraphData={setGraphData} />
        <Humidity humidity={data.humidity} setGraphData={setGraphData} />
        <CarbonMonoxide
          carbon={data.carbonMonoxide}
          setGraphData={setGraphData}
        />
        {/* <Hydrogen hydrogen={data.hydrogen} setGraphData={setGraphData} /> */}
      </motion.div>
    </AnimatePresence>
  );
}
