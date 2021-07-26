import React, { Component } from "react";
import Home from "./Home";
import MusicianList from "./MusicianList";
import MusicianInfo from "./MusicianInfo";
import Constants from "expo-constants";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

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

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Musician: { screen: MusicianNavigator },
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
