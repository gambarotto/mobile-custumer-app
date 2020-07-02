import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

import { colors } from '../../../utils/styles';

interface item {
  id: string;
  image_url: string;
  empty: boolean;
}

const BarbersPictures: React.FC = () => {
  const [barbers, setBarbers] = useState<item[]>([]);
  const [columns, setColumns] = useState(0);

  useEffect(() => {
    const arr = [
      {
        id: '1',
        image_url: require('../../../assets/images/barbeiros/b1.jpg'),
        empty: false,
      },
      {
        id: '2',
        image_url: require('../../../assets/images/barbeiros/b2.jpg'),
        empty: false,
      },
      {
        id: '3',
        image_url: require('../../../assets/images/barbeiros/b3.jpg'),
        empty: false,
      },
      {
        id: '4',
        image_url: require('../../../assets/images/barbeiros/b4.jpg'),
        empty: false,
      },
      {
        id: '5',
        image_url: require('../../../assets/images/barbeiros/b5.jpg'),
        empty: false,
      },
      {
        id: '6',
        image_url: require('../../../assets/images/barbeiros/b6.jpg'),
        empty: false,
      },
    ];
    const col = arr.length > 5 ? 4 : 2;
    if (barbers.length === 0) {
      setBarbers(createRows(arr, col));
      setColumns(col);
    }
  }, [barbers, columns]);

  function createRows(data: item[], col: number) {
    const rows = Math.floor(data.length / col);
    console.log('rowws ', rows);

    let lastRowElements = data.length - rows * col;
    console.log('last ', lastRowElements);

    while (lastRowElements !== col) {
      data.push({
        id: `empty-${lastRowElements}`,
        image_url: `empty-${lastRowElements}`,
        empty: true,
      });
      lastRowElements += 1;
    }

    return data;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Barber's</Text>
      </View>
      <View style={styles.containerBarbers}>
        <FlatList
          style={styles.flatlist}
          key={barbers.length > 5 ? 'h' : 'v'}
          data={barbers}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={columns}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.containerImage,
                item.empty && styles.containerImageEmpty,
              ]}>
              {!item.empty && (
                <Image style={styles.image} source={item.image_url} />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Anton-Regular',
    fontSize: 18,
    color: colors.secondaryColor,
  },
  containerBarbers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue',
  },
  flatlist: {
    flex: 1,
  },
  containerImage: {
    height: 35,
    //width: 35,
    borderRadius: 50,
    flexGrow: 1,
    flexBasis: 35,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.secondaryColor,
  },
  containerImageEmpty: {
    borderWidth: 0,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
});
export default BarbersPictures;
