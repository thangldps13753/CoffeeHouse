import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';

const RegisterScreen = ({navigation}) => {
  const [fullname, setfullname] = useState([]);
  const [email, setemail] = useState([]);
  const [img, setimg] = useState([]);
  const [username, setusername] = useState([]);
  const [password, setpassword] = useState([]);
  const [phone, setphone] = useState([]);
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [message, setMessage] = useState([]);

  const register = async () => {
    if (
      username != '' &&
      password != '' &&
      fullname != '' &&
      email != '' &&
      phone != ''
    ) {
      const result = await fetch('http://10.0.2.2:3000/api/register', {
        method: 'POST', // or 'PUT'
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer TOKEN',
        },

        body: JSON.stringify({
          fullname,
          email,
          username,
          phone,
          password,
        }),
      }).then(res => res.json());

      if (result.status === 'ok') {
        // everythign went fine
        navigation.navigate('LoginScreen');

        alert('Tạo tài khoản thành công!!!');
      } else {
        alert('Tài khoản đã được sử dụng!!!');
      }
    }

    if (username != '') {
      // alert(username);
      setUsernameError('');
    } else {
      setUsernameError('Hey! username should not be empty');
    }
    if (password != '') {
      // alert(password);
      setPasswordError('');
    } else {
      setPasswordError('Your Password should not be empty');
    }
    if (email != '') {
      // alert(password);
      setEmailError('');
    } else {
      setEmailError('Your Email should not be empty');
    }
    if (fullname != '') {
      // alert(password);
      setFullnameError('');
    } else {
      setFullnameError('Your Full name should not be empty');
    }
    if (phone != '') {
      // alert(password);
      setPhoneError('');
    } else {
      setPhoneError('Your Phone should not be empty');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://thecupscoffee.vn/build/images/top/main-banner.png',
                }}
              />
            </View>
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                returnKeyType={'next'}
                placeholderTextColor="rgba(255,255,255,0.8)"
                placeholder="Nhập fullname"
                onChangeText={text => setfullname(text)}
                onChange={() => setFullnameError('')}
              />
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {fullnameError}
              </Text>

              <TextInput
                style={styles.input}
                returnKeyType={'next'}
                placeholderTextColor="rgba(255,255,255,0.8)"
                placeholder="Nhập email"
                onChangeText={text => setemail(text)}
                onChange={() => setEmailError('')}
              />
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {emailError}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Nhập username..."
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType={'next'}
                //nút bên phải
                autoCorrect={false} //không hiện ra gợi ý
                onChangeText={text => setusername(text)}
                onChange={() => setUsernameError('')}
              />
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {usernameError}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Nhập password..."
                returnKeyType="go"
                placeholderTextColor="rgba(255,255,255,0.8)"
                onChangeText={text => setpassword(text)}
                secureTextEntry
                onChange={() => setPasswordError('')}
              />
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {passwordError}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Nhập phone..."
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType={'next'}
                //nút bên phải
                autoCorrect={false} //không hiện ra gợi ý
                onChangeText={text => setphone(text)}
                onChange={() => setPhoneError('')}
                keyboardType="email-address" //bàn phím có nút @
              />
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {phoneError}
              </Text>

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  register(fullname, email, img, username, phone, password)
                }>
                <Text style={styles.buttonText}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(30,0,10)',
    flex: 1,
    flexDirection: 'column',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
  },
  logo: {
    width: 120,
    height: 80,
  },
  title: {
    color: '#f7c744',
    fontSize: 16,
    marginTop: 5,
    opacity: 0.9,
    textAlign: 'center',
  },
  infoContainer: {
    position: 'relative',
    left: 0,
    bottom: -70,
    backgroundColor: 'rgb(30,0,10)',
    marginBottom: 80,
  },
  input: {
    height: 40,
    width: 370,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32,53,70)',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
