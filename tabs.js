import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View, Image,Text, StyleSheet,ScrollView,Dimensions,Button,SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import Contact from './Screens/Contact';
import Home from './Screens/Home';
import Onboard from './Screens/Onboard';
import About from './Screens/About';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions ={{
            showLabel : true,
            style : {
                position: "absolute",
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundcolor: "red",
                borderRadius: 15,
                height:90,
                disply:"flex"

            }
        }}
         >
            <Tab.Screen name ="الرئيسية" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                        source = {require("./assets/d.png")}
                        style={{
                            tintColor: focused ? "blue" : "black"
                        }}
                        />

                    </View>
                )
            }} />
            <Tab.Screen name ="اتصل بنا" component={Contact} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                        source = {require("./assets/e.png")}
                        style={{
                            tintColor: focused ? "blue" : "black"
                        }}
                        />

                    </View>
                )
            }} />
            <Tab.Screen name ="الواجهة" component={Onboard} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                        source = {require("./assets/f.png")}
                        style={{
                            tintColor: focused ? "blue" : "black"
                        }}
                        />

                    </View>
                )
            }} />
            <Tab.Screen name ="من نحن" component={About} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                        source = {require("./assets/f.png")}
                        style={{
                            tintColor: focused ? "blue" : "black"
                        }}
                        />

                    </View>
                )
            }} />

        </Tab.Navigator>
    )
}



export default Tabs;