//import stuff
import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

//create stuff
class App extends React.Component{
  render(){
    return(
      <View style={styles.viewstyle}>
        <Text>Hello world.</Text>
        <Text>Making my first app.</Text>
        <TextInput
          style={styles.inputStyle}
        />
        <Button
          title="Add ToDo"
        />
      </View>
    )
  }
}

const styles = {
  viewstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1
  }
}

//export stuff
export default App;
