import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
const Landing = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/jess.jpg')} />
      <Text style={styles.name}>Jesse Victor Obadha</Text>
      <Text style={styles.title}>Full-Stack Developer</Text>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.button}>
          <Text style={styles.text}>Hire Me &gt; </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8ED1FC',
    height: 250,
    borderBottomLeftRadius: 219,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 80,
    marginRight: 20,
  },
  title: {
    textAlign: 'right',
    marginTop: 15,
    marginRight: 50,
    fontSize: 17,
  },
  img: {
    position: 'absolute',
    marginTop: 49,
    marginLeft: 12,
    height: 191,
    width: 163,
    borderRadius: 81.5,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    borderColor: '#C0C0C0',
    backgroundColor: '#00D084',
    marginTop: 45,
    marginRight: 80,
    height: 30,
    width: 100,
    borderRadius: 12,
  },
});
export default Landing;
