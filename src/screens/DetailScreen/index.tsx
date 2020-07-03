import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ModalBarber from '../../components/Modal/ModalBarber';
import ModalHour from '../../components/Modal/ModalHour';

import { PropsStack } from '../../routes/types';
import { colors } from '../../utils/styles';

interface IBarbers {
  id: number;
  name: string;
  email: string;
  responsibility: string;
  days_off: number[];
  job_id: number;
  schedule_id: number | null;
}

const DetailScreen: React.FC<PropsStack> = ({ route, navigation }) => {
  const [rating, setRating] = useState(0);
  const [favored, setFavored] = useState(false);
  const [barberIsVisible, setBarberIsVisible] = useState(false);
  const [dayIsVisible, setDayIsVisible] = useState(false);
  const [hourIsVisible, setHourIsVisible] = useState(false);
  const [barbers, setBarbers] = useState<IBarbers[]>([]);
  useEffect(() => {
    setBarbers([
      {
        id: 4,
        name: 'Funcionário 04',
        email: 'funcionario04@topbarber.com',
        responsibility: 'Barbeiro',
        days_off: [3, 5],
        job_id: 2,
        schedule_id: null,
      },
      {
        id: 3,
        name: 'Funcionário 02',
        email: 'funcionario02@topbarber.com',
        responsibility: 'Barbeiro',
        days_off: [2, 4],
        job_id: 2,
        schedule_id: 2,
      },
      {
        id: 5,
        name: 'Funcionário 05',
        email: 'funcionario05@topbarber.com',
        responsibility: 'Barbeiro',
        days_off: [3, 5],
        job_id: 2,
        schedule_id: null,
      },
      {
        id: 6,
        name: 'Funcionário 06',
        email: 'funcionario06@topbarber.com',
        responsibility: 'Barbeiro',
        days_off: [2, 4],
        job_id: 2,
        schedule_id: 2,
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cntnrImage}>
        <Image style={styles.image} source={route.params.data.barbershopUrl} />
      </View>
      <View style={styles.cntnrInfo}>
        <TouchableOpacity
          style={[styles.cntnrFav, favored && styles.cntnrFavTrue]}
          onPress={() => setFavored(!favored)}>
          <Icon
            name="grade"
            size={24}
            color={favored ? colors.secondaryColor : colors.primaryColor}
          />
        </TouchableOpacity>
        <View style={styles.cntnrTextInfos}>
          <Text style={styles.textInfosTitle}>{route.params.data.name}</Text>
          <Text style={styles.textInfos}>
            {`${route.params.data.address.street}, ${route.params.data.address.number} -  ${route.params.data.address.city}`}
          </Text>
          <Text style={styles.textInfos}>
            Horário de Atendimento: 09:00 - 21:30
          </Text>
        </View>
      </View>
      <Text style={styles.textAvaliations}>Avaliação</Text>
      <View style={styles.cntnrRatings}>
        <View style={styles.cntnrRating}>
          <Text style={styles.textRating}>Sua avaliação para Loja</Text>
          <Rating
            type="custom"
            ratingCount={5}
            startingValue={rating}
            showRating={false}
            imageSize={30}
            onFinishRating={value => setRating(value)}
            ratingBackgroundColor={colors.secondaryColor}
            ratingColor="#992929"
            tintColor="#191d21"
          />
        </View>
        <View style={styles.cntnrRating}>
          <Text style={styles.textRating}>Avaliação da Loja</Text>
          <Rating
            type="custom"
            ratingCount={5}
            startingValue={4}
            showRating={false}
            imageSize={30}
            ratingBackgroundColor={colors.secondaryColor}
            ratingColor="#992929"
            readonly={true}
            tintColor="#191d21"
          />
        </View>
      </View>
      <View style={styles.cntnrAppointments}>
        <View style={styles.cntnrTitleAppointments}>
          <View style={styles.cntnrLineTitle} />
          <Text style={styles.titleAppointments}>Agendamentos</Text>
          <View style={styles.cntnrLineTitle} />
        </View>
        <View style={styles.cntnrTextAppointments}>
          <Text style={styles.textAppointments}>
            Selecione as opções abaixo para realizar um
          </Text>
          <Text style={styles.textAppointments}>agendamento</Text>
        </View>
        <View style={styles.cntnrActionsButtonsAppointments}>
          <View style={styles.cntnrButtonBarber}>
            <Text style={styles.titleButtons}>Barbeiro</Text>
            <TouchableOpacity
              style={styles.buttonBarber}
              onPress={() => setBarberIsVisible(true)}>
              <Text style={styles.textButtons}>Diego</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cntnrButtonDay}>
            <Text style={styles.titleButtons}>Dia</Text>
            <TouchableOpacity
              style={styles.buttonDay}
              onPress={() => setDayIsVisible(true)}>
              <Text style={styles.textButtons}>22/07/20</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cntnrButtonHour}>
            <Text style={styles.titleButtons}>Horário</Text>
            <TouchableOpacity
              style={styles.buttonHour}
              onPress={() => setHourIsVisible(true)}>
              <Text style={styles.textButtons}>09:00</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.cntnrConfirmButton}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.textConfirmButton}>Confirmar Agendamento</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={barberIsVisible}>
        <ModalBarber
          setBarberIsVisible={setBarberIsVisible}
          barbers={barbers}
        />
      </Modal>
      <Modal isVisible={hourIsVisible}>
        <ModalHour setHourIsVisible={setHourIsVisible} />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  cntnrImage: {
    height: '30%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  cntnrInfo: {
    height: 100,
    width: '100%',
    //backgroundColor: 'blue',
  },
  cntnrFav: {
    height: 56,
    width: 56,
    backgroundColor: colors.secondaryColor,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: -28,
    elevation: 5,
  },
  cntnrFavTrue: {
    backgroundColor: '#992929',
    borderWidth: 1,
    //borderColor: '#992929',
  },
  cntnrTextInfos: {
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfosTitle: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.secondaryColor,
  },
  textInfos: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 12,
    color: colors.secondaryColor,
    marginBottom: 8,
  },
  cntnrRatings: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textAvaliations: {
    marginVertical: 16,
    alignSelf: 'center',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 16,
    color: colors.secondaryColor,
  },
  cntnrRating: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textRating: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 10,
    color: colors.secondaryColor,
  },
  cntnrAppointments: {
    height: 180,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 40,
    //backgroundColor: 'blue',
  },
  cntnrTitleAppointments: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cntnrLineTitle: {
    backgroundColor: colors.secondaryColor,
    height: 1,
    width: 90,
  },
  titleAppointments: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.secondaryColor,
  },
  cntnrTextAppointments: {
    height: 80,
    width: '100%',
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAppointments: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 12,
    marginHorizontal: 10,
    color: colors.secondaryColor,
  },
  cntnrActionsButtonsAppointments: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cntnrButtonBarber: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBarber: {
    height: 50,
    width: 90,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cntnrButtonDay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDay: {
    height: 50,
    width: 110,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cntnrButtonHour: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHour: {
    height: 50,
    width: 90,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButtons: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 10,
    marginBottom: 10,
    color: colors.secondaryColor,
  },
  textButtons: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.secondaryColor,
  },
  cntnrConfirmButton: {
    height: 60,
    width: '100%',
    alignSelf: 'flex-end',
    paddingHorizontal: 30,
  },
  confirmButton: {
    flex: 1,
    maxHeight: 60,
    borderRadius: 30,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textConfirmButton: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.primaryColor,
  },
});
export default DetailScreen;
/**
 * <View style={styles.ratingContainer}>
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
 */
