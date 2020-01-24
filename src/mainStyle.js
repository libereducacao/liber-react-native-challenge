import { StyleSheet } from "react-native"

export const constants = {
    mainBackground: "#F6F7F9",
    clrBlack: "#080D2D",
    clrBlack70: "#52556c",
    clrBlack50: "#838696",
    clrLight30: "#b4b6c0",
    clrBlue: "#475AD1",
    clrDarkBlue: "#25338D",
}

export const func = StyleSheet.create({
    //Por conveniência e velocidade no desenvolvimento, utilizo uma função para definir estilo de texto e tamanhos

    text: (fontSize, color, weight) => { 
        return {
            color,
            fontSize,
            fontFamily: `Roboto-${weight ? weight : "Bold"}`,
        }
    },
    size: (width, height) => {
        return {
            width,
            height: height ? height : width
        }
    }
});