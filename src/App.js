import Header from './components/HeaderComponents/Header';
import './App.css';
import DataProvider from './context/DataProvider';
import SideNav from './components/HeaderComponents/SideNav';
function App() {
  return (
    <DataProvider>
      <SideNav/>
    </DataProvider>
  );
}

export default App;
