import React from "react";
import { motion } from "framer-motion";
import "./Data.css";
import Temperature from "./Temperature";
import CarbonMonoxide from "./CarbonMonoxide";
import Humidity from "./Humidity";
import Hydrogen from "./Hydrogen";

export default function Data({ latest, data }) {
  let date = new Date(data.time);
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
  return (
    <motion.div className="Data">
      <h2>
        {latest && "Latest Data from"} <span>{dateString}</span>
      </h2>
      <Temperature temp={data.temperature} />
      <Humidity humidity={data.humidity} />
      <CarbonMonoxide carbon={data.carbonMonoxide} />
      <Hydrogen hydrogen={data.hydrogen} />
    </motion.div>
  );
}
