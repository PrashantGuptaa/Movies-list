import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import moviesData from './moviesData';
import TableForData from './components/tableForData';

const tabs = ["All Genres", "Thriller", "Action", "Adventure", "Emotional", "Motivation"];

function App() {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  useEffect(() => {
    updateMovieList();
  }, [currentTab]);

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName)
  }

  const updateMovieList = () => {
    const data = [];
    moviesData = localStorage.get('myItem')
    setColumns(Object.keys(moviesData[0]));

    if (currentTab === tabs[0]) {
      moviesData.forEach(movieObj => {
        data.push(Object.values(movieObj));
      })
    } else {
      const currentTabToLowerCase = currentTab.toLowerCase();
      moviesData.forEach(movieObj => {
        if (movieObj.genres.includes(currentTabToLowerCase)) {
        data.push(Object.values(movieObj));
        
        }
      })
    }
    setTableData(data);
  }

  console.log("Current Tab", currentTab)
  console.log("Column and data", columns, tableData)
  return (
    <div className="App">
      {tabs.map(tab => <button key={tab} onClick={() => handleTabChange(tab)}>{tab}</button>)}
      <TableForData 
      columns={columns}
      data={tableData}
      />
    </div>
  );
}

export default App;
