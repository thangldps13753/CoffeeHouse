import React, {useState, Component} from 'react';
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
const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [message, setMessage] = useState([]);

  const login = async () => {
    if (username != '' && password != '') {
      try {
        await fetch('http://10.0.2.2:3000/api/login', {
          method: 'POST', // or 'PUT'
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer TOKEN',
          },

          body: JSON.stringify({
            username: username,
            password: password,
          }),
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.message == 'Signin successful') {
              navigation.navigate('BottomTab', username);
              Alert.alert('', 'Đăng nhập thành công!!!');
              // alert("Sai tai khoan hoac mat khau")
              console.log('hhihi', responseJson);
            } else {
              setMessage(responseJson.message);
              Alert.alert('', 'Sai tài khoản hoặc mật khẩu!!!');
            }
          });
      } catch (error) {
        console.warn(error);
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
  };

  const RegisterScreen = () => {
    navigation.navigate('RegisterScreen');
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
              <Text style={styles.title}>WELCOME TO THE SHADES OF COFFEE</Text>
            </View>
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nhập username..."
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType={'next'}
                //nút bên phải
                autoCorrect={false} //không hiện ra gợi ý
                onChangeText={text => setUsername(text)}
                onChange={() => setUsernameError('')}
                keyboardType="email-address" //bàn phím có nút @
              />
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {usernameError}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Nhập password..."
                returnKeyType="go"
                placeholderTextColor="rgba(255,255,255,0.8)"
                onChangeText={text => setPassword(text)}
                secureTextEntry
                onChange={() => setPasswordError('')}
              />
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {passwordError}
              </Text>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => login(username, password)}>
                <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin: 20}} onPress={RegisterScreen}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'blue',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'rgb(100,53,70)',
                  }}>
                  ĐĂNG KÝ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    width: 140,
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
