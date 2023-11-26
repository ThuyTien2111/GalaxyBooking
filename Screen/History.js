import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setHistory, setTicketAdded } from '../Redux/Action';

const History = ({ navigation }) => {
  var dispatch = useDispatch();
  var { ticketAdded, history } = useSelector((state) => state.ticketBooking);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Lịch Sử Đặt Vé</Text>
      {history.map((ticket) => (
        <View key={ticket.id} style={styles.ticketItem}>
          <Text style={styles.movieTitle}>{ticket.film}</Text>
          <Text style={styles.details}>
            <Text style={styles.detailsLabel}>Ngày:</Text>
            {' '}{ticket.dayofweek}, {ticket.date}{' '}
            <Text style={styles.detailsLabel}>Giờ:</Text> {ticket.time}{' '}
            <Text style={styles.detailsLabel}>Địa điểm:</Text> {ticket.cinema}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.detailsLabel}>Ghế:</Text> {ticket.selectedSeats.join(', ')}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.detailsLabel}>Tổng Tiền:</Text> {ticket.totalPrice} đ
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  ticketItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
  },
  detailsLabel: {
    fontWeight: 'bold',
  },
});

export default History;
