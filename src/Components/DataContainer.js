import React from "react";
import { motion } from "framer-motion";
import "./DataContainer.scss";
import Data from "./Data/Data";
export default function DataContainer({ data, setGraphData }) {
  return (
    <motion.div className="DataContainer">
      {data?.map((el, i) => (
        <Data
          latest={i == 0}
          data={el}
          setGraphData={setGraphData}
          number={i + 1}
        />
      ))}
    </motion.div>
  );
}
