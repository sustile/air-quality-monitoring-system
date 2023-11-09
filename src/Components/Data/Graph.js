import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Graph.css";
import { LineChart, PieChart } from "react-chartkick";
import "chartkick/chart.js";
import { X } from "@phosphor-icons/react";
import { compareAsc, formatDistance, subDays } from "date-fns";

export default function Graph({ title, inputData, closeGraph, status }) {
  let [day, setDay] = useState(10);
  let [data, setData] = useState(inputData);
  let [actualData, setActualData] = useState({});

  useEffect(() => {
    setDay(10);
  }, [status]);

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

  useEffect(() => {
    setData(inputData);
  }, [inputData]);

  useEffect(() => {
    let x = subDays(new Date().setHours(0, 0, 0, 0), day);
    let y = inputData.filter((el) => {
      if (compareAsc(x, new Date(el.time)) !== 1) return el;
    });
    setData(y);
  }, [day]);

  useEffect(() => {
    let final = {};
    data.forEach((el) => {
      let date = new Date(el.time);
      let dateString = `${String(date.getDate()).padStart(2, "0")} ${
        monthList[date.getMonth()]
      } ${date.getFullYear()}, ${
        date.getHours() > 12
          ? String(date.getHours() - 12).padStart(2, "0")
          : String(date.getHours()).padStart(2, "0")
      }:${String(date.getMinutes()).padStart(2, "0")} ${
        date.getHours() > 12 ? "PM" : "AM"
      }`;
      final[dateString] = el.data;
    });
    setActualData(final);
  }, [data]);

  return (
    <motion.div className="Graph" style={!status && { zIndex: "-1" }}>
      <AnimatePresence>
        {status && (
          <motion.div
            className="GraphContainer"
            initial={{ opacity: 0, transform: "translate(-50%, 0%)" }}
            animate={{
              opacity: 1,
              transform: "translate(-50%, -50%)",
              transition: {
                type: "spring",
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transform: "translate(-50%, 0%)",
              transition: {
                type: "spring",
                duration: 0.3,
              },
            }}
          >
            <div className="Graph-TitleCont">
              <h2 className="Graph-Title">{title} Data from the last</h2>
              <div className="daysCont">
                <motion.span
                  style={
                    day === 10
                      ? { transform: "translate(-50%, -50%)" }
                      : day === 20
                      ? { transform: "translate(-50%, -150%)" }
                      : { transform: "translate(-50%, -250%)" }
                  }
                  className={day !== 10 && "inActiveDay"}
                  onClick={() => setDay(10)}
                >
                  10 Days
                </motion.span>
                <motion.span
                  style={
                    day === 20
                      ? { transform: "translate(-50%, -50%)" }
                      : day === 10
                      ? { transform: "translate(-50%, 50%)" }
                      : { transform: "translate(-50%, -150%)" }
                  }
                  className={day !== 20 && "inActiveDay"}
                  onClick={() => setDay(20)}
                >
                  20 Days
                </motion.span>
                <motion.span
                  style={
                    day === 30
                      ? { transform: "translate(-50%, -50%)" }
                      : day === 20
                      ? { transform: "translate(-50%, 50%)" }
                      : { transform: "translate(-50%, 150%)" }
                  }
                  className={day !== 30 && "inActiveDay"}
                  onClick={() => setDay(30)}
                >
                  30 Days
                </motion.span>
              </div>
            </div>
            <LineChart
              colors={["#82cc56"]}
              discrete={true}
              data={actualData}
              loading="Loading..."
            />
            <motion.div
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
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
              className="graphCloseCont"
              onClick={() => closeGraph()}
            >
              <X weight="bold" className="graphClose" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                type: "spring",
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                type: "spring",
                duration: 0.3,
              },
            }}
            className="GraphBackdrop"
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
