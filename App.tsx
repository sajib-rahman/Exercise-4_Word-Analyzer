import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
      cons: 0,
      vow: 0,
      char: 0
    }
  }
analyzeWord = () => {
    let input = this.state.input;
    let cons =0;
    let vow=0;
    let char=0;

    char=input.length;

    for (let i=0;i<=input.length;i++){
      if((input.charAt(i).match(/[aeiouAEIOU]/))){
          vow++;
      }
      else if((input.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))){
          cons++;
      }
      this.setState({char:char,vow:vow,cons:cons});

    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.design}>A Word Analyzer</Text>
        <TextInput onChangeText={(input) => this.setState({input})} style={Styles.design2} placeholder='Input text'/>
        <Text></Text>
        <Text></Text>
        <Button color="#0000FF" onPress={this.analyzeWord} title='Analyze'/>
        <Text></Text>
        <Text style={Styles.design2}> Word              : {this.state.input}</Text>
        <Text style={Styles.design2}> No of Consonants  : {this.state.cons}</Text>
        <Text style={Styles.design2}> No of Vowels      : {this.state.vow}</Text>
        <Text style={Styles.design2}> No of Characters  : {this.state.char}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  design: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  design2: {
    textAlign: 'center',
    marginBottom: 10,
  },
});