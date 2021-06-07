import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SanPhamPhoBien from './src/Screen/SanPhamPhoBien';
import SanPhamAn from './src/Screen/SanPhamAn';
import HomeScreen from './src/Screen/HomeScreen';
import MenuScreen from './src/Screen/MenuScreen';
import ProfileScreen from './src/Screen/ProfileScreen';
import ThongBaoScreen from './src/Screen/ThongBaoScreen';
import ChiTietSanPham from './src/Screen/ChiTietSanPham';
import RegisterScreen from './src/Authentication/RegisterScreen';
import LoginScreen from './src/Authentication/LoginScreen';

import BottomTab from './src/Nav/BottomTab';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        {/* <Stack.Screen name="ListSinhVien" component={ListSinhVien} />
        <Stack.Screen name="State1" component={State1} /> */}

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ThongBaoScreen" component={ThongBaoScreen} />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerTitle: false, headerShown: false}}
        />
        <Stack.Screen
          name="ChiTietSanPham"
          component={ChiTietSanPham}
          options={{headerTitle: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerTitle: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
