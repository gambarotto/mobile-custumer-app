import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import FavoritiesCardBarber from '../../components/FavoritiesCardBarber';
import { colors } from '../../utils/styles';

const FavoritiesScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FavoritiesCardBarber />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorRgba,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
});

export default FavoritiesScreen;
