import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-elements";

function RenderSinger({ singer }) {
    if (singer) {
        return (
            <Card title={singer.name}>
                <Image
                    source={{ uri: singer.image }}
                    style={{
                        height: 135,
                        width: 155,
                    }}
                />
                <Text style={{ margin: 10 }}>{singer.bio}</Text>
            </Card>
        );
    }
    return <View />;
}

class SingerInfo extends Component {
    static navigationOptions = {
        title: "Singer Information",
    };

    render() {
        const singer = this.props.navigation.getParam("singer");
        return <RenderSinger singer={singer} />;
    }
}

export default SingerInfo;
