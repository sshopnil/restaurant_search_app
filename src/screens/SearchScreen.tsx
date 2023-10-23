import React, {useState} from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";



const SearchScreen: React.FC = () => {

    const [term, setTerm] = useState<string>('');
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');


    const searchAPI = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            }
            );
            setResults(response.data.businesses);
            (response.data.businesses.length > 0 ? setErrMsg(''): null);
        }
        catch (err) {
            setErrMsg('Something went wrong!!');
            setResults([]);
        }
    };


    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={searchAPI}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <Text>We have found {results.length}</Text>
        </View>
    );
};

export default SearchScreen;