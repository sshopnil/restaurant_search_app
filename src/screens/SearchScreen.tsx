import React, {useState} from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";




const SearchScreen : React.FC = () => {

    const [term, setTerm] = useState<string>('');

    console.log(term);

    return (
        <View>
            <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)}/>
        </View>
    );
};

export default SearchScreen;