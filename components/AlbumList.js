import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { ALBUMS } from "../shared/albums";

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: ALBUMS,
        };
    }

    static navigationOptions = {
        title: "Album",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderAlbumItem = ({ item }) => {
            return (
                <ListItem
                    title={item.title}
                    subtitle={item.by}
                    onPress={() => navigate("AlbumInfo", { albumId: item.id })}
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
                data={this.state.albums}
                renderItem={renderAlbumItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

export default AlbumList;
