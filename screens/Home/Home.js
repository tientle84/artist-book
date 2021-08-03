import React, { Component } from "react";
import { ScrollView } from "react-native";
import FeaturedMusicianList from "./FeaturedMusicianList";
import FeaturedSingerList from "./FeaturedSingerList";
import FeaturedAlbumList from "./FeaturedAlbumList";

class Home extends Component {
    static navigationOptions = {
        title: "Home",
    };

    render() {
        return (
            <ScrollView>
                <FeaturedMusicianList navigation={this.props.navigation} />
                <FeaturedSingerList navigation={this.props.navigation} />
                <FeaturedAlbumList navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default Home;
