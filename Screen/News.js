import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native';
import React from 'react';
export default function News() {
    const [data, setData] = React.useState([
        {
            key: 1, name: "The Marvels: Có Cứu Vũ Trụ Điện Ảnh Marvel Khỏi Một Năm Thất Bát?", time: "1 giờ trước", img: require('./img/img1.jpg'), type: "Bình luận",
            url: "https://www.galaxycine.vn/binh-luan-phim/preview-the-marvels-co-cuu-vu-tru-dien-anh-marvel-khoi-mot-nam-that-bat/"
        },
        {
            key: 2, name: "Killers Of The Flower Moon: Ứng Viên Nặng Kí Cho Oscar 2024?", time: "3 giờ trước", img: require('./img/img2.jpg'), type: "Bình luận",
            url: "https://www.galaxycine.vn/binh-luan-phim/review-killers-of-the-flower-moon-ung-vien-nang-ki-cho-oscar-2024/"
        },
        {
            key: 3, name: "Đất Rừng Phương Nam: Cần Chỉn Chu Hơn Ở Phần Sau!", time: "2 ngày trước", img: require('./img/img3.webp'), type: "Bình luận",
            url: "https://www.galaxycine.vn/binh-luan-phim/review-dat-rung-phuong-nam-can-chin-chu-hon-o-phan-sau/"
        },
        {
            key: 4, name: "Combo Siêu Ngầu Chào Đại Chiến Captain America: Civil War", time: "1 năm trước", img: require('./img/actor1.jpg'), type: "Nhân vật",
            url: "https://www.galaxycine.vn/khuyen-mai/combo-sieu-ngau-chao-dai-chien-captain-america-civil-war/"
        },
        {
            key: 5, name: "Martin Scorsese Ngưỡng Mộ Tài Viết Kịch Bản Của Quentin Tarantino", time: "2 tuần trước", img: require('./img/img7.jpg'), type: "Nhân vật",
            url: "https://www.galaxycine.vn/movie-blog/martin-scorsese-nguong-mo-tai-viet-kich-ban-cua-quentin-tarantino/"
        },
        {
            key: 6, name: "Những Cặp Đôi Đông Fan Nhất Trong Conan", time: "2 năm trước", img: require('./img/img8.jpg'), type: "Nhân vật",
            url: "https://www.galaxycine.vn/movie-blog/nhung-cap-doi-dong-fan-nhat-trong-conan/"
        },
        {
            key: 7, name: "The Nun 2: Valak Đã Ngủ Yên?", time: "2 ngày trước", img: require('./img/img4.jpg'), type: "Tin tức",
            url: "https://www.galaxycine.vn/binh-luan-phim/review-the-nun-2-valak-da-ngu-yen/"
        },
        {
            key: 8, name: "Detective Conan Black Iron Submarine: Chỉ Cần Tổ Chức Áo Đen Xuất Hiện?", time: "2 tháng trước", img: require('./img/img5.jpg'), type: "Tin tức",
            url: "https://www.galaxycine.vn/en/binh-luan-phim/review-detective-conan-black-iron-submarine-chi-can-to-chuc-ao-den-xuat-hien-phim-chac-chan-hay/"
        },
        {
            key: 9, name: "The Equalizer 3: “Gân” Hơn John Wick?", time: "1 tuần trước", img: require('./img/img6.jpg'), type: "Tin tức",
            url: "https://www.galaxycine.vn/binh-luan-phim/review-the-equalizer-3-gan-hon-john-wick/"
        },
    ])
    const [type, setType] = React.useState("Bình luận");
    const [colorText2, setColorText2] = React.useState("gray");
    const [colorText3, setColorText3] = React.useState("gray");
    const [colorText4, setColorText4] = React.useState("gray");

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.text1}>ĐIỆN ẢNH</Text>
                <Image source={require('./img/search.png')} style={styles.img1}></Image>

            </View>
            <View style={styles.view2}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%' }}>
                    <TouchableOpacity onPress={() => {
                        setType("Bình luận")
                        setColorText2("blue")
                        setColorText3("black")
                        setColorText4("black")
                    }}>
                        <View style={styles.btn}>
                            <Text style={[styles.textbtn, { color: colorText2 }]}>Bình luận</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setType("Tin tức")
                        setColorText2("black")
                        setColorText3("blue")
                        setColorText4("black")
                    }}>
                        <View style={styles.btn}>
                            <Text style={[styles.textbtn, { color: colorText3 }]}>Tin tức</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setType("Nhân vật")
                        setColorText2("black")
                        setColorText3("black")
                        setColorText4("blue")
                    }}>
                        <View style={styles.btn}>
                            <Text style={[styles.textbtn, { color: colorText4 }]}>Nhân vật</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
                <ScrollView style={styles.view3}>
                    <FlatList
                        data={data.filter((item) => type === "Bình luận" || item.type === type)}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                                    <View>
                                        <Image source={item.img} style={{ width: '90%', height: 150, left: 20, top: 10 }}></Image>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', top: 20, left: 10 }}>{item.name}</Text>
                                        <Text style={{ fontSize: 15, fontWeight: 300, top: 30, left: 10, color: 'gray' }}>{item.time}</Text>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 18, fontWeight: 700, top: 30, left: 10, color: 'orange' }}>Đọc thêm</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.key}
                    />
                </ScrollView>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view1: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        marginTop: 20,

    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    img1: {
        width: 20,
        height: 20,
        marginLeft: 200,
        marginTop: 10,
    },
    view2: {
        height: 50,
    },
    btn: {
        width: "99px",
        height: "32px",
        justifyContent: 'center',
        alignItems: 'center',

    },
    textbtn: {
        fontSize: 20,
        fontWeight: 700,
    },
    view3: {
        marginBottom: 50,
    },
    item: {
        width: '95%',
        height: 250,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    }
});
