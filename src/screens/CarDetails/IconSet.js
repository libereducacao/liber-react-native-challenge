import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import style from './style'

import { constants, func } from '../../mainStyle'

const { icon } = style;
const { clrBlack50, clrBlack } = constants;
const { text, size } = func;

const { width } = Dimensions.get("window")

export default IconSet = ({image, label, data}) => {
    const containerSize = (91 / width) * 100; //Encontrar o tamanho do container em pixels
    const boxSize = (20 / containerSize) * 100 //Encontrar 20% do tamanho do container

    return (
        <View>
            <View style={[size(boxSize), icon]}>
                <Image source={image} resizeMode="contain" style={{width: "55%"}}/>
            </View>
            <Text style={text(12, clrBlack50)}>{label}</Text>
            <Text style={text(14, clrBlack)}>{data}</Text>
        </View>
    );
}