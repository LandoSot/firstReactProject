//import stuff
import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

//create stuff
class App extends React.Component{
  state = {
    temporalText: "",
    todo: ""
  }

  addTodo = () => {
    this.setState({todo: this.state.temporalText})
  }

  render(){
    return(
      <View style = {styles.viewstyle}>
        <Text>Hello world.</Text>
        <Text>Making my first app.</Text>
        <TextInput
          style = {styles.inputStyle}
          onChangeText = {
            (temporalText) => this.setState({temporalText})
          }
        />
        <Button
          title="Add ToDo"
          onPress = {this.addTodo}
        />
        <Text>{this.state.todo}</Text>
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
