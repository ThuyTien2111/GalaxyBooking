import SignIn from './Screen/SignIn';
import Welcome from './Screen/Welcome';
import LogIn from './Screen/LogIn';
import Account from './Screen/Account';
import News from './Screen/News';
import Home from './Screen/Home';
import ChoseShowtime from './Screen/ChoseShowtime';
import ChosePosition from './Screen/ChosePosition';
import Success from './Screen/Success';
import History from './Screen/History';
import Detail from './Screen/Detail';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import Store from './Redux/Store'; //khong co ngoac nhon
import { Provider } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function App() {
  function TabNavigate() {
    //nho return
    const route = useRoute();
    const { u } = route.params;

    return (
      <Tab.Navigator
        activeColor="#2451da"
      >
        <Tab.Screen name="AccountTab" component={Account}
          options={{
            tabBarLabel: 'Tài khoản',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-outline" size={24} color={color} />
            ),
          }}
          initialParams={{ u: route.params.u }} // Pass the u parameter to AccountTab
        />
        <Tab.Screen name="HomeTab" component={Home}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={24} color={color} />
            ),
          }}
          initialParams={{ u: route.params.u }} // Pass the u parameter to AccountTab
        />
        <Tab.Screen name="Điện ảnh" component={News}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name="film" size={24} color={color} />
            ),
          }}
          initialParams={{ u: route.params.u }} // Pass the u parameter to AccountTab
        />
      </Tab.Navigator>
    )
  }
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }} // Ẩn thanh điều hướng
          />
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
          <Stack.Screen name="Account" component={TabNavigate} options={{ headerShown: false }} />
          <Stack.Screen name="ChoseShowtime" component={ChoseShowtime} options={{ title: "Đặt vé" }} />
          <Stack.Screen name="ChosePosition" component={ChosePosition} options={{ title: "Chọn chỗ ngồi" }} />
          <Stack.Screen name="Success" component={Success} options={{ title: "Hoàn thành" }} />
          <Stack.Screen name="History" component={History} options={{ title: "Lịch sử giao dịch" }} />
          <Stack.Screen name="Detail" component={Detail} options={{ title: "Profile" }} />

          {/* Các màn hình khác nếu cần */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
