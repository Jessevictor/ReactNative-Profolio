import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Personal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Personal Profile</Text>
      <Text style={styles.text}>
        I am self-determined and a dedicated individual who is always determined
        to excel and work under minimal or non-close supervision in the line of
        duty. I am a Full-stack developer with One(1) year of experience. I
        developed projects using React and Laravel. I enjoy working in a team
        and looking for more growth in Software Development.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  head: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    margin: 20,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
});
export default Personal;
