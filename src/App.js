import React from 'react';

import {Cards, CountryPicker, Chart} from './components'
import style from './App.module.css'
 import {fetchData} from './api'

export class App extends React.Component {

  //how to use async with componentdidmount
  async componentDidMount () {
    const data = await fetchData()
    console.log(data)
  }

  render() {
    return (
      <div className={style.App}>
       <h1>covid 19 tracker</h1>
       <Cards />
       <CountryPicker />
       <Chart />
      </div>
    )
  }
}

export default App;
