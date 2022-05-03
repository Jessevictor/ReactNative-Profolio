import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Landing from './components/Landing';
import Personal from './components/Personal';
import Education from './components/Education'

function Profile(){
  return(
    <View>
      <Landing />
      <Personal />
      <Education />
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
   backgroundColor:'#ABB8C3'
  }
})
export default Profile;