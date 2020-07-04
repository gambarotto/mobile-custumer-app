import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  //Modal,
  StyleSheet,
} from 'react-native';
import { Rating } from 'react-native-elements';
import Modal from 'react-native-modal';

import ModalMainTab from '../Modal/ModalMainTab';

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
//TODO limitar o n° de caracteres no endereço

const MainCardBarber: React.FC<{
  barbershop: Barbershop;
}> = ({ barbershop }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('ert');
  }, [isVisible]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsVisible(true)}>
      <View style={styles.imageContainer}>
        <Image
          source={barbershop.barbershopUrl}
          resizeMode="cover"
          borderRadius={44}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerText}>
          <Text style={styles.title}>{barbershop.name}</Text>
          <Text style={styles.address}>
            {`${barbershop.address.street}, ${barbershop.address.number} -  ${barbershop.address.city}`}
          </Text>
          <Text style={styles.phone}>{barbershop.phone}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Rating
            type="custom"
            ratingCount={5}
            startingValue={barbershop.rating}
            showRating={false}
            imageSize={16}
            ratingBackgroundColor={colors.primaryColorRgba}
            ratingColor="#992929"
            readonly={true}
            tintColor="#191d21"
          />
        </View>
      </View>
      <Modal isVisible={isVisible}>
        <ModalMainTab setIsVisible={setIsVisible} barbershop={barbershop} />
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    backgroundColor: colors.primaryColorRgba,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.secondaryColorRgba,
    elevation: 5,
  },
  imageContainer: {
    height: 88,
    width: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: colors.secondaryColor,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  infoContainerText: {
    //backgroundColor: 'blue',
  },
  title: {
    color: colors.secondaryColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
  address: {
    color: colors.secondaryColor,
    fontSize: 14,
    marginLeft: 5,
  },
  phone: {
    color: colors.secondaryColor,
    fontSize: 14,
    marginLeft: 5,
  },
  ratingContainer: {
    height: 20,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
});
export default MainCardBarber;
