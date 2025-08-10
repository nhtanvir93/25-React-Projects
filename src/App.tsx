import "./App.css";
import { Accordion } from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import LoadMoreProductss from "./components/LoadMoreProducts";
import MenuBar from "./components/menu-bar";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider /> */}
      {/* <LoadMoreProductss /> */}
      {/* <MenuBar /> */}
      <QrCodeGenerator />
    </div>
  );
}

export default App;
