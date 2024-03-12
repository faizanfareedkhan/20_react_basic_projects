import "./App.css";
// import Accordian from "./components/accordion";
// import { RandomColor } from "./components/randon-color";
// import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <>
      <div className="App">
        {/* This is our Accordian Co>mponent */}
        {/* <Accordian /> */}
        {/* This is Random Color Component */}
        {/* <RandomColor /> */}
        {/* This is Star Rating Component */}
        {/* <StarRating noOfStars={10} /> */}
        {/* This is Image Slider Component */}
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"10"}
          page={"1"}
        />
      </div>
    </>
  );
}

export default App;
