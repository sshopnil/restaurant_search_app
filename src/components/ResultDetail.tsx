import React from "react";
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

interface propTypes{
    results: Array<Object>
};


const ResultDetail : React.FC<propTypes> = ({results}) =>{
    // console.log(results);
    return(
        <View style={styles.viewStyle}>  
            <Image style={styles.imageStyle} source={{uri: results.image_url}}/>
            <Text style={styles.nameStyle}>{results?.name}</Text>
            <Text>{results?.rating} Stars, {results.review_count} Reviews</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    viewStyle:{
        marginLeft: 15
    },
    imageStyle:{
        width: 250,
        borderRadius: 5,
        height: 120,
        marginBottom: 5
    },
    nameStyle:{
        fontWeight: 'bold'
    }
});

export default ResultDetail;