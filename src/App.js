import React from 'react';

import Header from './Header';
import './App.css';
import Todos from './Pages/Todos';


// 총 5구역으로 나눠서 진행 예정
// icebox, emergency, inprogress, test, trash

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Todos />
        </section>
      </main>
    </div>
  );
}

export default App;
