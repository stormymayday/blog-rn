import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from "react-native";

import { Context as BlogContext } from "../context/BlogContext";
import { useContext, useEffect } from "react";

import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    useEffect(() => {
        // getBlogPosts();
        // const listener = navigation.addListener("focus", () => {
        //     getBlogPosts();
        // });
        // return () => {
        //     listener.remove();
        // };
    }, []);

    return (
        <View>
            <Button
                title="Add Post"
                onPress={() => {
                    addBlogPost();
                }}
            />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Show", { id: item.id })
                            }
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log(item.id);
                                        deleteBlogPost(item.id);
                                    }}
                                >
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: "gray",
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});

export default IndexScreen;
