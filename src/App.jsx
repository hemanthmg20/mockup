import "./App.css"
import AIagents from "./AIagents";
import MidContainer from "./MidContainer";
import RightContainer from "./RightContainer";

export default function App() {
  return (
  <div>
    <div className="mockup-header">
      <p>Illustrative mockup of the UI screens</p>
      <a href="https://mresult.com/"><img src="./src/assets/MResult-logo.png" alt="logo" /></a>
    </div>

    <div className=" grid grid-cols-12 mockup-container">

        <AIagents />

        <MidContainer />

        <RightContainer />

    </div>
  </div>

  );
} 
