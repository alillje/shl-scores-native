import { StyleSheet, Text, View, Image } from 'react-native';
import dayjs from 'dayjs'
import bif from './img/bif.png'
import fbk from './img/fbk.png'
import fhc from './img/fhc.png'
import hv71 from './img/hv71.png'
import iko from './img/iko.png'
import lhc from './img/lhc.png'
import lhf from './img/lhf.png'
import lif from './img/lif.png'
import mif from './img/mif.png'
import ohk from './img/ohk.png'
import rbk from './img/rbk.png'
import saik from './img/saik.png'
import tik from './img/tik.png'
import vlh from './img/vlh.png'
import axiosApiInstance from '../../services/axios-interceptor'
import { useState, useEffect } from 'react';


// import dayjs from 'dayjs'

const Game = ({ details }) => {
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  // console.log(`./img/${details.home_team_code.toLowerCase()}.svg`)
  const teamLogos = Object.freeze({
    BIF: bif,
    FBK: fbk,
    FHC: fhc,
    HV71: hv71,
    IKO: iko,
    LHC: lhc,
    LHF: lhf,
    LIF: lif,
    MIF: mif,
    OHK: ohk,
    RBK: rbk,
    SAIK: saik,
    TIK: tik,
    VLH: vlh
  })

  // console.log(Object.keys(teamLogos).toString())
  const getTeamLogo = (teamCode) => {
    for (const [key, value] of Object.entries(teamLogos)) {
      if (teamCode === key.toString()) {
        return value
      } 
    }
  }

  useEffect(() => {
    const getGame = async () => {
      console.log(details.game_id)
      try {
        const config = {
          headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('shl_scores_access_token')
          }
        }
        // const response = await axiosApiInstance.get(`${process.env.REACT_APP_API_BASE_URL as string}/games?start=2022-11-29`, config)
        // TODAYS GAMES
        const response = await axiosApiInstance.get(`${String(API_BASE_URL)}/games/${details.game_id}`, config)
        // console.log(dayjs(new Date()).format('YYYY-MM-DD'))
        console.log(response.data.games)
        setHomeScore(response.data.live.home_score)
        setAwayScore(response.data.live.away_score)

      } catch (e) {
        console.log(e)  
      }
    }

    if (details.live_coverage_enabled) {
      getGame()
    } else {
      setHomeScore(details.home_team_result)
      setAwayScore(details.away_team_result)
    }
  
  }, [])
    return (
      <View style={styles.gameContainer}>

      <View style={styles.dateContainer}>
      <Text style={styles.dateTimeText}>{dayjs(details.start_date_time).format('dddd-D-MMMM').split('-').join(' ')}</Text>

<Text style={styles.dateTimeText}>{new Date(details.start_date_time).getTime() < new Date(Date.now()).getTime() ? 'FINAL' : dayjs(details.start_date_time).format('HH-mm').split('-').join(':')}</Text>


      </View>
      <View style={styles.gameDataContainer}>

      <Image style={details.home_team_code === 'HV71' ? styles.teamLogoHv : styles.teamLogo}  source={getTeamLogo(details.home_team_code)} />

      <Text style={styles.text}>{homeScore}</Text>
      <Text style={styles.text}>-</Text>
      <Text style={styles.text}>{awayScore}</Text>

      <Image style={details.away_team_code === 'HV71' ? styles.teamLogoHv : styles.teamLogo} source={getTeamLogo(details.away_team_code)} />
      </View>

      </View>
    )
  }

  const styles = StyleSheet.create({
    gameContainer: {
      height: 150,
    },
    gameDataContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      },
    dateContainer: {

    },
    text: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 40
      
    },
    teamLogo: {
      height: 50,
      width: 50
    },
    teamLogoHv: {
      height: 50,
      width: 80,
    },
    dateTimeText: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 15
    }
  });
  
  export default Game