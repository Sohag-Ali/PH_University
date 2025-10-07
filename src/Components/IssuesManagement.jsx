import React, { use } from "react";
import { useState } from "react";
import CountBox from "./CountBox";
import Toggle_Btns from "./Toggle_Btns";
import Container from "./Container";
import Card from "./Card";

const IssuesManagement = ({ fetchPromies }) => {
  const [toggleStatus, settoggleStatus] = useState("All");
  const InitialData = use(fetchPromies);
  const [data, setdata] = useState(InitialData);

  const filterData =toggleStatus=="All"?data : data.filter((element)=>element.status == toggleStatus);
  

  return (
    <div>
      <CountBox data={data}></CountBox>
      
      <Toggle_Btns
        toggleStatus={toggleStatus}
        settoggleStatus={settoggleStatus}
      ></Toggle_Btns>

      <Container>
         {filterData.length == 0 ? (
          <h2 className="font-bold text-[35px] text-center mb-9 text-purple-500 text-shadow-2xs">
            No Data
          </h2>
        ):(  <div className="grid grid-cols-3 gap-3">
        {filterData.map((issue,ind) => {
          return (
            <Card key={ind} data={data} setdata={setdata} issue={issue}></Card>
          );
        })}
      </div>)}
      
      </Container>

      
    </div>
  );
};

export default IssuesManagement;
