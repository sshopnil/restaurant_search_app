import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {Feather} from '@expo/vector-icons';



interface SearchBarProps {
    term: string;
    onTermChange: (sendToParent : string) => void;
}


const SearchBar : React.FC<SearchBarProps> = ({term, onTermChange}) => {


    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginVertical: 20,
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;