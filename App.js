//import stuff
import React from 'react';
import {View,Text} from 'react-native';

//create stuff
class App extends React.Component{
  render(){
    return(
      <View style={styles.viewstyle}>
        <Text>Hello world.</Text>
      </View>
    )
  }
}

const styles = {
  viewstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'}
}

//export stuff
export default App;
