import React, { useState, Dispatch, SetStateAction } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../../../utils/styles';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

const ModalHour: React.FC<{ setHourIsVisible: Dispatcher<boolean> }> = ({
  setHourIsVisible,
}) => {
  const [schedules, setSchedules] = useState<string[]>([
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
  ]);

  function item(schedule: string) {
    return (
      <TouchableOpacity key={schedule} style={styles.cntnrItem}>
        <Text style={styles.textItem}>{schedule}</Text>
      </TouchableOpacity>
    );
  }
  function Hours() {
    const arr = [];
    for (let i = 0; i < schedules.length; i++) {
      arr.push(item(schedules[i]));
    }
    return arr;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o horário</Text>
      <View style={styles.cntnerHours}>{Hours()}</View>
      <View style={styles.cntnrButtons}>
        <TouchableOpacity
          onPress={() => setHourIsVisible(false)}
          style={styles.cntnrButtonBack}>
          <Text style={styles.textButtonBack}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHourIsVisible(false)}
          style={styles.cntnrButton}>
          <Text style={styles.textButton}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.secondaryColor,
    marginBottom: 10,
  },
  cntnerHours: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cntnrItem: {
    height: 40,
    width: 60,
    backgroundColor: colors.secondaryColor,
    borderRadius: 4,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    fontFamily: 'Anton-Regular',
    fontSize: 16,
    color: colors.primaryColor,
  },
  cntnrButtons: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  cntnrButtonBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonBack: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 16,
    color: colors.secondaryColor,
  },
  cntnrButton: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  textButton: {
    fontFamily: 'Anton-Regular',
    fontSize: 16,
    color: colors.primaryColor,
  },
});
export default ModalHour;
