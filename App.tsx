import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";




const stack = createStackNavigator();

const App = () =>{


    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Business Search" component={SearchScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default App;