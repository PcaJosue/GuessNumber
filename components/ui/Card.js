import { Dimensions, StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"

function Card({children}){
    return  <View style={styles.card}>{children}</View>

}
export default Card

const deviceWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card:{
        marginTop: deviceWith < 380 ? 80 : 100,
        marginHorizontal:24,
        padding:16,
        backgroundColor: Colors.primary800,
        borderRadius:8,
        elevation: 4, //android
        shadowColor: 'black', //ios,
        shadowOffset: {width: 0  , height:2}, //ios
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent:'center',
        alignItems:'center'
    }
})