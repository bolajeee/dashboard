/* eslint-disable no-unused-vars */
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import { Button, LineChartComponent, SparkLineChart,  StackedChart } from "../components";
import { earningData, lineChartData, sparklineData, stackedChartData, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../data/dummy";

// import BarChart from "../components/Charts/BarChart";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$50,000</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div
          className="bg-white dark:text-gray-200 
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4 ">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$40,023</span>
                  <span className="p-1.5 rounded- full hover:drop-shadow-xl cursor-pointer text-white bg-green-400 ml-3 text-xs">
                    45%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$53,023</span>
                </p>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs">
                  23%
                </span>
                <p className="text-gray-500 mt-1">Expence</p>
              </div>

              <div className="mt-5">
                <SparkLineChart
                  id="line-chart"
                  currentColor="blue"
                  height="80px"
                  width="250px"
                  data={sparklineData}
                />
              </div>
            </div>

            <div>
              <StackedChart
                width="320px"
                height="360px"
                data={stackedChartData}
               
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
