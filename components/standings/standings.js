import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ActivityIndicator, RefreshControl, View, AsyncStorage, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axiosApiInstance from '../../services/axios-interceptor'
import { getToken } from '../../services/token-service'
// import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { API_BASE_URL } from '@env';
import Game from '../game/game.js'



const Standings = () => {
  const [day, setDay] = useState(0)
  const [standings, setStandings] = useState([])
  const [loading, setLoading] = useState(false)

    /**
     * Get SHL standings. 
     */
      const getStandings = async () => {
        // const dayToLoad = dayjs(new Date()).add(day, 'day').format('YYYY-MM-DD')
  
        setLoading(true)
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
          const response = await axiosApiInstance.get(`${String(API_BASE_URL)}/seasons/2022/statistics/teams/standings.json`, config)
  
          setStandings(response.data)  
          setLoading(false)
        } catch (e) {  
          console.log(e)
          setLoading(false)
        }
      }


  useEffect(() => {
    //   getStandings()
  }, [])
  

    return (
      <View style={styles.standingsContainer}>
        <Text style={styles.text}>STANDINGS</Text>
      </View>


    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    }
});

export default Standings