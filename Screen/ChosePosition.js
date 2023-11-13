import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ChosePosition = ({ navigation }) => {
  const route = useRoute();
  const { ticket } = route.params;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
  const cinemaName = ticket.cinema;
  var [fullTicket, setFullTicket]=useState(ticket)

  // Pricing logic
  const calculateSeatPrice = (seat) => {
    const isDouble = isDoubleSeat(seat);
    const basePrice = isDouble ? 160000 : 80000; // Double seat price is twice the single seat price
    return basePrice + (isDouble ? 10000 : 0); // Additional 10,000 VND for double seats
  };

  const handleSeatSelection = (seat) => {
    let updatedSeats;

    if (selectedSeats.includes(seat)) {
      updatedSeats = selectedSeats.filter((selectedSeat) => selectedSeat !== seat);
    } else {
      updatedSeats = [...selectedSeats, seat];
    }

    // Calculate total price using the updatedSeats array
    const newTotalPrice = updatedSeats.reduce((total, seat) => total + calculateSeatPrice(seat), 0);

    // Update total price and selected seats in the state
    setTotalPrice(newTotalPrice);
    setSelectedSeats(updatedSeats);

    // Update the ticket in the navigation state
    var updatedTicket = { ...ticket, totalPrice: newTotalPrice, selectedSeats: updatedSeats };
    setFullTicket(updatedTicket)
    // navigation.setParams({ updateTicket: updatedTicket });
  };

  const isDoubleSeat = (seat) => {
    return seat.charAt(0) === 'P';
  };

  const renderSeatInfo = (row, seatIndex) => {
    const seat = `${row}${seatIndex + 1}`;
    const isSelected = selectedSeats.includes(seat);
    const isDouble = isDoubleSeat(seat);
    const seatStyle = isDouble
      ? isSelected
        ? styles.selectedDoubleSeat
        : styles.doubleSeat
      : isSelected
      ? styles.selectedSeat
      : styles.availableSeat;
    const seatTextStyle = isSelected ? styles.selectedSeatText : styles.availableSeatText;

    return (
      <TouchableOpacity
        key={seat}
        style={seatStyle}
        onPress={() => handleSeatSelection(seat)}
      >
        <Text style={seatTextStyle}>
          {isSelected ? seat : ''}
        </Text>
      </TouchableOpacity>
    );
  };
console.log(fullTicket)
  return (
    <View style={styles.container}>
      <Text style={styles.cinemaName}>{cinemaName}</Text>

      <View style={styles.seatContainer}>
        {Array.from({ length: 16 }, (_, index) => String.fromCharCode(80 - index)).map(
          (row, rowIndex) => (
            <View key={row} style={styles.seatRow}>
              <Text style={styles.rowNumber}>{row}</Text>
              {Array.from({ length: isDoubleSeat(`${row}1`) ? 5 : 10 }, (_, seatIndex) =>
                renderSeatInfo(row, seatIndex)
              )}
            </View>
          )
        )}
      </View>

      <View style={styles.screenContainer}>
        <Text style={styles.screenText}>Màn hình</Text>
        <View style={styles.screenLine} />
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={styles.availableSeatLegend} />
          <Text>Ghế trống</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={styles.selectedSeatLegend} />
          <Text>Ghế đã chọn</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={styles.doubleSeatLegend} />
          <Text>Ghế đôi</Text>
        </View>
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={styles.notAvailableSeatLegend} />
          <Text>Ghế đã bán</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={styles.vipSeatLegend} />
          <Text>Ghế VIP</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text>Số ghế đã chọn: {selectedSeats.length}</Text>
        <Text>
          Tổng tiền: {totalPrice} VND
        </Text>
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => {
          // Xử lý khi nhấn nút Tiếp tục
           navigation.navigate('Success', { fullTicket });
        }}
      >
        <Text style={styles.continueButtonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cinemaName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  seatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  seatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rowNumber: {
    marginRight: 10,
  },
  availableSeat: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 2,
  },
  availableSeatText: {
    color: 'black',
  },
  selectedSeat: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkorange',
    borderRadius: 5,
    margin: 2,
  },
  selectedSeatText: {
    color: 'white',
  },
  doubleSeat: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 2,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'transparent',
  },
  selectedDoubleSeat: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 2,
    // borderWidth: 1,
    // borderColor: 'blue',
    backgroundColor: 'darkorange',
  },
  emptySeat: {
    width: 60,
    height: 30,
    margin: 2,
  },
  screenContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  screenLine: {
    height: 3,
    width: '100%',
    backgroundColor: 'darkorange',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availableSeatLegend: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    marginRight: 5,
  },
  notAvailableSeatLegend: {
    width: 20,
    height: 20,
    backgroundColor: 'lightgray',
    borderRadius: 3,
    marginRight: 5,
  },
  vipSeatLegend: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'darkorange',
    borderRadius: 3,
    marginRight: 5,
  },
  selectedSeatLegend: {
    width: 20,
    height: 20,
    backgroundColor: 'darkorange',
    borderRadius: 3,
    marginRight: 5,
  },
  doubleSeatLegend: {
    width: 40,
    height: 20,
    borderRadius: 3,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'blue',
  },
  infoContainer: {
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: 'darkorange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChosePosition;
