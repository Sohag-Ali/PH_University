import React from 'react';

const Card = ({issue, data, setdata}) => {
    const handleClick = ()=>{
        const currentdata = data.find((elem) => elem.ticketId == issue.ticketId);
        if(currentdata.status == "Pending")
            {
                currentdata.status = "Submitted"
            }else if(currentdata.status == "Submitted"){
                currentdata.status = "Reviewed"

            }
        const restData = data.filter((elem)=> elem.ticketId != issue.ticketId);
        setdata([currentdata,...restData])
    }
    return (
          <div className="shadow-md rounded-md cursor-pointer bg-slate-100 p-4" onClick={handleClick}>
              <div>
                <img
                  className="h-[80px] w-[80px] rounded-full"
                  src={issue.userImg}
                  alt={issue.requestedBy}
                />
                <h2 className="font-semibold text-lg">{issue.requestedBy}</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="font-bold text-[26px]">{issue.subject}</h2>
                <div className="">
                  <span className={`font-semibold py-1 px-2 shadow rounded mr-2 ${issue.priority == "High"?"text-white bg-red-500":issue.priority == "Medium"?"text-white bg-yellow-500":"text-white bg-green-500"}`}>
                    {issue.priority}
                  </span>
                  <span className={`font-semibold py-1 px-2 shadow rounded mr-2 ${issue.status == "Pending"?"text-white bg-red-500":issue.status == "Submitted"?"text-white bg-yellow-500":"text-white bg-green-500"}`}>{issue.status}</span>
                </div>
              </div>
              <p className="text-slate-700 text-[17px]">{issue.description}</p>
            </div>
      
    );
};

export default Card;