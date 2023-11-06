import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Linking, Picker } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
export default function ChoseShowtime({ navigation }) {
    const route = useRoute();
    var { item } = route.params;
    var [content, setContent] = useState('showtime')
    var [selectedCinema, setSelectedCinema] = useState(null);
    var cinemas = ['Galaxy Nguyễn Du', 'Galaxy Tân Bình', 'Galaxy Kinh Dương Vương', 'Galaxy Quang Trung',
        "Galaxy Trung Chánh", "Galaxy Huỳnh Tấn Phát", "Galaxy Nguyễn Văn Quá"];

    var showtime = item.showtime;
    var [ticket, setTicket] = useState({
        id: 0,
        dayofweek: showtime.at(0).dayofweek,
        date: showtime.at(0).date,
        time: '',
        cinema: selectedCinema
    })
    var defaultShowTime = showtime.find((time) => time.date == ticket.date)
    var time = defaultShowTime.time

    function choseDate(ngay, thu) {
        var newTicket = {
            id: ticket.id + 1,
            dayofweek: thu,
            date: ngay,
            time: '',
            cinema: selectedCinema
        }
        setTicket(newTicket)
    }
    function setTicketTime(hour) {
        // Tạo một bản sao mới của ticket với giá trị time mới
        var newTicket = {
            ...ticket,
            time: hour,
            cinema: selectedCinema
        };
        // Sử dụng setTicket để cập nhật trạng thái
        setTicket(newTicket);
    }
    console.log(ticket)
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setContent('showtime')}
                >
                    <Text style={content == 'showtime' ? styles.activeText : styles.buttonText}>Lịch chiếu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setContent('detail')}
                >
                    <Text style={content == 'detail' ? styles.activeText : styles.buttonText}>Thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setContent('new')}
                >
                    <Text style={content == 'new' ? styles.activeText : styles.buttonText}>Tin tức</Text>
                </TouchableOpacity>
            </View>
            {content == "showtime" &&
                <View style={{ flex: 1, marginHorizontal: 10, }}>
                    <View style={styles.cinemaSelectContainer}>
                        <Picker
                            selectedValue={selectedCinema}
                            onValueChange={(value) =>
                                setSelectedCinema(value)
                            }
                            style={{ fontSize: 20, padding: 10, marginRight: 10, fontWeight: '400', borderRadius: 5, }}
                        >
                            <Picker.Item label="Chọn rạp chiếu" value="default" />
                            {cinemas.map((cinema, index) => (
                                <Picker.Item key={index} label={cinema} value={cinema} />
                            ))}
                        </Picker>
                    </View>
                    {/* lịch chiếu */}
                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            data={showtime}
                            horizontal
                            keyExtractor={(i) => i.date}
                            renderItem={({ item: i }) => (
                                <View>
                                    <TouchableOpacity onPress={() => choseDate(i.date, i.dayofweek)}
                                        style={ticket.date == i.date ? styles.showdate : styles.unShowdate} >
                                        <Text style={ticket.date == i.date ? { color: 'white' } : { color: 'black' }}>{i.dayofweek}</Text>
                                        <Text style={ticket.date == i.date ? { color: 'white' } : { color: 'black' }}>{i.date}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
                    <FlatList
                        data={time}
                        numColumns={5} // Đặt số cột trên mỗi hàng thành 5
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ marginLeft: 10 }}>
                                <TouchableOpacity onPress={() => setTicketTime(item)}
                                    style={ticket.time == item ? styles.showdate : styles.unShowtime} >
                                    <Text style={ticket.time == item ? { color: 'white' } : { color: 'black' }}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    <TouchableOpacity
                        // style={[styles.button, isFormValid() ? styles.buttonEnabled : styles.buttonDisabled]}
                        // onPress={handleRegister}
                        // disabled={!isFormValid()}
                        style={ styles.buttonEnabled }
                    >
                        <Text style={styles.buttonText}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>

    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 30,
    },
    buttonContainer: {
        marginHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    button: {
        // padding:20,
        backgroundColor: 'white',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'gray',
    },
    activeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e40a5',
        borderBottomWidth: 2,
        borderColor: '#1e40a5',
    },
    cinemaSelectContainer: {
        marginHorizontal: 5,
        marginTop: 10,
    },
    showdate: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#1e40a5',
        borderRadius: 10,
        marginRight: 10,
        fontWeight: '600'
    },
    unShowdate: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        fontWeight: '600'
    },
    unShowtime: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        fontWeight: '600',
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
    },
    buttonEnabled: {
        alignSelf:'center',
        paddingVertical:12,
        backgroundColor: '#FFA500',
        width:345,
        borderRadius:10,
        marginBottom:60
    },

})
