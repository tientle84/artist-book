import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import { ListItem, Avatar } from "react-native-elements";
import { MUSICIANS } from "../shared/musicians";

class FeaturedMusicianList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicians: MUSICIANS,
        };
    }

    static navigationOptions = {
        title: "Featured Musician",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderMusicianItem = ({ item }) => {
            return (
                <TouchableOpacity
                    //title={musician.name}
                    // image={{
                    //     source: { uri: musician.image },
                    // }}
                    style={{ alignItems: "center" }}
                    onPress={() =>
                        navigate("MusicianInfo", { musicianId: item.id })
                    }
                >
                    <Avatar
                        size={120}
                        rounded
                        source={{
                            uri: item.image,
                        }}
                        containerStyle={{ margin: 10 }}
                        // onPress={() =>
                        //     navigate("MusicianInfo", { musicianId: item.id })
                        // }
                    />
                    <Text style={{ margin: 10 }}>{item.name}</Text>
                </TouchableOpacity>
                // <ListItem
                //     //title={item.name}
                //     //subtitle={item.birthDate}
                //     onPress={() =>
                //         navigate("MusicianInfo", { musicianId: item.id })
                //     }
                //     leftAvatar={{
                //         source: { uri: item.image },
                //         rounded: true,
                //         size: "large",
                //     }}
                // />
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
                        Featured Musicians
                    </Text>
                    <TouchableOpacity onPress={() => navigate("MusicianList")}>
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
                    data={this.state.musicians}
                    renderItem={renderMusicianItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

export default FeaturedMusicianList;
