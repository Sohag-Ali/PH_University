import React from 'react';
import Container from './Container';

const Toggle_Btns = ({toggleStatus, settoggleStatus}) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
    return (
        
         <Container>
        <div className="text-right mb-8">
          {
            btns.map((btn,ind)=>{
              return <button key={ind} onClick={()=> settoggleStatus(btn)} className={`${ind==0 && "rounded-l-md"} ${ind==btns.length-1 && "rounded-r-md"} border-l-2 toggle-btn ${toggleStatus === btn && "!bg-purple-500 !text-white"}`}>{btn}</button>
            })
          }
        
      </div>
      </Container>
    );
};

export default Toggle_Btns;