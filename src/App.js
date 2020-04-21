import React from 'react';

import {Cards, CountryPicker, Chart} from './components'
import style from './App.module.css'
 import {fetchData} from './api'

export class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  //how to use async with componentdidmount
  async componentDidMount () {
    const data = await fetchData()
    // console.log(data)
    this.setState({data})
  }
  
  handleCountryChange = async (country) => {
    console.log(country)
    //fetch data
    const data = await fetchData(country)
    //set state
    this.setState({data, country})
    console.log('country data', data)
  }

  render() {
    const {data, country} = this.state
    return (
      <div className={style.App}>
       <Cards data={data}/>
       <CountryPicker handleCountryChange={this.handleCountryChange} />
       <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
