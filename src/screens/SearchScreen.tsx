import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";


const SearchScreen: React.FC = () => {
 
    const [term, setTerm] = useState<string>('');

    const [searchAPI, results, errMsg] = useResults();

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=> searchAPI(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <Text>We have found {results.length}</Text>
        </View>
    );
};

export default SearchScreen;