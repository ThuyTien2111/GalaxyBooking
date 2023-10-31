import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Linking,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

// Import thư viện FontAwesome hoặc thư viện icon khác
// function Account({ navigation, route}) {
    function Account({ navigation}) {
    // var {u}  = route.params;
    var u={
        fullName:'Thủy Tiên'
    }
    console.log(u.fullName);
    var [star, setStar] = useState(0);
    var [money, setMoney] = useState(0);

    return (
        // <ScrollView contentContainerStyle={styles.contain}>
        <ScrollView contentContainerStyle={styles.contain}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Tài khoản</Text>
                <TouchableOpacity>
                    <AntDesign name="setting" size={24} color="#2451da" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.accountInfo}>
                    <Image
                        source={require('./img/avt.png')}
                        style={styles.img}
                    />
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.name}>
                            <FontAwesome5 name="medal" size={24} color="gold" style={{ marginRight: 10 }} />
                            {u.fullName}</Text>
                        <Text style={styles.star}>Star</Text>
                        <Text style={styles.numberStar}>
                            <FontAwesome5 name="gift" size={24} color="#FFA500" style={{ marginRight: 10 }} />
                            {star} Stars</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="qrcode-scan" size={50} color="#FFA500" style={{ marginLeft: 20 }} />
                        </TouchableOpacity>
                        <Text style={styles.vipCode}>Mã thành viên</Text>
                    </View>
                </View>
                <View style={styles.accountInfo}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>
                            <AntDesign name="edit" size={24} color="black" style={{ marginRight: 10 }} />
                            Thông tin
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>
                            <MaterialIcons name="history" size={24} color="black" style={{ marginRight: 10 }} />
                            Giao dịch
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>
                            <Feather name="bell" size={24} color="black" style={{ marginRight: 10 }} />
                            Thông báo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.accountInfo}>
                    <Text style={styles.name}>Tổng chi tiêu năm 2023
                        <TouchableOpacity>
                            <AntDesign name="infocirlceo" size={20} color="#2451da" style={{ marginLeft: 5 }} />
                        </TouchableOpacity>
                    </Text>
                    <Text style={{ fontSize: 16, color: '#FFA500', fontWeight: 'bold', marginLeft: 130 }}> {money}đ</Text>
                </View>
                <View style={styles.accountInfo}>
                    <View>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('./img/2693074.png')} style={styles.giftImg} />
                            <Text style={styles.gift}>Đổi Quà</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('./img/2693042.png')} style={styles.giftImg} />
                            <Text style={styles.gift}>My Rewards</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={require('./img/2693186.png')} style={styles.giftImg} />
                            <Text style={styles.gift}>Gói hội viên</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.accountInfo2}>
                    <TouchableOpacity style={styles.about}>
                        <Text style={{ fontSize: 16, alignItems:'flex-start'}}>Gọi ĐƯỜNG DÂY NÓNG: 
                            <Text style={styles.aboutText}>  19002224</Text>
                            <AntDesign name="right" size={24} color="black" style={{marginLeft:87}} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.about}>
                        <Text style={{ fontSize: 16, alignItems:'flex-start' }}>Email: 
                            <Text style={styles.aboutText}>  hotro@galaxystudio.vn</Text>
                            <AntDesign name="right" size={24} color="black" style={{marginLeft:115}} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.about}
                    onPress={()=>Linking.openURL('https://www.galaxycine.vn/ve-chung-toi/')}
                    >
                        <Text style={{ fontSize: 16, alignItems:'flex-start'}}>Thông tin công ty 
                            <AntDesign name="right" size={24} color="black" style={{marginLeft:216}} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.about}
                    onPress={()=>Linking.openURL('https://galaxyplay.vn/about-us/dieu-khoan-su-dung')}
                    >
                        <Text style={{ fontSize: 16, alignItems:'flex-start'}}>Điều khoản sử dụng
                            <AntDesign name="right" size={24} color="black" style={{marginLeft:197}} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.about}
                    onPress={()=>Linking.openURL('https://www.galaxycine.vn/khuyen-mai/chinh-sach-thanh-toan/')}
                    >
                        <Text style={{ fontSize: 16, alignItems:'flex-start'}}>Chính sách thanh toán
                            <AntDesign name="right" size={24} color="black" style={{marginLeft:180}} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.about}
                    onPress={()=>Linking.openURL('https://www.galaxycine.vn/chinh-sach-bao-mat/')}
                    >
                        <Text style={{ fontSize: 16, alignItems:'flex-start'}}>Chính sách bảo mật
                            <AntDesign name="right" size={24} color="black" style={{marginLeft:198}} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.about}
                    onPress={()=>Linking.openURL('https://www.galaxycine.vn/hoi-dap/')}
                    >
                        <Text style={{ fontSize: 16, alignItems:'flex-start'}}>Câu hỏi thường gặp
                            <AntDesign name="right" size={24} color="black" style={{marginLeft:197}} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}
var styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
        // paddingHorizontal:20,
        backgroundColor: 'lightgray'
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    icon: {
        marginRight: 10
    },
    accountInfo: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'space-around',
        width: 400,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    accountInfo2: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        width: 400,
        paddingHorizontal: 20,
        // paddingVertical: 10,
    },
    img: {
        height: 100,
        width: 100,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    star: {
        color: 'gray',
        marginLeft: 30,
    },
    numberStar: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    vipCode: {
        fontWeight: 'bold',
        color: "#FFA500",
        fontSize: 13,
        marginTop: 10,
    },
    body: {
        marginTop: 10,
    },
    gift: {
        color: '#1e40a5',
        fontSize: 15,
    },
    giftImg: {
        borderWidth: 4,
        borderRadius: 80,
        width: 100,
        height: 100,
        borderColor: "#1e40a5"
    },
    about:{
        width:370,
        justifyContent:'flex-start',
        paddingVertical:10,
        borderBottomWidth:1,
    },
    aboutText:{ 
        fontWeight: 'bold',
        color:"#1e40a5",
        fontSize: 16, 
        alignItems:'flex-start' 
    }    

})
export default Account;
