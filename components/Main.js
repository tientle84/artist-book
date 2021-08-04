import React, { Component } from "react";
import { Login, Signup } from "../screens/Auth";
import { Home } from "../screens/Home";
import { MusicianList, MusicianInfo } from "../screens/Musician";
import { SingerList, SingerInfo } from "../screens/Singer";
import { AlbumList, AlbumInfo } from "../screens/Album";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import { View, Platform, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Firebase from "../firebase/firebaseConfig";
import { connect } from "react-redux";

// handleSignout = () => {
//     Firebase.auth().signOut();
//     this.props.navigation.navigate("Login");
// };

const AuthNavigator = createStackNavigator(
    {
        Login: { screen: Login },
        Signup: { screen: Signup },
    },
    {
        initialRouteName: "Login",
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
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#5637DD",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
            headerRight: (
                <Icon
                    name="home"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => {
                        //console.log(this.props.user);
                        Firebase.auth().signOut();
                        navigation.navigate("Login");
                        //console.log(this.props.user);
                    }}
                />
            ),
            //header: <Text>this.props.user.email</Text>,
        }),
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
        Login: { screen: AuthNavigator },
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

const styles = StyleSheet.create({
    stackIcon: {
        marginRight: 10,
        color: "#fff",
        fontSize: 24,
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Main);
