import React from "react";
import { Text, FlatList, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PLAYLIST } from "../shared/playlist";

import { Audio } from "expo-av";
//import firebase from 'firebase';
import { FontAwesome } from "@expo/vector-icons";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allSongs: PLAYLIST,
            currentSongData: {},
            playingStatus: "nosound",
            paused: false,
        };
    }

    // componentDidMount() {
    //     firebase
    //         .database()
    //         .ref("trending/")
    //         .on("value", (snapshot) => {
    //             let array = [];

    //             snapshot.forEach((child) => {
    //                 array.push(child.toJSON());
    //             });
    //             this.setState({
    //                 allSongs: array,
    //             });
    //         });
    // }

    render() {
        return (
            <React.Fragment>
                {/* THE PLAYLIST */}
                <Text>Playlist</Text>
                {this.state.allSongs && (
                    <FlatList
                        //contentContainerStyle={styles.containerContent}
                        data={this.state.allSongs}
                        keyExtractor={(itemObj) => itemObj.id.toString()}
                        renderItem={(itemObj) => {
                            const { item } = itemObj;

                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            currentSongData: item,
                                        });
                                    }}
                                >
                                    <Text>{item.songTitle}</Text>
                                    <Text>{item.artist}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />

                    //{/* THE PLAYER - player code goes here */}
                )}
            </React.Fragment>
        );
    }
}
