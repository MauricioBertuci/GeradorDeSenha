import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main } from "./Main"
import { Passwords } from './Passwords';
import { Ionicons } from "@expo/vector-icons"

const Tabs = createBottomTabNavigator();

export function Routes(){
    return (
        <Tabs.Navigator>
            <Tabs.Screen 
            name="main"
            component={Main}
            options={{
                tabBarShowLabel: false, //oculta o nome da pagina
                headerShown: false, //Oculta cabeçalho
                tabBarIcon:({focused, size, color}) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={color}></Ionicons>
                    }
                    return(
                        <Ionicons name="home-outline" size={size} color={color}></Ionicons>
                    )
                },
            }}
            >
            </Tabs.Screen>

            <Tabs.Screen
            name='passwords'
            component={Passwords}
            options={{
                tabBarShowLabel: false,
                headerShown:false,
                tabBarIcon:({focused,size,color}) => {
                    if(focused){
                        return <Ionicons name="lock-open" size={size} color={color}></Ionicons>
                    }
                    return(
                        <Ionicons name="lock-closed-outline" size={size} color={color}></Ionicons>
                    )
                }
            }}
            ></Tabs.Screen>

        </Tabs.Navigator>
    )
}