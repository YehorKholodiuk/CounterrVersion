import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Counter from "./Counter";

function App () {
  const header = 'Hello, friends';
  const mainMenu = [
    {title: 'Products', link: '/products'},
    {title: 'Help', link: '/help'},
    {title: 'Contacts', link: '/contacts'},
  ]

  const [list, setList] = useState([100, 200, 300])

  const division = (index) => {
    const newArr = list.map((el, i) => {
      if (i === index) return el / 10;
      return el;
    })
    setList(newArr)
  }

  const multiple = (index) => {
    const newArr = list.map((el, i) => {
      if (i === index) return el * 10;
      return el;
    })
    setList(newArr)
  }

  const reset = (index) => {
    const newArr = list.map((el, i) => {
      if (i === index) return 100;
      return el;
    })
    setList(newArr)
  }

  const addCounter = () => {
    const newArr = [...list, list[list.length - 1] + 100];
    setList(newArr)
  }

  const resetAll = () => {
    const newArr = list.map(el => {
      return el / el;
    })
    setList(newArr)
  }

  const deleteLast = () => {
    const newArr = [...list];
    newArr.pop();
    setList(newArr)
  }

  return (
      <div className="App">
        <Header
            header={header}
            mainMenu={mainMenu}
        />
        <hr />
        {list.map((el, index) => <Counter
            el={el}
            index={index}
            multiple={multiple}
            division={division}
            reset={reset}
            key={index}
        />)}
        <hr />
        <button onClick={addCounter}> Add </button>
        <button onClick={resetAll}> Restart All </button>
        <button onClick={deleteLast}> Delete Last </button>

      </div>
  );
}

export default App;