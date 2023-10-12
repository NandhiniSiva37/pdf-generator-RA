import React, { useRef, useState, useEffect } from "react";
import generatePDF from "react-to-pdf";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import printIcon from "../assets/printIcon.svg";
import logoIcon from "../assets/logo.svg";
import locationIcon from "../assets/location.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function PdfGenerator() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [graphData, setGraphData] = useState<any>();
  const [loading, setLoading] = useState(false);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const fetchGraphData = async () => {
    try {
      const response = await axios.get(
        "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv"
      );
      setGraphData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrintClick = async () => {
    setLoading(true);
    await generatePDF(targetRef, { filename: "Report.pdf" });
    setLoading(false);
  };

  useEffect(() => {
    fetchGraphData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-[400px]">
      {loading ? (
        <div className="flex h-full">
          <div className="mt-0.5 w-16 h-16 border-2 border-t-blue border-manageBgGrey rounded-[50%] border-solid animate-spin"></div>
        </div>
      ) : (
        <div
          className="bg-black w-32 h-16 p-4 rounded-[16px] cursor-pointer flex"
          onClick={handlePrintClick}
        >
          <img src={printIcon} alt="img" className="w-8 h-8" />
          <p className="text-white ml-2 font-semibold">Print</p>
        </div>
      )}
      <div className="mt-[900px]">
        {graphData && graphData.data && graphData.data.length > 0 && (
          <div
            ref={targetRef}
            className="flex flex-col justify-center items-center"
          >
            <div className="flex justify-between w-[900px]">
              <div className="flex p-4">
                <img src={logoIcon} alt="img" className="w-8 h-8 mr-2" />
                <p className="text-lg">RealAssist.AI</p>
              </div>
              <p className="font-black text-center p-4">
                123 Main Street, Dover, NH 03820-4667
              </p>
            </div>

            <div className="bg-gradient-to-r from-linear via-centr to-final h-[4px] w-[900px] mb-18"></div>
            {graphData.keys.map((offense: any, index: number) => (
              <div>
                <div className="flex flex-row justify-center items-center p-4">
                  <img src={locationIcon} alt="img" className="w-6 h-6 mt-3" />
                  <span className="text-blue text-base font-medium ml-1">
                    Crime
                  </span>
                  <div className="bg-gradient-to-r from-linear via-centr to-final h-[2px] w-[800px] ml-8 mt-5"></div>
                </div>
                <div
                  key={index}
                  className="w-[900px] mb-12 border border-lightBlue rounded-[13px] bg-lightBlue m-10 mt-0"
                >
                  <p className="text-blue font-medium w-[900px] p-4 rounded-t-[13px] bg-minimal">
                    {offense}
                  </p>
                  <Line
                    data={{
                      labels: graphData.data.map((item: any) => item.data_year),
                      datasets: [
                        {
                          label: "",
                          data: graphData.data.map(
                            (item: any) => item[offense]
                          ),
                          borderColor: `rgb(${Math.floor(
                            Math.random() * 256
                          )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                            Math.random() * 256
                          )})`,
                          backgroundColor: `rgb(242, 244, 245)`,
                        },
                      ],
                    }}
                    options={options}
                    className="bg-white rounded-[12px] border-white p-4 m-10"
                  />
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-r from-linear via-centr to-final h-[4px] w-[900px] mb-8"></div>
            <div className="flex justify-between w-[900px]">
              <div className="flex pb-4">
                <p className="font-black text-blue">
                  Report Genereted on September 26, 2023
                </p>
              </div>
              <p className="font-black text-center pb-4">
                RealAssist Property Report
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PdfGenerator;
