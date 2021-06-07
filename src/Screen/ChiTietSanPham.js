import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from 'react-native';

const ChiTietSanPham = ({navigation, route}) => {
  // const [data, setData] = useState('');
  // const [image, setImage] = useState('');
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [Id, setId] = useState('');
  // const [GioiThieu, setGioiThieu] = useState('');

  // const { status, proValue } = route.params;

  // useEffect(() => {
  //     if (status === '1') {
  //         setId(proValue.Id);
  //         setImage(proValue.Images);
  //         setName(proValue.Name);
  //         setPrice(proValue.Price);
  //         setGioiThieu(proValue.GioiThieu);

  //     }
  // }, [])
  // const {name,price,date,gt,img} = props.route.params.item
  let {item: product} = route.params;
  // const BackMenu = () =>{
  //     navigation.navigate('BottomTab');
  // }
  // const ThemVaoGioHang = () =>{
  //     ToastAndroid.show("Thêm thành công!!!", ToastAndroid.SHORT);
  //     navigation.navigate('BottomTab');

  // }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(30,0,10)',
      }}>
      <View style={styles.container2}>
        <Image
          style={styles.img}
          source={{uri: 'http://10.0.2.2:3000/images/' + product.img}}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price} $</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            position: 'absolute',
            left: 10,
            top: 150,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Giới thiệu</Text>
          <View style={styles.container3}>
            <Text style={{padding: 20, fontSize: 17}}>{product.gt}</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              position: 'relative',
              right: 20,
            }}>
            <TouchableOpacity style={styles.btnThem}>
              <Text>Thêm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnHuy}
              onPress={() => navigation.goBack()}>
              <Text>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChiTietSanPham;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'white',
    elevation: 20,
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'black',
    marginTop: 10,

    height: 250,
    width: 350,
    alignContent: 'center',
  },
  img: {
    height: 120,
    width: 120,
    margin: 20,
  },
  name: {
    marginTop: 40,
    fontSize: 14,
    color: '#f55555',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 14,
  },
  btnThem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#f7c744',
    borderRadius: 23,
    height: 40,
    width: 80,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    right: -20,
  },
  btnHuy: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#f7c744',
    borderRadius: 23,
    height: 40,
    width: 80,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    right: 80,
  },
});
