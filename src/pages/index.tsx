import CustomModal from '../components/Modal';
import CustomButton from '../components/Button';
import React, {useEffect, useState} from 'react';
import {View, Modal, TextInput, StyleSheet} from 'react-native';

const MainScreen = () => {
  const magicText = '1+3+9';

  const [text, setText] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const onValueChange = (value: string) => {
    setText(text + value);
  };

  const onChangeModalState = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (text === magicText) {
      setShowModal(true);
    }
  }, [text]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.child1}>
          <TextInput
            value={text}
            autoCorrect={false}
            autoCapitalize={'none'}
            allowFontScaling={false}
            style={styles.inputStyle}
            onChangeText={(text: string) => {}}
          />
        </View>
        <View style={styles.child2}>
          <CustomButton
            isDisabled
            placeholder="C"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="+/-"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="%"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isFirst
            isDisabled
            placeholder="/"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="7"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="8"
            onButtonHandler={onValueChange}
          />
          <CustomButton placeholder="9" onButtonHandler={onValueChange} />
          <CustomButton
            isMiddle
            isDisabled
            placeholder="X"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="4"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="5"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="6"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isMiddle
            isDisabled
            placeholder="-"
            onButtonHandler={onValueChange}
          />
          <CustomButton placeholder="1" onButtonHandler={onValueChange} />
          <CustomButton
            isDisabled
            placeholder="2"
            onButtonHandler={onValueChange}
          />
          <CustomButton placeholder="3" onButtonHandler={onValueChange} />
          <CustomButton
            isMiddle
            placeholder="+"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="."
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="0"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isDisabled
            placeholder="00"
            onButtonHandler={onValueChange}
          />
          <CustomButton
            isLast
            isDisabled
            placeholder="="
            onButtonHandler={onValueChange}
          />
        </View>
      </View>
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
        onRequestClose={onChangeModalState}>
        <CustomModal />
      </Modal>
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#585858',
  },
  child1: {
    flex: 1,
    borderColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  child2: {
    flex: 1.3,
    width: '100%',
    paddingTop: 10,
    paddingLeft: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  inputStyle: {
    fontSize: 30,
    color: '#A9A9A9',
    paddingBottom: 10,
  },
});
