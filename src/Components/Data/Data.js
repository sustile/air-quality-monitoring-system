import React from "react";
import { motion } from "framer-motion";
import "./Data.css";
import Temperature from "./Temperature";
import CarbonMonoxide from "./CarbonMonoxide";
import Humidity from "./Humidity";
import Hydrogen from "./Hydrogen";

export default function Data({ latest }) {
  return (
    <motion.div className="Data">
      <h2>
        {latest && "Latest Data from"} <span>11/5/2023 12:40pm</span>
      </h2>
      <Temperature />
      <Humidity />
      <CarbonMonoxide />
      <Hydrogen />
    </motion.div>
  );
}
