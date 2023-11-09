import "./App.css";
import Header from "./Components/Header";
import DataContainer from "./Components/DataContainer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, PieChart } from "react-chartkick";
import "chartkick/chart.js";
import Graph from "./Components/Data/Graph";
import Data from "./Components/Data/Data";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Components/Footer";
import { CaretUp } from "@phosphor-icons/react";

function App() {
  let [data, setData] = useState(null);
  let [tempData, setTempData] = useState([]);
  let [humidityData, setHumidityData] = useState([]);
  let [carbonData, setCarbonData] = useState([]);
  let [hydrogenData, setHydrogenData] = useState([]);
  let [graph, setGraph] = useState({ status: false, type: "" });
  let [showTop, setShowTop] = useState(false);

  function setGraphData(x) {
    setGraph(x);
  }

  function closeGraph() {
    setGraph({ status: false, type: "" });
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let scroll = window.scrollY;
      setShowTop(scroll > 200);
    });
  }, []);

  useEffect(() => {
    if (!data) return;
    setTempData(
      data.map((el) => {
        return {
          data: el.temperature,
          time: el.time,
        };
      })
    );
    setHumidityData(
      data.map((el) => {
        return {
          data: el.humidity,
          time: el.time,
        };
      })
    );
    setCarbonData(
      data.map((el) => {
        return {
          data: el.carbonMonoxide,
          time: el.time,
        };
      })
    );
    setHydrogenData(
      data.map((el) => {
        return {
          data: el.hydrogen,
          time: el.time,
        };
      })
    );
  }, [data]);

  async function reloadData() {
    let { data } = await axios.get("http://54.146.136.146:4000/api/getData");
    // let { data } = await axios.get("http://localhost:4000/api/getData");
    setData(data.data);
  }

  useEffect(() => {
    reloadData();
  }, []);

  return (
    <div className="App">
      <Header reloadData={reloadData} />
      <DataContainer data={data} setGraphData={setGraphData} />
      <Graph
        title={
          graph.type === "temp"
            ? "Temperature"
            : graph.type === "hydrogen"
            ? "Hydrogen"
            : graph.type === "carbon"
            ? "Carbon Monoxide"
            : "Humidity"
        }
        inputData={
          graph.type === "temp"
            ? tempData
            : graph.type === "hydrogen"
            ? hydrogenData
            : graph.type === "carbon"
            ? carbonData
            : humidityData
        }
        closeGraph={closeGraph}
        status={graph.status}
      />
      <Footer />
      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{
              scale: 0.5,
              opacity: 0,
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
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.3,
                type: "spring",
              },
            }}
            exit={{
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 0.3,
                type: "spring",
              },
            }}
            className="goUp"
            onClick={() => window.scrollTo(0, 0)}
          >
            <CaretUp weight="bold" className="graphClose" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
