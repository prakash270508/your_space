import React from "react";
import Bargraph from "./Bargraph";
import PiChart from "./PiChart";

export default function Dashboard() {
  return (
    <div>
      <div className="mx-5 mt-5">
        <div className="row mainRow">
          <div className="col-4 shortPart my-2">
            <div className="box-1 mx-2">
              <div className="p-4 mainText">
                <h4>
                  <b>Weekly Sale</b>
                </h4>
                <h4 className="pt-2">$3764738</h4>
                <p className="pt-2">Increased by 50%</p>
              </div>
            </div>
          </div>
          <div className="col-4 shortPart my-2">
            <div className="box-2 mx-2">
              <div className="p-4 mainText">
                <h4>
                  <b>Weekly Order</b>
                </h4>
                <h4 className="pt-2">64,738</h4>
                <p className="pt-2">Increased by 20%</p>
              </div>
            </div>
          </div>
          <div className="col-4 shortPart my-2">
            <div className="box-3 mx-2">
              <div className="p-4 mainText">
                <h4>
                  <b>Weekly Order</b>
                </h4>
                <h4 className="pt-2">64,738</h4>
                <p className="pt-2">Increased by 20%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 mainRow">
          <div className="col-7 shortPart mx-2">
            <Bargraph />
          </div>
          <div className="col-4 shortPart mx-2 my-4">
            <PiChart />
            <p style={{textAlign:"center"}} className="my-3"><b>Number of Students per city</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}
