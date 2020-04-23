import React from 'react'
import {Grid, Card, Typography, CardContent} from '@material-ui/core'
import cx from 'classname'
import CountUp from 'react-countup'

import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  console.log(confirmed, recovered, deaths)
  // const arrayData = [{
  //   name: 'Infected',
  //   data: confirmed,
  //   subtitle: 'number of active covid 19 cases'
  // },
  // {
  //   name: 'Recovered',
  //   data: recovered,
  //   subtitle: 'number of recovered covid 19 cases'
  // }, 
  // {
  //   name: 'Deaths',
  //   data: deaths,
  //   subtitle: 'number of deaths from covid 19 cases'
  // }]

  if(!confirmed) {
    return 'loading...'
  }
  return (
    //  code to be implemented for refactoring

    //   <Grid container direction="row" justify="center" alignItems="center">
    //   {arrayData.map(category => {
    //     const name = category.name
    //     return (
    //     <Grid item component={Card} xs={12} md={3} className={cx(card, name)}>
    //         <CardContent>
    //           <Typography color='textSecondary' gutterBottom className={name}>{name}</Typography>
    //           <Typography variant='h5'>
    //             <CountUp start={0} end={category.data.value} duration={1.8} separator="," />
    //           </Typography>
    //           <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
    //           <Typography variant='body2'>{category.subtitle}</Typography>
    //         </CardContent>
    //       </Grid>
      // )})}

      <div className={styles.container}>
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
              <CardContent>
                <Typography color='textSecondary' gutterBottom className={styles.title_infected}>Infected</Typography>
                <Typography variant='h5'>
                  <CountUp start={0} end={confirmed.value} duration={1.8} separator="," />
                </Typography>
                <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant='body2'>number of active covid 19 cases</Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
              <CardContent>
                <Typography color='textSecondary' gutterBottom className={styles.title_recovered}>Recovered</Typography>
                <Typography variant='h5'>
                  <CountUp start={0} end={recovered.value} duration={1.8} separator="," />
                </Typography>
                <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant='body2'>number of recovered covid 19 cases</Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
              <CardContent>
                <Typography color='textSecondary' gutterBottom className={styles.title_deaths}>Deaths</Typography>
                <Typography variant='h5'>
                  <CountUp start={0} end={deaths.value} duration={1.8} separator="," />
                </Typography>
                <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant='body2'>number of deaths from covid 19 cases</Typography>
              </CardContent>
            </Grid>
          </Grid>
      </div>
  )
}

export default Cards
