import SignIn from './Screen/SignIn';
import Welcome from './Screen/Welcome';
import LogIn from './Screen/LogIn';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }} // Ẩn thanh điều hướng
        />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }}/>
        {/* Các màn hình khác nếu cần */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
