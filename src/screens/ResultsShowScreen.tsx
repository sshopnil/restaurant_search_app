import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet} from 'react-native';
import { useRoute } from "@react-navigation/native";
import yelp from "../api/yelp";

const ResultsShowScreen = () =>{
    const [result, setResult] = useState(null);
    const parameters  = useRoute().params;
    // console.log(id);

    console.log(result)

    const getResult = async (id: string) =>{
        const res =  await yelp.get(`/${id}`);
        setResult(res.data);
    }

    useEffect(()=> {
        getResult(parameters.id);
    },[]);

    if(!result){
        return null;
    }

    return(
        <View>
            <Text>{result.name}</Text>
        </View>
    );
};


export default ResultsShowScreen;