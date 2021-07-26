import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import { ALBUMS } from "../shared/albums";

function RenderAlbum({ album }) {
    if (album) {
        return (
            <Card title={album.title}>
                <Image
                    source={{ uri: album.image }}
                    style={{
                        height: 135,
                        width: 155,
                    }}
                />
                <Text style={{ margin: 10 }}>{album.by}</Text>
                <Text style={{ margin: 10 }}>{album.date}</Text>
            </Card>
        );
    }
    return <View />;
}

class AlbumInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: ALBUMS,
        };
    }

    static navigationOptions = {
        title: "Album Information",
    };

    render() {
        const albumId = this.props.navigation.getParam("albumId");
        const album = this.state.albums.filter(
            (album) => album.id === albumId
        )[0];
        return <RenderAlbum album={album} />;
    }
}

export default AlbumInfo;
