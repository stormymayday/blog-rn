// React Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Context
import { BlogProvider } from "./src/context/BlogContext";

// Screens
import IndexScreen from "./src/screens/IndexScreen";

// Assigning the createStackNavigator function to the Stack variable
const Stack = createStackNavigator();

export default function App() {
    return (
        <BlogProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Index">
                    <Stack.Screen
                        name="Index"
                        component={IndexScreen}
                        options={{ title: "Index" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </BlogProvider>
    );
}
