import React, { Component } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { ALBUMS } from "../shared/albums";

class FeaturedAlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: ALBUMS,
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderAlbumItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ alignItems: "center" }}
                    onPress={() => navigate("AlbumInfo", { albumId: item.id })}
                >
                    <Avatar
                        size={120}
                        rounded
                        source={{
                            uri: item.image,
                        }}
                        containerStyle={{ margin: 10 }}
                    />
                    <Text style={{ margin: 10 }}>{item.title}</Text>
                </TouchableOpacity>
            );
        };

        return (
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold", margin: 10 }}
                    >
                        Featured Albums
                    </Text>
                    <TouchableOpacity onPress={() => navigate("AlbumList")}>
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: "bold",
                                margin: 10,
                            }}
                        >
                            SEE ALL
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    centerContent={true}
                    horizontal={true}
                    data={this.state.albums}
                    renderItem={renderAlbumItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

export default FeaturedAlbumList;
