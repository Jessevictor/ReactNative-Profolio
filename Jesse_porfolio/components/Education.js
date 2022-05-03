import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Personal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Education Background</Text>
      <Text style={styles.text}>
        April 2020 – November 2020: Completed Certificate in WEB DEVELOPMENT in
        MORINGA SCHOOL.
      </Text>
      <Text style={styles.text}>
        February 2015 –November 2018: Completed Kenya Certificate of Secondary
        Education in KWANTHANZE SECONDARY SCHOOL
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
    margin: 13,
  },
});
export default Personal;
