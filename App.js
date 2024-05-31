// React Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TouchableOpacity } from "react-native";

// Context
import { Provider as BlogProvider } from "./src/context/BlogContext";

// Screens
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";

import { Feather, EvilIcons } from "@expo/vector-icons";

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
                        options={({ navigation }) => ({
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Create")
                                    }
                                >
                                    <Feather name="plus" size={30} />
                                </TouchableOpacity>
                            ),
                        })}
                    />

                    <Stack.Screen
                        name="Show"
                        component={ShowScreen}
                        options={({ route, navigation }) => ({
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Edit", {
                                            id: route.params.id,
                                        })
                                    }
                                >
                                    <EvilIcons name="pencil" size={35} />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </BlogProvider>
    );
}
