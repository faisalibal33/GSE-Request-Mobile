import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./redux/store";
import RequestScreen from "./screens/RequestScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./screens/Profile";
import CreateRequest from "./screens/CreateRequest";
import History from "./screens/History";
import {
  ClipboardIcon,
  FolderAddIcon,
  HomeIcon,
  SearchIcon,
  TruckIcon,
} from "react-native-heroicons/solid";
import Search from "./screens/Search";
import { Image, View, StyleSheet, Pressable } from "react-native";
import faisal from "./assets/faisal.jpg";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ButtonTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 65,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <HomeIcon size={34} color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SearchIcon size={34} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Create Request"
        component={CreateRequest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <FolderAddIcon size={70} color={color} />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Recent"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ClipboardIcon size={34} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                overflow: "hidden",
                borderBottomEndRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderWidth: focused ? 2 : 0,
                borderColor: color,
              }}
            >
              <Image
                source={faisal}
                style={{ width: 34, height: 34 }}
                resizeMode="cover"
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Beranda"
              component={ButtonTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestScreen"
              component={RequestScreen}
              // options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </Provider>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
