import React from 'react'
import {Grid, Card, Typography, CardContent} from '@material-ui/core'
import cx from 'classname'

import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  console.log(confirmed, recovered, deaths)

  if(!confirmed) {
    return 'loading...'
  }
  return (
    <div className={styles.container}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>{confirmed.value}</Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>number of active covid 19 cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>{recovered.value}</Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>number of recovered covid 19 cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>{deaths.value}</Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>number of deaths from covid 19 cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
