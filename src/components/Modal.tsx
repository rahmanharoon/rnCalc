import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomModal = () => (
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Hello World!</Text>
    </View>
  </View>
);

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    padding: 85,
    elevation: 5,
    shadowRadius: 4,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalText: {
    fontSize: 20,
    color: '#383838',
    textAlign: 'center',
  },
});
