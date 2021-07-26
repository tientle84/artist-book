import React, { Component } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import { ListItem, Avatar } from "react-native-elements";
import { SINGERS } from "../shared/singers";

class FeaturedSingerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singers: SINGERS,
        };
    }

    render() {
        //const { navigate } = this.props.navigation;
        const renderSingerItem = ({ item }) => {
            return (
                // <Card
                //     title={null}
                //     image={{ uri: "http://via.placeholder.com/160x160" }}
                //     containerStyle={{ padding: 0, width: 160 }}
                // >
                //     <Text style={{ marginBottom: 10 }}>hello</Text>
                // </Card>
                <View
                    //title={musician.name}
                    // image={{
                    //     source: { uri: musician.image },
                    // }}
                    style={{ alignItems: "center" }}
                >
                    <Avatar
                        size={120}
                        rounded
                        source={{
                            uri: item.image,
                        }}
                        containerStyle={{ margin: 10 }}
                    />
                    <Text style={{ margin: 10 }}>{item.name}</Text>
                </View>
                // <ListItem
                //     //title={item.name}
                //     //subtitle={item.birthDate}
                //     onPress={() =>
                //         navigate("SingerInfo", { musicianId: item.id })
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
                        Featured Singers
                    </Text>
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold", margin: 10 }}
                    >
                        SEE ALL
                    </Text>
                </View>
                <FlatList
                    centerContent={true}
                    horizontal={true}
                    data={this.state.singers}
                    renderItem={renderSingerItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

export default FeaturedSingerList;
