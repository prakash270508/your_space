import React, { useState } from "react";
import {
  FaHome,
  FaTable,
  FaIcons,
  FaChartBar,
  FaUser,
  FaLock,
  FaMedkit,
} from "react-icons/fa";
import Dashboard from "./MainPage/Dashboard";

export default function Admin() {
  const [selected, setSelected] = useState("dashboard");

  return (
    <>
      <div className="row">
        <div className="col-2 sideBar">
          <div className="profile mx-2 my-4">
            <div className="d-flex mx-4" style={{ cursor: "pointer" }}>
              <img
                src="https://themewagon.github.io/purple-react/static/media/face1.42d41e61.jpg"
                style={{ height: "50px", borderRadius: "50%" }}
                alt=""
              />
              <div className="mx-3 my-1">
                <h5>
                  <b>Prakash</b>
                </h5>
                <h6 style={{ marginTop: "-10px" }}>
                  <b className="text-muted">Manager</b>
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-4 mx-4">
            <div className="widgets">
              <FaHome size={30} />
              <span className="mx-4 mt-1">
                <h5>
                  <b
                    className={
                      selected == "dashboard" ? "selectedText" : "texts"
                    }
                    onClick={() => setSelected("dashboard")}
                  >
                    Dashboard
                  </b>
                </h5>
              </span>
            </div>
            <div className="widgets">
              <FaIcons size={"30"} />
              <span className="mx-4 mt-1">
                <h5>
                  <b
                    className={selected == "icons" ? "selectedText" : "texts"}
                    onClick={() => setSelected("icons")}
                  >
                    Icons
                  </b>
                </h5>
              </span>
            </div>
            <div className="widgets">
              <FaTable size={"30"} />
              <span className="mx-4 mt-1">
                <h5>
                  <b
                    className={selected == "table" ? "selectedText" : "texts"}
                    onClick={() => setSelected("table")}
                  >
                    Table
                  </b>
                </h5>
              </span>
            </div>
            <div className="widgets">
              <FaUser size={"30"} />
              <span className="mx-4 mt-1">
                <h5>
                  <b
                    className={selected == "user" ? "selectedText" : "texts"}
                    onClick={() => setSelected("user")}
                  >
                    User
                  </b>
                </h5>
              </span>
            </div>
            <div className="widgets">
              <FaChartBar size={"30"} />
              <span className="mx-4 mt-1">
                <h5>
                  <b
                    className={
                      selected == "chartbar" ? "selectedText" : "texts"
                    }
                    onClick={() => setSelected("chartbar")}
                  >
                    Chart Bar
                  </b>
                </h5>
              </span>
            </div>
            <div className="widgets">
              <FaLock size={"30"} />
              <span className="mx-4 mt-1">
                <h5>
                  <b
                    className={
                      selected == "security" ? "selectedText" : "texts"
                    }
                    onClick={() => setSelected("security")}
                  >
                    Security
                  </b>
                </h5>
              </span>
            </div>
            <div className="widgets">
              <FaMedkit size={"30"} />
              <span className="mx-4 mt-1 mb-5">
                <h5>
                  <b
                    className={
                      selected == "generalpage" ? "selectedText" : "texts"
                    }
                    onClick={() => setSelected("generalpage")}
                  >
                    General
                  </b>
                </h5>
              </span>
            </div>
          </div>
        </div>
        <div className="col-10">
          {selected == "dashboard" ? (
            <Dashboard />
          ) : (
            <>
              <div
                style={{ textAlign: "center", marginTop:"15vw"}}
              >
                <h2>
                  <b>Work is in Progress</b>
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
