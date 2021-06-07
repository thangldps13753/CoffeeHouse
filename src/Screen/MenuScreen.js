import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SanPhamPhoBien from './SanPhamPhoBien';
import SanPhamAn from './SanPhamAn';
import SanPhamUong from './SanPhamUong';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const MenuScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        style: {backgroundColor: 'rgb(30,0,10)'},
      }}>
      <Tab.Screen
        name="SanPhamPhoBien"
        component={SanPhamPhoBien}
        options={{
          tabBarLabel: 'Sản phẩm phổ biến',
        }}
      />
      <Tab.Screen
        name="SanPhamUong"
        component={SanPhamUong}
        options={{
          tabBarLabel: 'Sản phẩm uống',
        }}
      />
      <Tab.Screen
        name="SanPhamAn"
        component={SanPhamAn}
        options={{
          tabBarLabel: 'BÁNH & SNACK',
          activeTintColor: 'black',
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
