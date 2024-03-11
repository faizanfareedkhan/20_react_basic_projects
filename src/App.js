import "./App.css";
// import Accordian from "./components/accordion";
// import { RandomColor } from "./components/randon-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      <div className="App">
        {/* This is our Accordian Co>mponent */}
        {/* <Accordian /> */}
        {/* This is Random Color Component */}
        {/* <RandomColor /> */}
        {/* This is Star Rating Component */}
        <StarRating noOfStars={10} />
      </div>
    </>
  );
}

export default App;
