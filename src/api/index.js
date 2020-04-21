import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    //destructuring straight off the response obj
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)

    return {confirmed, recovered, deaths, lastUpdate}
    
  } catch (error) {
    console.log(error)    
  }
}

export const fetchDailyData = async () => {
  try {
    const {data} = await axios.get(`${url}/daily`)
    const modifiedData = data.map(data => ({
      confirmed: data.totalConfirmed,
      deaths: data.deaths.total,
      date: data.reportDate
    }))
    return modifiedData

  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`)
    
    console.log(countries)
    return countries

  } catch (error) {
    console.log(error)
  }
}