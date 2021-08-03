import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { musiciansRef } from "../../firebase/firebaseConfig";

class MusicianList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicians: [],
        };
    }

    static navigationOptions = {
        title: "Musician",
    };

    componentDidMount() {
        let musicianList = [];
        musiciansRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                musicianList.push(doc.data());
            });

            this.setState({ musicians: musicianList });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.state.musicians);
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