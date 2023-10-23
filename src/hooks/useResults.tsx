import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () : [(searchTerm: string)=> void, never[], string] => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState<string>('');

    console.log('hi here')
    const searchAPI = async (searchTerm : string) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            }
            );
            setResults(response.data.businesses);
            (response.data.businesses.length > 0 ? setErrMsg('') : null);
        }
        catch (err) {
            setErrMsg('Something went wrong!!');
            setResults([]);
        }
    };
    //we will render this screen once with some search arguments when application start
    //thus we will use useEffect library
    //which will allow us to execute a function only one time when application starts

    useEffect(() => {
        searchAPI('pasta');
    }, []);

    return [searchAPI, results, errMsg];
};