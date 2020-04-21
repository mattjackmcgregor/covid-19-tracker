import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import {fetchCountries} from '../../api'
import styles from './CountryPicker.module.css'


const CountryPicker = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries)
    }
    fetchApi()
  }, [])
  
  return (
    <div className={styles.container}>
      <FormControl>
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
      </FormControl>
    
    </div>
  )
}

export default CountryPicker