
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import IssuesManagement from "./Components/issuesManagement";
import { Suspense } from "react";


const fetchIssues = async()=>{
  const result = await fetch("/data.json");
  return result.json();
}

function App() {
  const fetchPromies = fetchIssues();


  return (
    <div>
      
      <Navbar></Navbar>
      <Suspense fallback={"Loding..."
      }>
        <IssuesManagement fetchPromies={fetchPromies}></IssuesManagement>
      </Suspense>
      


      <Footer></Footer>
    </div>
  );
}

export default App;