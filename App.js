import SignIn from './Screen/SignIn';
import Welcome from './Screen/Welcome';
import LogIn from './Screen/LogIn';
import Account from './Screen/Account';
import News from './Screen/News';
import Home from './Screen/Home';
import ChoseShowtime from './Screen/ChoseShowtime';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


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

          {/* Các màn hình khác nếu cần */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
