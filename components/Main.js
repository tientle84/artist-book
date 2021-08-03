import React, { Component } from "react";
import Home from "./Home";
import MusicianList from "./MusicianList";
import MusicianInfo from "./MusicianInfo";
import SingerList from "./SingerList";
import SingerInfo from "./SingerInfo";
import AlbumList from "./Album/AlbumList";
import AlbumInfo from "./Album/AlbumInfo";
import AudioPlayer from "./Player/AudioPlayer";
import MusicPlayer from "./MusicPlayer";
import Constants from "expo-constants";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const MusicianNavigator = createStackNavigator(
    {
        MusicianList: { screen: MusicianList },
        MusicianInfo: { screen: MusicianInfo },
    },
    {
        initialRouteName: "MusicianList",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const SingerNavigator = createStackNavigator(
    {
        SingerList: { screen: SingerList },
        SingerInfo: { screen: SingerInfo },
    },
    {
        initialRouteName: "SingerList",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const AlbumNavigator = createStackNavigator(
    {
        AlbumList: { screen: AlbumList },
        AlbumInfo: { screen: AlbumInfo },
    },
    {
        initialRouteName: "AlbumList",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const AudioPlayerNavigator = createStackNavigator(
    {
        AudioPlayer: { screen: AudioPlayer },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const MusicPlayerNavigator = createStackNavigator(
    {
        MusicPlayer: { screen: MusicPlayer },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Musician: { screen: MusicianNavigator },
        Singer: { screen: SingerNavigator },
        Album: { screen: AlbumNavigator },
        Audio: { screen: AudioPlayerNavigator },
        Music: { screen: MusicPlayerNavigator },
    },
    {
        drawerBackgroundColor: "#CEC8FF",
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop:
                        Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}

export default Main;
