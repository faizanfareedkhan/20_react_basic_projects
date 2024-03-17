import Accordian from "./components/accordion";
// import { RandomColor } from "./components/randon-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
// import TreeView from "./components/tree-view";
// import menus from "./components/tree-view/data";
// import QRCodeGenerator from "./components/qr-code-generator";
// import LightDarkMode from "./components/light-dark-mode";
// import ScrollIndicator from "./components/scroll-indicator";
// import TabTest from "./components/custom-tabs/tab-test";
// import ModalTest from "./components/custom-modal-popup/modal-test";
// import GithubProfileFInder from "./components/github-profile-finder";
// import SearchAutoComplete from "./components/search-autocomplete-with-api";
// import TicTacToe from "./components/tic-tac-toe";
// import FeatureFlags from "./components/feature-flag";
// import FeatureFlagGlobalState from "./components/feature-flag/context";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        {/* This is our Accordian Co>mponent */}
        <Accordian />

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
        {/* <QRCodeGenerator /> */}

        {/* This is Light Dark Mode Component */}
        {/* <LightDarkMode /> */}

        {/* This is Scroll Indicator Component */}
        {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

        {/* This is Custom Tabs Component */}
        {/* <TabTest /> */}

        {/* This is Custom Modal Component */}
        {/* <ModalTest /> */}

        {/* This is Github Profile Finder Component */}
        {/* <GithubProfileFInder /> */}

        {/* This is Search Auto Complete Component */}
        {/* <SearchAutoComple te /> */}

        {/* This is Tic Tac Toe Component */}
        {/* <TicTacToe /> */}

        {/* This is Feature Flag Implementation Component */}
        {/* <FeatureFlagGlobalState>
          <FeatureFlags />
        </FeatureFlagGlobalState> */}
      </div>
    </>
  );
}

export default App;
