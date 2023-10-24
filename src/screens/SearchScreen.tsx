import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";



const SearchScreen= () => {
    
    const [term, setTerm] = useState<string>('');

    const [searchAPI, results, errMsg] = useResults();

    // console.log(results);

    const filterResultsByPrice = (price: string) => {
        //price === '$' || '$$' || '$$$'
        return results?.filter(result => {
            return result?.price === price;
        });
    }

    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender" 
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        flex: 1 
    }
});

export default SearchScreen;