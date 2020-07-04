import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MainCardBarber from '../../components/MainCardBarber';
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
  rating: number;
}

const MainScreen: React.FC = () => {
  const [barbershop, setBarbershop] = useState<Barbershop[]>([]);
  useEffect(() => {
    if (barbershop.length === 0) {
      console.log('oooiii main');
      setBarbershop([
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
          rating: 4,
        },
        {
          id: 2,
          barbershopUrl: require('../../assets/images/barbearias/b2.jpg'),
          name: 'Barbearia Teste 2',
          address: {
            street: 'Rua José Macedo',
            number: '845',
            city: 'Jundiaí',
          },
          phone: '( 11 ) 9-8670-4456',
          rating: 5,
        },
        {
          id: 3,
          barbershopUrl: require('../../assets/images/barbearias/b4.jpg'),
          name: 'Barbearia Teste 3',
          address: {
            street: 'Rua Figueiredo Toledo',
            number: '108',
            city: 'Jundiaí',
          },
          phone: '( 11 ) 9-4589-9757',
          rating: 3,
        },
      ]);
    }
  }, [barbershop]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={24} color="#888" style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          placeholderTextColor="#888"
          onChangeText={() => {}}
        />
      </View>
      <FlatList
        data={barbershop}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <MainCardBarber barbershop={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorRgba,
    paddingHorizontal: 10,
    paddingVertical: 20,
    paddingTop: 35,
  },
  inputContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(215, 209, 203, 0.15)',
    borderRadius: 30,
    marginBottom: 20,
  },
  iconInput: {
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default MainScreen;
