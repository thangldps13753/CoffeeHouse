import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dummyData} from '../data/Data';
import Carousel1 from '../data/Carousel1';
import Header from '../Header/Header';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://10.0.2.2:3000/api/category/606d8f0a0a50ff9b607520a7')
      .then(res => res.json())
      .then(results => {
        console.log(results);
        setData(results);
        setLoading(false);
      })
      .catch(error => console.error('>>>>>', error));
  }, []);
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />

      <Header title="THE SHADES OF COFFEE" />

      <ScrollView style={{marginBottom: 60}}>
        <Text
          style={{
            color: 'black',
            marginTop: 8,
            marginLeft: 10,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Ưu đãi mùa Tết 2021
        </Text>
        <View style={{marginBottom: 30}}>
          <Carousel1 data={dummyData} />

          <Text
            style={{
              color: 'black',
              marginTop: -70,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Một số sản phẩm ăn
          </Text>
          <View style={styles.shadow}>
            <FlatList
              data={data}
              horizontal
              renderItem={({item}) => (
                <View style={styles.wrapper}>
                  <View style={styles.container}>
                    <Image
                      style={styles.img}
                      source={{uri: 'http://10.0.2.2:3000/images/' + item.img}}
                    />
                    <View style={styles.info}>
                      <Text style={styles.name}>{item.name}</Text>
                      <View style={styles.priceBow}>
                        <Text style={styles.price}>{item.price}</Text>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('ChiTietSanPham', {item})
                          }>
                          <Text style={styles.cardText}>MUA +</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item._id}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    elevation: 50,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: '#EA8025',
  },
  headerInput: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  headerCard: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  opacityText: {
    backgroundColor: 'white',
    alignItems: 'center',
    color: 'black',
    height: 30,
    width: 90,
    borderRadius: 14,
    justifyContent: 'center',
  },

  cardStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,

    borderRadius: 10,
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
  cardText: {
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#2f95dc',
  },

  container: {
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 5,
  },
  container2: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  info: {
    padding: 8,
  },
  img: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
  },
  priceBow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
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
    backgroundColor: '#EA8025',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#EA8025',
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
});
