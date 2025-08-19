import "./App.css";
import { Accordion } from "./components/Accordion";
import CustomFetchHook from "./components/custom-fetch-hook";
import GithubProfile from "./components/github-profile";
import ImageSlider from "./components/ImageSlider";
import LoadMoreProductss from "./components/LoadMoreProducts";
import MenuBar from "./components/menu-bar";
import ModalPopup from "./components/modal-popup";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete";
import StarRating from "./components/StarRating";
import Tabs from "./components/tabs";
import ThemeSwitch from "./components/theme-switch";
import TicTacToe from "./components/tic-tac-toe";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider /> */}
      {/* <LoadMoreProductss /> */}
      {/* <MenuBar /> */}
      {/* <QrCodeGenerator /> */}
      {/* <ThemeSwitch /> */}
      {/* <ScrollIndicator /> */}
      {/* <Tabs /> */}
      {/* <ModalPopup /> */}
      {/* <GithubProfile /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}
      <CustomFetchHook />
    </div>
  );
}

export default App;
