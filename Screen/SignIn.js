import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

var SignIn = ({ navigation }) => {
    var [fullName, setFullName] = useState('');
    var [email, setEmail] = useState('');
    var [phoneNumber, setPhoneNumber] = useState('');
    var [gender, setGender] = useState('');
    var [password, setPassword] = useState('');
    var [confirmPassword, setConfirmPassword] = useState('');
    var users = []; // Mảng để lưu thông tin sinh viên

    const options = [
        { label: 'Nam', value: 'Nam' },
        { label: 'Nữ', value: 'Nu' },
    ];

    var isFormValid = () => {
        return (
            fullName.trim() !== '' &&
            email.trim() !== '' &&
            phoneNumber.trim() !== '' &&
            password.trim() !== '' &&
            confirmPassword.trim() !== '' &&
            confirmPassword.trim() === password.trim()
        );
    };

    var handleNameError = () => {
        return fullName.trim() === '' ? true : false;

    }

    var handleEmailError = () => {
        return email.trim() === '' ? true : false;

    }
    var handlePhoneError = () => {
        return phoneNumber.trim() === '' ? true : false;

    }
    var handlePassError = () => {
        return password.trim() === '' ? true : false;

    }
    var handleconfirmPasswordError = () => {
        return confirmPassword.trim() === '' ? true : false;

    }
    var handleconfirmPasswordErrorNotEqual = () => {
        return confirmPassword.trim() === password.trim() ? false : true;

    }

    var handleRegister = () => {
        if (isFormValid()) {
            // Tạo một đối tượng sinh viên từ thông tin nhập
            var user = {
                fullName,
                email,
                phoneNumber,
                gender,
                password,
            };
            // Thêm sinh viên vào mảng studentList
            users.push(user);
            alert('Đăng ký thành công!');
            // navigation.navigate('LogIn', { users: users });
            navigation.navigate('LogIn');

        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../Screen/img/383857528_3502011736783781_2035937230285053226_n.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Đăng ký thành viên Star</Text>

            <TextInput
                style={styles.input}
                placeholder="Họ và tên"
                placeholderTextColor="black"
                onChangeText={(text) => setFullName(text)}
            />

            {handleNameError() && <Text style={styles.errorText}>Không được để trống thông tin này</Text>}

            <View style={styles.genderContainer}>
                <Text style={styles.inputLabel}>Giới tính</Text>
                <RadioForm
                    radio_props={options}
                    initial={0} //initial value of this group
                    formHorizontal={true}
                    animation={true}
                    labelHorizontal={true}
                    buttonColor={'black'}
                    buttonSize={17}
                    labelStyle={{ fontSize: 14, color: 'black', marginRight: 20 }}
                    selectedButtonColor={'black'}
                    onPress={(value) => {
                        setGender(value);
                    }
                    } //if the user changes options, set the new value
                />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="black"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />

            {handleEmailError() && <Text style={styles.errorText}>Không được để trống thông tin này</Text>}

            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                placeholderTextColor="black"
                onChangeText={(text) => setPhoneNumber(text)}
                keyboardType="phone-pad"
            />

            {handlePhoneError() && <Text style={styles.errorText}>Không được để trống thông tin này</Text>}
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                placeholderTextColor="black"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />

            {handlePassError() && <Text style={styles.errorText}>Không được để trống thông tin này</Text>}
            <TextInput
                style={styles.input}
                placeholder="Nhập lại mật khẩu"
                placeholderTextColor="black"
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
            />

            {handleconfirmPasswordError() && <Text style={styles.errorText}>Không được để trống thông tin này</Text>}

            {handleconfirmPasswordErrorNotEqual() && <Text style={styles.errorText}>Nhập lại mật khẩu phải giống với ô trên</Text>}

            <TouchableOpacity
                style={[styles.button, isFormValid() ? styles.buttonEnabled : styles.buttonDisabled]}
                onPress={handleRegister}
                disabled={!isFormValid()}
            >
                <Text style={styles.buttonText}>Hoàn tất</Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>Tài khoản đã được đăng ký?</Text>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('LogIn')}
            >
                <Text style={styles.loginButtonText}
                    onPress={() => navigation.navigate('LogIn')} // Chuyển đến trang LogIn
                >Đăng nhập</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

let styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 250,
        height: 240,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'black',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingLeft: 10,
        color: 'black',
    },
    inputLabel: {
        fontSize: 14,
        marginLeft: -80,
        marginRight: 10,
        color: 'black',
    },
    button: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonEnabled: {
        backgroundColor: '#FFA500',
    },
    buttonDisabled: {
        backgroundColor: 'gray',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: 20,
        color: 'black',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: 20,
        color: 'black',
    },
    loginButton: {
        marginTop: 10,
        borderColor: '#FFA500',
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    loginButtonText: {
        color: '#FFA500',
    },
    genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    errorText: {
        color: 'red',
        marginTop: 2,
        marginLeft: -100
    },
    noErrorText: {
        color: 'white',

    },

});


export default SignIn;
