import React from 'react'
import { View,Text } from 'react-native'

const Search = ({route}) =>{
    const {search} = route.params
    return(
        <View>
            <Text>Search</Text>
        </View>
    )
}
export default Search