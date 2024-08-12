import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/logo_posyandu.png';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Index = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [no_hp, setNoHp] = useState('');
  const [nama, setNama] = useState('');
  const [kata_sandi, setKataSandi] = useState('');

  const handleRegister = () => {
    // Pass data to Syarat screen
    navigation.navigate('Syarat', { no_hp: no_hp, nama: nama, kata_sandi: kata_sandi });
  };


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.TextLogo}>E-Posyandu</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Daftar E-Posyandu</Text>
        <TextInput
          placeholder="No Hp"
          placeholderTextColor={'#000000'}
          style={styles.input}
          keyboardType='numeric'
          value={no_hp}
          onChangeText={(text) => setNoHp(text)}
          maxLength={13}
        />
        <TextInput
          placeholder="Nama Pengguna"
          placeholderTextColor={'#000000'}
          style={styles.input}
          value={nama}
          onChangeText={(text) => setNama(text)}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Kata Sandi"
            placeholderTextColor={'#000000'}
            secureTextEntry={!passwordVisible}
            style={styles.inputPassword}
            value={kata_sandi}
            onChangeText={(text) => setKataSandi(text)}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialCommunityIcons
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>

        <Text style={styles.titleRegis}>Sudah Punya Akun?, Silakan Tekan Tombol Dibawah</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>

    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 90,
  },
  TextLogo: {
    fontSize: 30,
    color: '#404258',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  logo: {
    width: 150,
    height: 150,
  },
  card: {
    flex: 1,
    padding: 20,
    backgroundColor: '#008EB3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#ffffff',
    marginVertical: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    color: '#404258',
    height: 50,
    fontFamily: 'PlusJakartaSans-Regular',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    color: '#404258',
    height: 50,
    paddingHorizontal: 5,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  button: {
    backgroundColor: '#176B87',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  titleRegis: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#ffffff',
    marginVertical: 10,
    textAlign: 'center',
  },
  forget: {
    fontSize: 15,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'right',
  },
});

export default Index;