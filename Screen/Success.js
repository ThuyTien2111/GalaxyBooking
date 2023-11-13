import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Success = ({ route, navigation }) => {
  const { fullTicket } = route.params;

  const handleBackToHome = () => {
    // You can navigate to the home screen or any other screen you desire
    navigation.navigate('Account', {ticket:fullTicket});
};

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Đặt vé thành công!</Text>

      <View style={styles.ticketDetails}>
        <Text style={styles.detailLabel}>Vé phim:</Text>
        <Text style={styles.detailValue}>{fullTicket.film}</Text>

        <Text style={styles.detailLabel}>Rạp chiếu:</Text>
        <Text style={styles.detailValue}>{fullTicket.cinema}</Text>

        <Text style={styles.detailLabel}>Ghế đã chọn:</Text>
        <Text style={styles.detailValue}>{fullTicket.selectedSeats.join(', ')}</Text>

        <Text style={styles.detailLabel}>Tổng tiền:</Text>
        <Text style={styles.detailValue}>{fullTicket.totalPrice} VND</Text>

        <Text style={styles.detailLabel}>Vui lòng thanh toán tại quầy</Text>

        {/* Button to go back to the home screen */}
        <TouchableOpacity
          style={styles.backToHomeButton}
          onPress={handleBackToHome}
        >
          <Text style={styles.backToHomeButtonText}>Quay về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ticketDetails: {
    borderWidth: 1,
    borderColor: 'darkorange',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
  },
  backToHomeButton: {
    backgroundColor: 'darkorange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  backToHomeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Success;
