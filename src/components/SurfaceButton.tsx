import * as React from 'react';
import { Surface, Text, TouchableRipple } from 'react-native-paper';
import { StyleSheet, Image } from 'react-native';
import { HomeButtonImg, Navigation } from '../types';
import { theme } from '../core/theme';

type Props = {
  btn: HomeButtonImg;
  txt: string;
  navigation: Navigation;
  to: string;
};

const SurfaceButton = ({ btn, txt, navigation, to } : Props) => {
  const img =
  (btn === HomeButtonImg.Scan)?
    require('../assets/scan.png') :
    (btn === HomeButtonImg.Favorite)?
      require('../assets/star.png') :
      (btn === HomeButtonImg.Wallet)?
        require('../assets/wallet.png') :
        require('../assets/logo.png');
  return (
    <TouchableRipple onPress={() => navigation.navigate(to)} accessibilityStates>
      <Surface accessibilityStates style={ styles.surface }>
          <Image source={img} style={styles.image}></Image>
          <Text accessibilityStates>{txt}</Text>
      </Surface>
    </TouchableRipple>
  );
}

export default SurfaceButton;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 140,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.disabled
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
});