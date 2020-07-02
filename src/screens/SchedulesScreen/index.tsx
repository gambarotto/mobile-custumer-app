import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  SectionList,
  StyleSheet,
} from 'react-native';

import ScheduleCardBarber from '../../components/ScheduleCardBarber';

import { colors } from '../../utils/styles';

interface IAppointments {
  barberShopUrl: string;
  avatar: string;
  name: string;
  day: string;
  barber: string;
}

interface IData {
  title: string;
  data: IAppointments[];
}

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.containerHeaderSection}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
};

const SchedulesScreen: React.FC = () => {
  const [data, setData] = useState<IData[]>([
    {
      title: 'Agendamentos',
      data: [
        {
          barberShopUrl: require('../../assets/images/barbearias/b1.jpg'),
          avatar: require('../../assets/images/barbeiros/b4.jpg'),
          name: 'Barbearia 1',
          day: 'Quinta - Feira as 14:00',
          barber: 'João',
        },
        {
          barberShopUrl: require('../../assets/images/barbearias/b2.jpg'),
          avatar: require('../../assets/images/barbeiros/b3.jpg'),
          name: 'Barbearia 2',
          day: 'Sexta - Feira as 17:00',
          barber: 'Diego',
        },
      ],
    },
    {
      title: 'Histórico',
      data: [
        {
          barberShopUrl: require('../../assets/images/barbearias/b3.jpg'),
          avatar: require('../../assets/images/barbeiros/b7.jpg'),
          name: 'Barbearia 3',
          day: 'Quarta - Feira as 15:00',
          barber: 'Josias',
        },
        {
          barberShopUrl: require('../../assets/images/barbearias/b4.jpg'),
          avatar: require('../../assets/images/barbeiros/b6.jpg'),
          name: 'Barbearia 4',
          day: 'Sábado as 18:00',
          barber: 'Rodrigo',
        },
      ],
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ScheduleCardBarber item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColorRgba,
    paddingTop: 30,
  },
  containerHeaderSection: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    elevation: 5,
    marginBottom: 10,
  },
  textHeader: {
    fontFamily: 'Anton-Regular',
    fontSize: 18,
    color: colors.secondaryColor,
  },
});

export default SchedulesScreen;
