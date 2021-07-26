import React, { Component } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import { ListItem, Avatar } from "react-native-elements";
import { MUSICIANS } from "../shared/musicians";

class MusicianList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicians: MUSICIANS,
        };
    }

    static navigationOptions = {
        title: "Musician",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderMusicianItem = ({ item }) => {
            return (
                // <Card
                //     title={null}
                //     image={{ uri: "http://via.placeholder.com/160x160" }}
                //     containerStyle={{ padding: 0, width: 160 }}
                // >
                //     <Text style={{ marginBottom: 10 }}>hello</Text>
                // </Card>
                // <View
                //     //title={musician.name}
                //     // image={{
                //     //     source: { uri: musician.image },
                //     // }}
                //     style={{ alignItems: "center" }}
                // >
                //     <Avatar
                //         size={150}
                //         rounded
                //         source={{
                //             uri: item.image,
                //         }}
                //         containerStyle={{ margin: 10 }}
                //         onPress={() =>
                //             navigate("MusicianInfo", { musicianId: item.id })
                //         }
                //     />
                //     <Text style={{ margin: 10 }}>{item.name}</Text>
                // </View>
                <ListItem
                    title={item.name}
                    subtitle={item.birthDate}
                    onPress={() =>
                        navigate("MusicianInfo", { musicianId: item.id })
                    }
                    leftAvatar={{
                        source: { uri: item.image },
                        rounded: true,
                        size: "large",
                    }}
                />
            );
        };

        return (
            <FlatList
                centerContent={true}
                //horizontal={true}
                data={this.state.musicians}
                renderItem={renderMusicianItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

export default MusicianList;
