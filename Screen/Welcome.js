import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';


var Welcome = ({ navigation }) => {
    const navigateToSignInScreen = () => {
      navigation.navigate('SignIn'); // Chuyển sang màn hình SignIn khi nhấn nút "Bắt đầu"
  };

  return (
    
    <ImageBackground
      source={require('../Screen/img/mobile-background-with-starry-sky-purple-tones_79603-550.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        
        <View style={styles.overlay} />
        <View style={styles.content}>
        <Image
          source={require('../Screen/img/383195581_332909202575060_8429018567126745398_n-removebg-preview.png')}
          style={styles.logo}
        />
          <Text style={styles.p}>Welcome to </Text>
          <Text style={styles.title}>Galaxy Cinema Ticket Booking</Text>
          {/* <TouchableOpacity style={styles.startButton} onPress={navigation.navigate('SignIn')}> */}
          <TouchableOpacity style={styles.startButton} onPress={navigateToSignInScreen}>
            <Text style={styles.buttonText}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  p: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Màu của viền chữ
    textShadowOffset: { width: 2, height: 2 }, // Điều chỉnh khoảng cách viền chữ
    textShadowRadius: 6, // Điều chỉnh độ mờ của viền chữ

  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 320,
    height: 310,
    marginBottom: 30, // Đẩy logo lên một chút
    
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    marginTop: -70, // Đẩy text và nút lên một chút
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Màu của viền chữ
    textShadowOffset: { width: 2, height: 2 }, // Điều chỉnh khoảng cách viền chữ
    textShadowRadius: 6, // Điều chỉnh độ mờ của viền chữ
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
Welcome.navigationOptions = {
  headerShown: false, // Ẩn header cho màn hình Welcome
};
export default Welcome;
