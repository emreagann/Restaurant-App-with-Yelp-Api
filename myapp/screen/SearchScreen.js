import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';
export default function SearchScreen() {
    const [searchAPI,results,errorMessage] = useResults();
    const [term, setTerm] = useState()
    filterResultsByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price;
        });
    }
  return (
    <View>
     <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>{
      searchAPI(term)
     }}/>
    
      {errorMessage ? <Text>{errorMessage}</Text> : <> {results.length == 0 ? <></> :<> <ResultsList title='Cheapest Restaraunts'  results={filterResultsByPrice('₺')}/>
     <ResultsList title='Affordable Restaraunts'  results={filterResultsByPrice('₺₺')}/>
     <ResultsList title='Expensive Restaraunts'  results={filterResultsByPrice('₺₺₺')}/> </>}</> }
     
    </View>
  )
}

const styles = StyleSheet.create({})