import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { FlatList, Image } from "react-native";
import { Card } from "react-native-elements";
import { ListItem, Avatar } from "react-native-elements";
import { MUSICIANS } from "../shared/musicians";
import FeaturedMusicianList from "./FeaturedMusicianList";
import FeaturedSingerList from "./FeaturedSingerList";

class Home extends Component {
    static navigationOptions = {
        title: "Home",
    };

    render() {
        return (
            <ScrollView>
                <FeaturedMusicianList navigation={this.props.navigation} />
                <FeaturedSingerList navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default Home;
