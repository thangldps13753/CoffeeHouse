import React from 'react';
import {StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Header/Header';

const NotificationItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>

        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.detail}</Text>
    </View>
  </View>
);

const ThongBaoScreen = ({title}) => {
  return (
    //Header
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title="Thông báo" />

      <View>
        <FlatList
          data={[
            {
              id: 1,
              type: 1,
              name: 'Cửa hàng The Coffee House thứ 2 ra mắt tại Núi Bà Đen - Tây Ninh',
              date: '19/02/2001',
              detail:
                'Cửa hàng The Coffee House thứ 2 ra mắt tại Núi Bà Đen - Tây Ninh',
            },
            {
              id: 2,
              type: 2,
              name: 'Cửa hàng The Coffee House thứ 2 ra mắt tại Núi Bà Đen - Tây Ninh',
              date: '19/02/2001',
              detail:
                'Cửa hàng The Coffee House thứ 2 ra mắt tại Núi Bà Đen - Tây Ninh',
            },

            {
              id: 3,
              type: 3,
              name: 'Cửa hàng The Coffee House thứ 2 ra mắt tại Núi Bà Đen - Tây Ninh',
              date: '19/02/2001',
              detail:
                'Cửa hàng The Coffee House thứ 2 ra mắt tại Núi Bà Đen - Tây Ninh',
            },
          ]}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <NotificationItem item={item} />}
        />
      </View>
    </View>
    //Body
  );
};

export default ThongBaoScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#EA8025',
    flexDirection: 'row',
    paddingBottom: 4,
    paddingTop: 10,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  //BOdy
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00716f',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#00716f',
    fontSize: 18,
    fontWeight: '500',
  },
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  divider: {
    height: 10,
  },
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  },
  buttonActiveContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  buttonInactiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  activeMark: {
    backgroundColor: '#1e88e5',
    width: 4,
  },
  activeIcon: {
    padding: 12,
    // trick
    marginLeft: -4,
  },
  //
  listContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  itemTopContainer: {
    flexDirection: 'row',
  },
  itemTypeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTopTextContainer: {
    marginRight: 40,
    marginLeft: 4,
  },
  itemName: {
    color: '#000',
    fontWeight: '500',
  },
  itemDate: {
    color: '#787878',
    fontSize: 12,
    marginTop: 8,
  },
  itemDetail: {
    color: '#787878',
    // fontSize: 12,
    marginTop: 12,
  },
});
