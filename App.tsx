import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";



const stack = createStackNavigator();

const App = () =>{


    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="Search Restaurants">
                <stack.Screen name="Search Restaurants" component={SearchScreen}/>
                <stack.Screen name="Product Detail" component={ResultsShowScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default App;