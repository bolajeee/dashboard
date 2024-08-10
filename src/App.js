/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";


import {Navbar, Footer, Sidebar, ThemeSettings, Stacked} from "./components"
import { Customers, Kanban, Area, Bar, Pie, Calender, Financial, ColorPicker, ColorMapping, Line, Editor, Pyramid, Employees, Orders, Ecommerce } 
from './pages'

import "./App.css";

const App = () => {
  const activeMenu = false;
 
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4 " style={{ zindex: "1000" }}>
              <TooltipComponent content="settings" position="Top">
                <button
                  type="button"
                  className="text-3xl p-3 hover:drop-shadow-xl
                 hover:bg-light-gray text-white"
                  style={{
                    background: "blue",
                    borderRadius: "50%",
                  }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div
                className="w-72 fixed sidebar dark:bg-secondary-dark-bg
              bg-white 
              "
              >
                <Sidebar />
              </div>
            ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  {Sidebar
                  }</div>
            )}
            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
               ${activeMenu ? " md:ml-72" : "flex-2"}
              `}
            >
              <div
                className="fixed md:static bg-main-bg
              dark:bg-main-dark-bg navbar w-full"
              >
                <navbar />
              </div>
            </div>

            <div>
              <Routes>
                {/* DashBoard */}
                <Route path="/" element={<Ecommerce />}></Route>
                <Route path="/ecommerce" element={<Ecommerce />}></Route>

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/Kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor/>} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element="Financial" />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
