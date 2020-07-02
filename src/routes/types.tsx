//import React from 'react';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';

// export type LoginStack = {
//   Login: undefined;
//   CreateAccount: undefined;
//   Main: undefined;
// };
export type StackParam = {
  Login: undefined;
  CreateAccount: undefined;
  Detail: {
    data: {
      id: number;
      barbershopUrl: () => void;
      name: string;
      address: {
        street: string;
        number: string;
        city: string;
      };
      phone: string;
      rating: number;
    };
  };
  Main: undefined;
};
export type TabStack = {
  Main: undefined;
  Favorities: undefined;
  Schedules: undefined;
  Tickets: undefined;
};
export type DetailStackRouteProp = RouteProp<StackParam, 'Detail'>;
type LoginStackNavigationProp = StackNavigationProp<StackParam>;
type TabStackNavigationProp = MaterialBottomTabNavigationProp<TabStack>;

export type PropsStack = {
  route: DetailStackRouteProp;
  navigation: CompositeNavigationProp<
    LoginStackNavigationProp,
    TabStackNavigationProp
  >;
};

//export type PropsStack = StackNavigationProp<Stack>;
//export type PropsTabStack = StackScreenProps<TabStack>;
