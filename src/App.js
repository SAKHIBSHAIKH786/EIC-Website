import logo from './logo.svg';
import './App.css';
import TeamContainer from './Components/team/team';
import HomeLayoutHOC from './HOC/Home.HOC';

function App() {
  return (
    <div className="App">
      <HomeLayoutHOC path="/" exact component={TeamContainer}/>
    </div>
  );
};

export default App;
