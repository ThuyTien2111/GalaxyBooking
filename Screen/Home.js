import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageSlider } from 'react-native-image-slider-banner';

const moviesData = [
    {
        id: 1,
        title: 'Đất rừng phương nam',
        image: require('./img/film1.webp'),
        rating: 8.4,
        genre: 'K',
    },
    {
        id: 2,
        title: 'Quỷ môn quan: Gọi hồn',
        image: require('./img/film2.webp'),
        rating: 9.1,
        genre: 'T18',
    },
    {
        id: 3,
        title: 'Năm đêm kinh hoàng',
        image: require('./img/film3.webp'),
        rating: 9.6,
        genre: 'T13',
    },
    {
        id: 4,
        title: 'Âm hồn đô thị',
        image: require('./img/film4.webp'),
        rating: 4.5,
        genre: 'T18',
    },
    {
        id: 5,
        title: 'Những nàng tôm lấp lánh',
        image: require('./img/film5.webp'),
        rating: 8.3,
        genre: 'T18',
    },
    {
        id: 6,
        title: 'Người vợ cuối cùng',
        image: require('./img/film6.webp'),
        rating: 8.3,
        genre: 'T18',
    },
    {
        id: 7,
        title: 'Wolfoo Và Hòn Đảo Kỳ Bí',
        image: require('./img/film7.webp'),
        rating: 6.4,
        genre: 'T13',
    },
    {
        id: 8,
        title: 'Phong ấn quỷ dữ',
        image: require('./img/film8.webp'),
        rating: 5.0,
        genre: 'T16',
    },
    {
        id: 9,
        title: 'Vầng trăng máu',
        image: require('./img/film9.webp'),
        rating: 9.3,
        genre: 'T18',
    },
    {
        id: 10,
        title: 'Quỷ ám: Tín đồ',
        image: require('./img/film10.webp'),
        rating: 7.9,
        genre: 'T18',
    },
];
const newMoviesData = [
    {
        id: 1,
        title: 'Mỹ Nhân Đạo Chích',
        image: require('./img/film1b.webp'),
        rating: 8.8,
        genre: 'T13',
    },
    {
        id: 2,
        title: 'Những Kỷ Nguyên Của Taylor Swift',
        image: require('./img/film2b.webp'),
        rating: 9.6,
        genre: 'T13',
    },
    {
        id: 3,
        title: 'Ailo: Cuộc Phiêu Lưu Ở Laponie',
        image: require('./img/film3b.webp'),
        rating: 0,
        genre: 'T13',
    },
    {
        id: 4,
        title: 'Biệt Đội Marvels',
        image: require('./img/film4b.webp'),
        rating: 8.1,
        genre: 'T13',
    },
    {
        id: 5,
        title: 'Yêu Lại Vợ Ngầu',
        image: require('./img/film5b.webp'),
        rating: 7.0,
        genre: 'T16',
    },
    {
        id: 6,
        title: 'Đường Cùng',
        image: require('./img/film6b.webp'),
        rating: 0,
        genre: 'T18',
    },
    {
        id: 7,
        title: 'Lễ Tạ Ơn Kinh Hoàng',
        image: require('./img/film7b.webp'),
        rating: 5.5,
        genre: 'T18',
    },
    {
        id: 8,
        title: 'Đấu Trường Sinh Tử: Khúc Hát Của Chim Ca Và Rắn Độc',
        image: require('./img/film8b.webp'),
        rating: 6.6,
        genre: 'T18',
    }
];

const Home = () => {
    const [isShowingNow, setIsShowingNow] = useState(true);
    var [moviesToShow, setMoviesToShow] = useState(moviesData.slice(0, 6)); // Hiển thị 6 phim ban đầu

    const toggleMovies = () => {
        if (isShowingNow == true) {
            setMoviesToShow(moviesData);
        } else {
            setMoviesToShow(newMoviesData);
        }
    };
    const changeToNewMovies = () => {
        setIsShowingNow(false);
        setMoviesToShow(newMoviesData.slice(0, 6));
    };
    const changeToShowingMovies = () => {
        setIsShowingNow(true);
        setMoviesToShow(moviesData.slice(0, 6));
    };

    const bannerImages = [
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F27%2Fglw-digital-2048x682_1698380463673.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F27%2Ftaylor-2048_1698380586771.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F25%2Fnvcc-2048_1698200775270.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F27%2Fqmq-2048_1698382401475.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F17%2Fdatrungpn-2-1697433653458_1697510491383.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F9%2Fdrpn-2048-x-682-px_1696827066898.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F17%2Fvnpay-102023-4_1697533170464.jpg&w=3840&q=75" },
    ]

    return (
        <View style={styles.container}>
            <View></View>

            <ImageSlider
                data={bannerImages}
                autoPlay={true}
                caroselImageContainerStyle={{ marginTop: -40, height: 250, marginBottom: -5 }}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => changeToShowingMovies()}
                >
                    <Text style={isShowingNow ? styles.activeText : styles.buttonText}>Đang chiếu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => changeToNewMovies()}
                >
                    <Text style={!isShowingNow ? styles.activeText : styles.buttonText}>Sắp chiếu</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={moviesToShow}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.movieContainer}>
                        <TouchableOpacity>
                            <Image source={item.image} style={styles.movieImage} />
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                            <View style={styles.ratingContain}>
                                    <Text style={styles.ratingText}> {item.rating} ⭐</Text>
                            </View>

                            <View style={styles.typeContain}>
                                <Text style={styles.typeText}>{item.genre}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                )}
            />

            <TouchableOpacity style={styles.loadMoreButton} onPress={toggleMovies}>
                <Text style={styles.loadMoreText}>Xem tiếp </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        marginTop: -20,
    },
    button: {
        padding: 5,
        backgroundColor: 'white',
    },
    buttonText: {
        color: 'gray',
    },
    activeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e40a5',
    },
    movieContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    movieImage: {
        width: '100%',
        height: 200,
    },
    movieText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    loadMoreButton: {
        marginTop: 10,
        borderColor: '#FFA500',
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 20
    },
    loadMoreText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFA500',
    },
    typeContain: {
        marginLeft: 5,
        position: 'absolute',
        justifyContent: 'flex-end',
        marginTop: 5,
        borderRadius: 5,
        backgroundColor: '#FFA500',
        width: 40,
        paddingVertical: 4,
    },
    typeText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    ratingContain: {
        marginLeft: 75,
        position: 'absolute',
        justifyContent: 'flex-end',
        marginTop: 165,
        borderRadius: 5,
        backgroundColor: '#00000068',
        width: 60,
        paddingVertical: 4,
    },
    ratingText: {
        textAlign: 'right',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Home;
