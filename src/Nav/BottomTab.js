import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MenuScreen from '../Screen/MenuScreen';
import ThongBaoScreen from '../Screen/ThongBaoScreen';
import ProfileScreen from '../Screen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 10,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Icon
                style={{color: focused ? '#e32f45' : '#748c94'}}
                name="home"
                size={32}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Icon
                style={{color: focused ? '#e32f45' : '#748c94'}}
                name="menu"
                size={32}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Sản phẩm
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ThongBaoScreen"
        component={ThongBaoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Icon
                style={{color: focused ? '#e32f45' : '#748c94'}}
                name="bell"
                size={32}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Thông báo
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Icon
                style={{color: focused ? '#e32f45' : '#748c94'}}
                name="account"
                size={32}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Tài khoản
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import HomeScreen from './src/Screen/HomeScreen';
// import MenuScreen from './src/Screen/MenuScreen';
// import ThongBaoScreen from './src/Screen/ThongBaoScreen';
// import ProfileScreen from './src/Screen/ProfileScreen';
// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="HomeScreen" component={HomeScreen} />
//         <Tab.Screen name="MenuScreen" component={MenuScreen} />
//         <Tab.Screen name="ThongBaoScreen" component={ThongBaoScreen} />
//         <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
