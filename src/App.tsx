import React from 'react';
import ChartList from './components/ChartList';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  return (
    <>
      <main className="main">
        <div className="title">
          <h1>Dashboard</h1>
          <p>トップ</p>
        </div>
        <div className="w-full flex">
          <SideBar />
          <ChartList />
        </div>
      </main>
    </>
  );
}

export default App;
