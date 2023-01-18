import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AsyncStorage, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axiosApiInstance from '../../services/axios-interceptor'
import { getToken } from '../../services/token-service'
// import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { API_BASE_URL } from '@env';
import Game from '../game/game.js'



const Games = () => {
  const [day, setDay] = useState(0)
  const [games, setGames] = useState([])



  useEffect(() => {
    const dayToLoad = dayjs(new Date()).add(day, 'day').format('YYYY-MM-DD')
    /**
     * Gets games for the current day. 
     * If there are no games on this day, 
     * the day is incremented to get the games for the next day. 
     */
    const getGames = async () => {
      // setLoading(true)
      try {
        const currentToken = await AsyncStorage.getItem('shl_scores_access_token')

        if (!currentToken) {

          const newToken = await getToken()

          await AsyncStorage.setItem('shl_scores_access_token', newToken)
        }
        const config = {
          headers: {
            Authorization: 'Bearer ' + await AsyncStorage.getItem('shl_scores_access_token')
          }
        }
        // const response = await axiosApiInstance.get(`${process.env.REACT_APP_API_BASE_URL}/games?start=${dayToLoad}`, config)
        const response = await axiosApiInstance.get(`${String(API_BASE_URL)}/games?start=${dayToLoad}`, config)

        setGames(response.data.games)
          // setLoading(false)
      } catch (e) {
        console.log('TEST')

        console.log(e)
        // setLoading(false)
      }
    }
  
    if (!games.length) {
      const nextDay = day + 1
      setDay(nextDay)
      getGames()
    }
  
    // !games.length && getGames()
  
  }, [games])
  
  return (
    <View style={styles.gamesContainer}>
        {games.map((game) => {
          return <Game key={game.game_uuid} details={game} />
        })}

    </View>
  );
}

const styles = StyleSheet.create({
  gamesContainer: {
    flex:1,
    backgroundColor: '#1d1c1c',
    // backgroundColor: 'pink',
    textAlign: 'center',
    height: 10,
    paddingTop: 30
    // backgroundColor: '#fff'
  } });

export default Games