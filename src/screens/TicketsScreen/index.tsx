import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

import TicketCardBarber from '../../components/Cards/TicketsCardBarber';
import { colors } from '../../utils/styles';

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

const TicketsScreen: React.FC = () => {
  const [tickets, setTickets] = useState<Barbershop[]>([]);

  useEffect(() => {
    console.log('oooiii');

    setTickets([
      {
        id: 1,
        barbershopUrl: require('../../assets/images/barbearias/b3.jpg'),
        name: 'Barbearia Teste',
        address: {
          street: 'Rua 23 de Maio',
          number: '358',
          city: 'Jundiaí',
        },
        phone: '( 11 ) 9-9999-9999',
        tickets: 4,
        rating: 4,
      },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Ticket's</Text>
      </View>
      <FlatList
        data={tickets}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <TicketCardBarber item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorRgba,
    alignItems: 'center',
    paddingTop: 30,
  },
  containerTitle: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    elevation: 5,
    marginBottom: 10,
  },
  textTitle: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.secondaryColor,
  },
});
export default TicketsScreen;
