import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    mainContainer: {
        height: 142, 
        marginBottom: 16,
        backgroundColor: "#fff",
        flexDirection: "row",
        borderRadius: 8
    },
    imgContainer: {
        width: "50%", 
        height: "100%", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "flex-end"
    },
    detailsContainer: {
        width: "50%", 
        flexDirection: "column", 
        justifyContent: "center", 
        marginLeft: 14,
    },
    carChBtn: {
        alignSelf: 'flex-start',
        height: 20,
        paddingHorizontal: 10, 
        flexDirection: "row", 
        alignItems: "center", 
        backgroundColor: "#EBEEFB", 
        borderRadius: 50,
        marginTop: 4,
        marginBottom: 10
    }
});