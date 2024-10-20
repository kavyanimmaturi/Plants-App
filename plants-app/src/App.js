
import './App.css';
import SearchBar from './Components/Header/SearchBar';
import HeaderSection from "./Components/HeaderSection";
import PlantsSection from './Components/PlantsSection';
import TopSection from './Components/TopSection';

function App() {
  return (
    <>
       <TopSection/>
       <HeaderSection/>
       <SearchBar/>
       <PlantsSection/>
       </>
  );
}

export default App;
