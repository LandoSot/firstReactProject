//import stuff
import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

//create stuff
class App extends React.Component{
  state = {
    temporalText: "",
    todo: []
  }

  addTodo = () => {
    var newTodo = this.state.temporalText;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, temporalText: ""});
  }

  deleteTodo = (indx) => {
    var arr = this.state.todo;
    var pos = this.state.todo.indexOf(indx);
    arr.splice(pos, 1);
    this.setState({todo: arr});
  }

  updateTodo = (indx) => {
    var newTodo = this.state.temporalText;
    var arr = this.state.todo
    var pos = this.state.todo.indexOf(indx);
    if (newTodo != '') {
      arr[pos] = newTodo;
    }
    this.setState({todo: arr, temporalText: ""});
  }

  renderTodos = () => {
    return this.state.todo.map(indx => {
      return (
        <View style = {styles.cardsStyles}>
          <Text
            key = {indx}
            style = {styles.tasksStyle}
          >{indx}</Text>
          <View style = {styles.eraseTaskStyle}>
            <Button
              title = 'Open'
              color='#A0A0A0'
              // onPress = {() => {this.deleteTodo(indx)}}
            />
            <Button
              title = 'Update'
              color = '#0ECCD7'
              onPress = {() => {this.updateTodo(indx)}}
            />
            <Button
              title = 'Delete'
              color = 'red'
              onPress = {() => {this.deleteTodo(indx)}}
            />
          </View>
        </View>
      )
    })
  }

  render(){
    return(
      <View style = {styles.genViewstyle}>
        <Text style={styles.appNameStyles}>ToDo: App Note</Text>
        <View style = {styles.toolsStyles}>
            <TextInput
              style = {styles.inputStyle}
              onChangeText = {(temporalText) => this.setState({temporalText})}
              value = {this.state.temporalText}
            />
          <View style = {styles.buttonStyle}>
            <Button
              title = 'Add ToDo'
              color = 'green'
              onPress = {this.addTodo}
            />
          </View>
        </View>
        {this.renderTodos()}
      </View>
    )
  }
}

const styles = {
  genViewstyle: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: '100%',
    marginTop: 30,
  },
  appNameStyles: {
    fontSize: 30,
  },
  toolsStyles: {
    alignItems: 'flex-end',
    marginVertical: 10,
    width: '80%',
  },
  inputStyle:{
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
    padding: 3,
    width: '100%',
  },
  buttonStyle: {
    width: '50%',
  },
  cardsStyles: {
    justifyContent: 'space-around',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
    height: 100,
    marginVertical: 3,
    padding: 3,
    width: '80%',
  },
  tasksStyle: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    height: '50%',
  },
  eraseTaskStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '50%',
    alignItems: 'center',
  }
}

//export stuff
export default App;
