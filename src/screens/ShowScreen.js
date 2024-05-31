import { View, Text, StyleSheet } from "react-native";

const ShowScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <View>
            <Text>Show Screen</Text>
            <Text>ID: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
