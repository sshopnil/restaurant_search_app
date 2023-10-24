import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import { useRoute } from "@react-navigation/native";
import yelp from "../api/yelp";

const ResultsShowScreen = () =>{
    const [result, setResult] = useState(null);
    const parameters  = useRoute().params;
    // console.log(id);

    // console.log(result)

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
            <FlatList
                data={result.photos}
                keyExtractor={(photos)=> photos}
                renderItem={({item})=>{
                    return <Image style={styles.imageStyle} source={{uri:item}}/>
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.listStyle}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    imageStyle:{
        width: 300,
        height: 200,
        marginHorizontal: 5,
        borderRadius: 10
    },
    listStyle:{
        margin: 10
    }
});

export default ResultsShowScreen;