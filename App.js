// React Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import IndexScreen from "./src/screens/IndexScreen";

// Assigning the createStackNavigator function to the Stack variable
const Stack = createStackNavigator();

export default function App() {
    return (
        // Using the NavigationContainer to wrap all of our navigation
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen
                    name="Index"
                    component={IndexScreen}
                    options={{ title: "Index" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
