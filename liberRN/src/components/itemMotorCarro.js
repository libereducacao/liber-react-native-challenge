import React from 'react';
import { View } from 'react-native';

import Image from 'react-native-remote-svg';

import { MotorCarro, MotorCarroText } from '../styled-components/carro'

const itemMotorCarro = ({ icone, label, texto }) => {

    return (
        <MotorCarro>
            <Image
                source={icone}
                style={{ width: 36, height: 36, alignSelf: 'center' }}
            />
            <View style={{textAlign: 'center'}}>
                <MotorCarroText>{label}</MotorCarroText>
                <MotorCarroText style={{ color: '#000' }}>{texto}</MotorCarroText>
            </View>
        </MotorCarro>
    )
}

export default itemMotorCarro;
