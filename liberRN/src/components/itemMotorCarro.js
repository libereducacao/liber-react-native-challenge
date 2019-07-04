import React from 'react';
import { View } from 'react-native';
import Image from 'react-native-remote-svg';

import { MotorCarro, MotorCarroIcone, MotorCarroText } from '../styled-components/carro'

const itemMotorCarro = ({ icone, label, texto }) => {

    return (
        <MotorCarro>
            <MotorCarroIcone>
                <Image
                    source={icone}
                    style={{ width: 36, height: 36, alignSelf: 'center' }}
                />
            </MotorCarroIcone>
            <View style={{ textAlign: 'center', backgroundColor: '#FFF' }}>
                <MotorCarroText>{label}</MotorCarroText>
                <MotorCarroText style={{ fontSize: 14, opacity: 1 }}>{texto}</MotorCarroText>
            </View>
        </MotorCarro>
    )
}

export default itemMotorCarro;
