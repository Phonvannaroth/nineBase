import React from "react";
import { Text, View } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import _styles from "../styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { COLORS } from "../modules";
import SettingScreen from "../screens/settings";
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingScreen
  },
  { headerMode: "none" }
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none"
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
const TabNavigation = createBottomTabNavigator(
  {
    HomeTab: HomeStack,
    SettingsTab: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ defaultHandler }) => {
        defaultHandler();
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "HomeTab") {
          iconName = `home`;
        } else if (routeName === "SettingsTab") {
          iconName = `settings`;
        }
        return (
          <View style={_styles.iconTabContainer}>
            <Icon name={iconName} size={focused ? 28 : 26} color={tintColor} />
          </View>
        );
      },
      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        let labelName;
        if (routeName === "HomeTab") {
          labelName = `Home`;
        } else if (routeName === "SettingsTab") {
          labelName = `Settings`;
        }
        return (
          <Text style={focused ? _styles.labelTabActive : _styles.labelTab}>
            {labelName}
          </Text>
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: COLORS.ACTIVE,
      inactiveTintColor: COLORS.PRIMARY,
      style: {
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: "#F0F0F5",
        backgroundColor: "#fff",
        height: 55,
        paddingHorizontal: 50
      },
      indicatorStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);
const MainApp = createSwitchNavigator({
  AppTab: TabNavigation,
  Login: LoginScreen
});
export default createAppContainer(MainApp);
