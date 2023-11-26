import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { setUser } from '../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
  var dispatch = useDispatch();
  var { user } = useSelector((state) => state.ticketBooking);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Thông Tin Chi Tiết</Text>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Họ và Tên:</Text>
          <TextInput
            style={styles.detailValueInput}
            value={user.fullName}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Số điện thoại:</Text>
          <TextInput
            style={styles.detailValueInput}
            value={user.phoneNumber}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Email:</Text>
          <TextInput
            style={styles.detailValueInput}
            value={user.email}
          />
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Giới tính:</Text>
          <TextInput
            style={styles.detailValueInput}
            value={user.gender}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailLabel: {
    flex: 1,
    fontWeight: 'bold',
  },
  detailValueInput: {
    flex: 2,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
},
inputLabel: {
    fontSize: 14,
    marginLeft: -80,
    marginRight: 10,
    color: 'black',
},
});

export default Detail;
