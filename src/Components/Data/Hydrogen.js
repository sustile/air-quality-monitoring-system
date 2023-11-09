import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Hydrogen.css";

export default function Hydrogen({ hydrogen, setGraphData }) {
  let [width, setWidth] = useState(5);
  let [barWidth, setBarWidth] = useState(80);
  return (
    <motion.div className="Hydrogen">
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
          setGraphData({ status: true, type: "hydrogen" });
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
          <h3>Hydrogen</h3>
          <p>{hydrogen}%</p>
        </div>
        <div className="colorBar"></div>
      </motion.div>
    </motion.div>
  );
}
