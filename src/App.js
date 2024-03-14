import "./App.css";
import QRCodeGenerator from "./components/qr-code-generator";
// import Accordian from "./components/accordion";
// import { RandomColor } from "./components/randon-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
        {/* <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"10"}
          page={"1"}
        /> */}
        {/* This is Load More Products Component */}
        {/* <LoadMoreData /> */}
        {/* This is Tree View/ Menu UI Component/ Recursive Navigation*/}
        {/* <TreeView menus={menus} /> */}
        {/* This is QR Code Generator Component */}
        <QRCodeGenerator />
      </div>
    </>
  );
}

export default App;
