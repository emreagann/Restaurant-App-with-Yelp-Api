import { useEffect,useState } from "react";
import yelp from "../api/yelp";
export default ()=>{
    const [results, SetResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const searchAPI = async(searchTerm) =>{
        try {
            const response = await yelp.get('/search',{
                params:{
                 limit:50,
                 term:searchTerm,
                 location:'İstanbul',
                }
            });
            SetResults(response.data.businesses);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Something went wrong');
        }
     

    };
    useEffect(()=>{
        searchAPI('Toast');
    },[]);
    return[searchAPI,results,errorMessage];
} 