import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
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
                data={this.state.musicians}
                renderItem={renderMusicianItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

export default MusicianList;
