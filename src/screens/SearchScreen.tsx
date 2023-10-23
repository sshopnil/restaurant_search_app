import React, {useState} from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";




const SearchScreen : React.FC = () => {

    const [term, setTerm] = useState<string>('');

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={()=> console.log('submitted')}
            />
        </View>
    );
};

export default SearchScreen;