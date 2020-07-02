import React, { useState } from 'react';
import {
  //TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Rating } from 'react-native-elements';

import BarbersPictures from './BarbersPictures';
import { colors } from '../../utils/styles';

interface item {
  id: string;
  name: string;
}

const FavoritiesCardBarber: React.FC = () => {
  const [services, setServices] = useState<item[]>([
    { id: '1', name: 'Corte Cabelo' },
    { id: '2', name: 'Hidratação' },
    { id: '3', name: 'Corte Barba' },
    { id: '4', name: 'Tintura' },
    { id: '5', name: 'Sombrancelhas' },
    { id: '6', name: 'Desenho' },
    { id: '7', name: 'Degradê' },
    { id: '8', name: 'Bigode' },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.containerInfos}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/barbearias/b3.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.containerData}>
          <Text style={styles.title}>Barbearia Don Corleone</Text>
          <Text style={styles.address}>
            Av. João Guilher, 809 - Jundiaí - SP
          </Text>
          <Text style={styles.phone}>(11) 9-9999-9999</Text>
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              ratingCount={5}
              showRating={false}
              imageSize={16}
              ratingBackgroundColor={colors.primaryColorRgba}
              ratingColor="#992929"
              readonly={true}
              tintColor="#191d21"
            />
          </View>
        </View>
      </View>
      <View style={styles.containerSchedule}>
        <Text style={styles.textSchedule}>
          Horário de atendimento 09:00 - 20:00
        </Text>
      </View>
      <View style={styles.containerDataBarbers}>
        <BarbersPictures />
        <View style={styles.containerServices}>
          <Text style={styles.titleService}>Serviços</Text>
          <FlatList
            data={services}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Text style={styles.textFlat}>{item.name}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    backgroundColor: colors.primaryColor,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondaryColorRgba,
    elevation: 5,
  },
  containerInfos: {
    height: 100,
    flexDirection: 'row',
  },
  imageContainer: {
    height: 88,
    width: 88,
    borderWidth: 2,
    borderColor: colors.secondaryColor,
    borderRadius: 44,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 44,
  },
  containerData: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Comfortaa-Regular',
    color: colors.secondaryColor,
  },
  address: {
    fontSize: 14,
    fontFamily: 'Comfortaa-Regular',
    color: colors.secondaryColor,
    marginLeft: 10,
  },
  phone: {
    fontSize: 14,
    fontFamily: 'Comfortaa-Regular',
    color: colors.secondaryColor,
    marginLeft: 10,
  },
  ratingContainer: {
    height: 20,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  containerSchedule: {
    height: 20,
    width: '100%',
    marginBottom: 5,
  },
  textSchedule: {
    fontSize: 14,
    fontFamily: 'Comfortaa-Regular',
    color: colors.secondaryColor,
  },
  containerDataBarbers: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },
  containerServices: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleService: {
    fontFamily: 'Anton-Regular',
    fontSize: 18,
    color: colors.secondaryColor,
  },
  textFlat: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 12,
    color: colors.secondaryColor,
  },
});
export default FavoritiesCardBarber;
