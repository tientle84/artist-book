import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import Profile from "../screens/Auth/Profile";
import Main from "../components/Main";

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login,
        },
        Signup: {
            screen: Signup,
        },
        Profile: {
            screen: Profile,
        },
        Main: {
            screen: Main,
        },
    },
    {
        initialRouteName: "Login",
    }
);

export default createAppContainer(SwitchNavigator);
