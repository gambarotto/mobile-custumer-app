import React, { Dispatch, SetStateAction } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { colors } from '../../../utils/styles';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface IBarbers {
  id: number;
  name: string;
  email: string;
  responsibility: string;
  days_off: number[];
  job_id: number;
  schedule_id: number | null;
}

const ModalBarber: React.FC<{
  setBarberIsVisible: Dispatcher<boolean>;
  barbers: IBarbers[];
}> = ({ setBarberIsVisible, barbers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barbeiro</Text>
      <FlatList
        data={barbers}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cntnrItem}>
            <Text style={styles.textItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
        style={styles.flatlist}
      />
      <TouchableOpacity
        style={styles.cntnrButton}
        onPress={() => setBarberIsVisible(false)}>
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //height: '30%',
    //width: '100%',
    padding: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.secondaryColor,
    marginBottom: 10,
  },
  flatlist: {
    height: '50%',
    width: '100%',
  },
  cntnrItem: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    margin: 2,
    borderRadius: 8,
    backgroundColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.primaryColor,
  },
  cntnrButton: {
    height: 60,
    width: '100%',
    backgroundColor: colors.secondaryColor,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Anton-Regular',
    fontSize: 20,
    color: colors.primaryColor,
  },
});
export default ModalBarber;
