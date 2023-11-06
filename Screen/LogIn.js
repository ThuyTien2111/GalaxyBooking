import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import thư viện FontAwesome hoặc thư viện icon khác
import { useNavigation, useRoute } from '@react-navigation/native';


const LogIn = ({ navigation, route}) => {
    // const LogIn = ({ navigation}) => {

    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var user={};

    var handleEmailError = () => {
        return email.trim() === '' ? true : false;

    }
    var handlePassError = () => {
        return password.trim() === '' ? true : false;

    }
    const fakeUsers = [
        { email: 'user1@gmail.com', password: '12345' },
        { email: 'user2@gmail.com', password: '12345' },
        { email: 'tien', password: '123' },
        // Thêm nhiều người dùng khác ở đây
    ];
    const { users } = route.params;
    const handleLogin = () => {
        // Xác thực thông tin đăng nhập
        user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            console.log(user);
            alert('Đăng nhập thành công!');
            // navigation.navigate('Account');

            navigation.navigate('Account', {u:user});
        } else {
            alert('Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập.');
        }
    
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('./img/LoginLogo.png')}
                style={styles.logo}
            />
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nhập Email"
                    placeholderTextColor="black"
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            {handleEmailError() && <Text style={styles.errorText}>Không được để trống thông tin này</Text>}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor="black"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
            </View>
            {handlePassError() && <Text style={styles.errorText}>Không được để trống thông tin này</Text>}
                <TouchableOpacity style={styles.forgotPass}>
                <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
                </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, (email.trim() === '' || password.trim() === '') && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={email.trim() === '' || password.trim() === ''}
            >
                <Text style={styles.buttonText} onPress={handleLogin}>Đăng nhập</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Không có tài khoản?</Text>
                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.signupButtonText} onPress={() => navigation.navigate('SignIn')} // Chuyển đến trang LogIn
                    >Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 250,
        height: 240,
        marginBottom: 20,
        marginTop: -20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,

    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 12,
    },
    input: {
        width: 340,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 40,
        color: 'black',

    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 2,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#FFA500',
    },
    buttonDisabled: {
        backgroundColor: 'lightgray',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        marginTop: 10,
        color: 'blue',
    },
    forgotPass:{
        alignSelf: 'flex-end',
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 80,
    },
    signupText: {
        fontSize: 400,
        fontSize: 16,
        marginTop: 10,
        color: 'black',
    },
    signupButton: {
        borderColor: '#FFA500',
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: 5,
        paddingVertical: 7,
        paddingHorizontal: 15,
    },
    signupButtonText: {
        fontSize: 16,
        color: '#FFA500',
    },
});

export default LogIn;
