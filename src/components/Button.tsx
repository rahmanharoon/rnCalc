import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({
  isLast,
  isFirst,
  isMiddle,
  isDisabled,
  placeholder,
  onButtonHandler,
}: {
  isLast?: boolean;
  isFirst?: boolean;
  isMiddle?: boolean;
  isDisabled?: boolean;
  placeholder: string;
  onButtonHandler: (text: string) => void;
}) => (
  <TouchableOpacity
    disabled={isDisabled}
    style={styles.button}
    onPress={() => onButtonHandler(placeholder)}>
    <View
      style={[
        styles.viewContainer,
        isFirst ? styles.topButton : isMiddle && styles.middleBtn,
      ]}>
      {isLast ? (
        <View style={[styles.endBtn]}>
          <View style={[styles.viewContainer, styles.circle]}>
            <Text style={styles.txt}>{placeholder}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.txt}>{placeholder}</Text>
      )}
    </View>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: 87,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 18,
    color: '#A9A9A9',
    fontWeight: '600',
  },
  topButton: {
    width: 45,
    height: 80,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    backgroundColor: '#383838',
  },
  middleBtn: {
    width: 45,
    height: 80,
    backgroundColor: '#383838',
  },
  endBtn: {
    top: -40,
    width: 45,
    height: 60,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#383838',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 90,
    backgroundColor: 'yellow',
  },
});
