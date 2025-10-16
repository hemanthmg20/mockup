import "./App.css"
import AIagents from "./AIagents";
import MidContainer from "./MidContainer";
import RightContainer from "./RightContainer";

export default function App() {
  return (
  <>
    <div className="header">
      <p>Illustrative mockup of the UI screens</p>
      <a href="https://mresult.com/"><img src="C:\Users\HemanthMG\Documents\React\mockup\src\shared image.png" alt="logo" /></a>
    </div>

    <div className="container">

        <AIagents />

        <MidContainer />

        <RightContainer />

      <div className="right"></div>
    </div>
  </>

  );
} 