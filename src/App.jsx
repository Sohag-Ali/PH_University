
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import IssuesManagement from "./Components/issuesManagement";
import Loading from "./Components/Loading"
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
      <Suspense fallback={<Loading></Loading>}>
        <IssuesManagement fetchPromies={fetchPromies}></IssuesManagement>
      </Suspense>
      


      <Footer></Footer>
    </div>
  );
}

export default App;