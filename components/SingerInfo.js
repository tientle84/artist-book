import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import { SINGERS } from "../shared/singers";

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
    constructor(props) {
        super(props);
        this.state = {
            singers: SINGERS,
        };
    }

    static navigationOptions = {
        title: "Singer Information",
    };

    render() {
        const singerId = this.props.navigation.getParam("singerId");
        const singer = this.state.singers.filter(
            (singer) => singer.id === singerId
        )[0];
        return <RenderSinger singer={singer} />;
    }
}

export default SingerInfo;
