import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainCardBarber from '../../MainCardBarber';
import CuponsCard from './CuponsCard';
import { colors } from '../../../utils/styles';

interface Barbershop {
  id: number;
  barbershopUrl: string;
  name: string;
  address: {
    street: string;
    number: string;
    city: string;
  };
  phone: string;
  tickets: number;
  rating: number;
}

const TicketsCardBarber: React.FC<{ item: Barbershop }> = ({ item }) => {
  //TODO MainCardBarber dinamic props
  return (
    <View style={styles.container}>
      <MainCardBarber barbershop={item} />
      <CuponsCard tickets={item.tickets} />
      <Text style={styles.text}>{`Tickets: ${item.tickets}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 330,
    width: '98%',
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  text: {
    padding: 5,
    color: colors.secondaryColor,
    fontFamily: 'Comfortaa-Regular',
    fontSize: 14,
  },
});

export default TicketsCardBarber;
