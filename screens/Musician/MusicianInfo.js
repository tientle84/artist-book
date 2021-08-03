import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-elements";

function RenderMusician({ musician }) {
    if (musician) {
        return (
            <Card title={musician.name}>
                <Image
                    source={{ uri: musician.image }}
                    style={{
                        height: 135,
                        width: 155,
                    }}
                />
                <Text style={{ margin: 10 }}>{musician.bio}</Text>
            </Card>
        );
    }
    return <View />;
}

class MusicianInfo extends Component {
    static navigationOptions = {
        title: "Musician Information",
    };

    render() {
        const musician = this.props.navigation.getParam("musician");
        return <RenderMusician musician={musician} />;
    }
}

export default MusicianInfo;
