import "./App.css";
import Contact from "./Components/Contact/Contact";
import HomeLayoutHOC from "./HOC/Home.HOC";
import Events from "./Pages/Events";

function App() {
  return (
    //max-w-7xl mx-auto px-2 sm:px-6 lg:px-8
    <div className="App">
      <HomeLayoutHOC path="/" exact component={Events} />
    </div>
  );
}

export default App;
