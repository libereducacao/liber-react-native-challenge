import { StyleSheet } from 'react-native'
import { constants } from '../../mainStyle'

const { mainBackground } = constants

export default style = StyleSheet.create({
    detailsContainer: {
        paddingHorizontal: "9%", 
        backgroundColor: mainBackground,
        paddingBottom: 30
    },
    safeView: {
        height: "100%", 
        backgroundColor: mainBackground
    },  
    headerText: {
        marginBottom: 21, 
        marginTop: 4 
    },
    card: {
        backgroundColor: "#fff", 
        borderRadius: 15, 
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        elevation: 14,
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        shadowColor: "#003CFF",
        shadowOffset: {
            width: 0,
            height: -3,
        },
    },
    cardDetails: {
        marginTop: "60%", 
        width: "100%", 
        backgroundColor: "#fff", 
        paddingHorizontal: 20
    }, 
    iconsContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginVertical: 24
    },  
    icon: {
        backgroundColor: "#f7f8fd", 
        marginBottom: 8, 
        borderRadius: 13, 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center"
    },
    carImage: {
        width: "85%",
        position: "absolute",
        backgroundColor: "#fff", 
        transform: [{ translateY: -73 }]
    }
});