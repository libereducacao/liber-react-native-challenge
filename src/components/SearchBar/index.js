import React from 'react';
import { View, TextInput, Image, Dimensions } from 'react-native';

//Assets
import Search from '../../assets/search.png'

//Style
import style from './style'
import { func, constants } from '../../mainStyle'

const { clrBlack } = constants
const { size, text } = func;
const { inputContainer } = style;
const { width } = Dimensions.get("window")

export default SearchBar = ({style, filterList}) => (
    <View style={[style, inputContainer]}>
        <TextInput 
            onChangeText={(text) => filterList(text)}
            placeholder="Ache seu carro..." 
            placeholderTextColor={clrBlack} 
            style={[text(16, clrBlack), size(width - 18 - (36 * 2) - (21 * 2), 55), { paddingVertical: 0 }]}
        />
        <Image style={size(18)} source={Search}/>
    </View>
);