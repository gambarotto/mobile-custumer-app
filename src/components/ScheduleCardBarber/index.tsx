import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../../utils/styles';

interface IAppointments {
  barberShopUrl: string;
  avatar: string;
  name: string;
  day: string;
  barber: string;
}

const ScheduleCardBarber: React.FC<{ item: IAppointments }> = ({ item }) => {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.imageBackgroung}
      source={item.barberShopUrl}>
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
        style={styles.containerInfos}>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={item.avatar} />
        </View>
        <View style={styles.infosContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.agendamento}>Agendamento:</Text>
          <Text
            style={styles.schedule}>{`${item.day}, com ${item.barber}`}</Text>
        </View>
        <TouchableOpacity style={styles.buttom}>
          <Icon name="cancel" size={25} color={colors.secondaryColor} />
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '98%',
    borderRadius: 8,
    elevation: 5,
    justifyContent: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  imageBackgroung: {
    flex: 1,
    borderRadius: 8,
  },
  containerInfos: {
    height: 100,
    width: '98%',
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.secondaryColor,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
  },
  infosContainer: {
    marginLeft: 20,
  },
  title: {
    fontFamily: 'Anton-Regular',
    fontSize: 18,
    color: colors.secondaryColor,
  },
  agendamento: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 14,
    color: colors.secondaryColor,
  },
  schedule: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 12,
    color: colors.secondaryColor,
  },
  buttom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textButtom: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 18,
    color: colors.secondaryColor,
  },
});

export default ScheduleCardBarber;
