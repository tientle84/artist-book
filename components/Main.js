import React, { Component } from "react";
import { Home } from "../screens/Home";
import { MusicianList, MusicianInfo } from "../screens/Musician";
import { SingerList, SingerInfo } from "../screens/Singer";
import { AlbumList, AlbumInfo } from "../screens/Album";

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

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Musician: { screen: MusicianNavigator },
        Singer: { screen: SingerNavigator },
        Album: { screen: AlbumNavigator },
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
