import "./App.css";
import Contact from "./Components/Contact/Contact";
import TeamContainer from "./Components/team/team";
import HomeLayoutHOC from "./HOC/Home.HOC";

function App() {
  return (
    //max-w-7xl mx-auto px-2 sm:px-6 lg:px-8
    <div className="App">
      <HomeLayoutHOC path="/" exact component={Contact} />
    </div>
  );
}

export default App;
