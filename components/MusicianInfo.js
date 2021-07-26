import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import { MUSICIANS } from "../shared/musicians";

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
    constructor(props) {
        super(props);
        this.state = {
            musicians: MUSICIANS,
        };
    }

    static navigationOptions = {
        title: "Musician Information",
    };

    render() {
        const musicianId = this.props.navigation.getParam("musicianId");
        const musician = this.state.musicians.filter(
            (musician) => musician.id === musicianId
        )[0];
        return <RenderMusician musician={musician} />;
    }
}

export default MusicianInfo;
