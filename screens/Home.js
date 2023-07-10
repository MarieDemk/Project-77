import React, {Component} from 'react';
import { 
    View, 
    Text, 
    SafeAreaView, 
    Platform, 
    StatusBar, 
    Image, 
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';



export default class HomeScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>

                    <View style={styles.upperContainer}>
                        <SafeAreaView style={styles.droidSafeArea}/> 
                            <Image source={require("../assets/main-icon.png")} style = {styles.mainImage}></Image>
                            <View style = {styles.titleBar}>
                                <Text style={styles.titleText}> Stellar App </Text>
                            </View>
                    </View>
                
                    <View style={styles.lowerContainer}>
                        

                    
                        <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("SpaceCrafts")} >
                            <Text style = {styles.routeText}> Space Crafts</Text>      
                            <Image source={require("../assets/space_crafts.png")} style = {styles.iconImage}></Image>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("StarMap")} >
                            <Text style = {styles.routeText}> Star Map</Text>
                            <Image source={require("../assets/star_map.png")} style = {styles.iconImage}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("DailyPic")} >
                            <Text style = {styles.routeText}> Daily Pictures</Text>
                            <Image source={require("../assets/daily_pictures.png")} style = {styles.iconImage}></Image>
                        </TouchableOpacity>
                    </View>
            
                    
                </ImageBackground>

            </View>
       
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperContainer: {
        flex: 0.45
    },
    lowerContainer: {
        flex: 0.55
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 900,
        marginRight: 900,
        marginTop: 50,
        borderRadius: 90,
        backgroundColor: 'white'
    },
    titleBar: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 450,
    },
    titleText: {
        fontSize: 60,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "darkblue",
        marginTop: 50,
        paddingLeft: 100
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
    mainImage: {
        position: "absolute",
        height: 400,
        width: 400,
        resizeMode: "contain",
        right: 1055,
        top: 50
    }
});
