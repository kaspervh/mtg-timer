import React, {useState} from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';


const FormScreen = () =>{
  const [duration, setDuration] = useState('0');
  const [numPlayers, setNumPlayers] = useState();
  const [players, setPlayers] = useState([]);

  const initPlayers = (value) =>{
    setNumPlayers(value)
    console.log(numPlayers)
    let players = []
    
    for(let i = 1; i <= value; i++){
      players.push({name: '', minsLeft: duration});
    }
    setPlayers(players);
  }

  const changePlayer = (value, index) => {
    let newPlayers = [...players];
    newPlayers[index].name = value;
    console.log(newPlayers);
    setPlayers(newPlayers)
  }

  return(
    
    <ScrollView>
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.headLine}>Generate player timers</Text>
        <View style={GlobalStyles.formContainer}>
          <Text>Game duration in minutes:</Text>
          <TextInput 
            value={duration} 
            onChangeText={value => setDuration(value)} 
            style={GlobalStyles.TextInput} 
            keyboardType={Platform.OS === 'android' ? "numeric" : "numbers-and-punctuation"}
            />

        </View>
        <View style={GlobalStyles.formContainer}>
          <Text>Number of players</Text>
          <TextInput 
            value={numPlayers}
            onChangeText={value => initPlayers(value)} 
            style={GlobalStyles.TextInput} 
            keyboardType={Platform.OS === 'android' ? "numeric" : "numbers-and-punctuation"}
          />
        </View>

        {players.length !== 0 ? 
          players.map((player, index) => 
            <View style={GlobalStyles.formContainer}>
              <Text>{`Player ${index+1} name:`}</Text>
              <TextInput value={player.name} onChangeText={value => changePlayer(value, index)} style={GlobalStyles.TextInput}/>
            </View>
          )
        : <View></View>}

        {players.length !== 0 ? <TouchableOpacity style={GlobalStyles.Button}><Text style={GlobalStyles.ButtonText}>Start</Text></TouchableOpacity> : <View></View>}
      </View>
    </ScrollView>
    
  )
}

export default FormScreen;