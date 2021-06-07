import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  TextInput,
} from 'react-native';
const SanPhamPhoBien = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://10.0.2.2:3000/api/category/606d8f3d0a50ff9b607520a9')
      .then(res => res.json())
      .then(results => {
        console.log(results);
        setData(results);
        setLoading(false);
      })
      .catch(error => console.error('>>>>>', error));
  }, []);
  return (
    <View style={styles.shadow}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={styles.container2}
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
                    <Text style={styles.price}>{item.price} Đ</Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('SanPhamChiTiet', {item})
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
      )}
    </View>
  );
};

export default SanPhamPhoBien;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
  cardText: {
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#f7c744',
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
  container: {
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  container2: {
    paddingHorizontal: 8,
  },
  info: {
    padding: 8,
  },
  img: {
    height: 150,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    width: '80%',
    height: '80%',
    elevation: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#f7c744',
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#f7c744',
    width: '30%',
    height: '7%',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHuy: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#f7c744',
    width: '30%',
    height: '7%',
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 20,
    left: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
