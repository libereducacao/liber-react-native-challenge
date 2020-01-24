import React, { Fragment } from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';

import Arrow from '../../assets/arrow-back.png'

import style from './style'
import { func } from '../../mainStyle'

const { headerContainer } = style
const { size } = func;

export default Header = ({onPress}) => (
    <View style={headerContainer}>
        <TouchableNativeFeedback onPress={onPress}>
            <Image style={[size(14), { padding: 4 }]} source={Arrow}/>
        </TouchableNativeFeedback>
    </View>
);