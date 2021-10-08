import React from "react"
import R, { useState } from "react";
import {
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
    SafeAreaView,
    Modal,
    Switch
} from "react-native";
import ToggleSwitch from 'toggle-switch-react-native'
import * as Icon from "react-native-vector-icons";
import { Input,Button} from "galio-framework";

const { width, height } = Dimensions.get("screen");

 
  
export default function Beers() {
    const [isSwitchEnabled, setSwitch] = React.useState(false) 
    r
    state={

        Quantity: "",
         Code:"",
      }
      state = {
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false
      };
      constructor()
      {
          super()
this.state={
    show:false,
}
}

        
        return (
            <SafeAreaView>
                <ScrollView >
                    <View style={styles.headerContainer}>
                        <View style={styles.header}>
                            <View style={{ flex: 2, flexDirection: "row" }}>

                                <View style={styles.logo}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate("Beer")}
                                    >
                                        <Image
                                            style={styles.tinyLogo}
                                            source={require('../assets/images/logo.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    
    <View style={styles.section}>
        <View>
            <Text style={styles.title}>Sort By</Text>
        </View>
        <View style={styles.group}>
            <TouchableOpacity
                style={[
                    styles.button,
                    styles.first,
                    "BEER" ? styles.active : null
                ]}
                onPress={() => this.props.navigation.navigate("Beer")}
            >
                <Text
                    style={[
                        styles.buttonText,
                        "BEER" ? styles.active : null
                    ]}
                >
                    Beer
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,

                ]}
                o onPress={() => this.props.navigation.navigate("Wine")}
            >
                <Text
                    style={[
                        styles.buttonText,
                    ]}
                >
                    Wine
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    styles.last,

                ]}
                onPress={() => this.props.navigation.navigate("Tobacco")}
            >
                <Text
                    style={[
                        styles.buttonText,

                    ]}
                >
                    Tobacco
            </Text>
            </TouchableOpacity>
        </View>
    </View>

    <View style={styles.section}>
        <View>
            <Text style={styles.title}>Type</Text>
        </View>
        <View style={styles.types}>
            <View style={styles.groupsec}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        styles.first,

                    ]}

                >
                    <View >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/images/celtia1.png')}
                        />
                    </View>
                    <Text
                        style={[
                            styles.buttonText,

                        ]}
                    >
                        Celtia
                    </Text>
                    <Text
                        style={[
                            styles.buttonTextSecondaire,

                        ]}
                    >
                        2.5DT
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,

                    ]}

                >
                    <View >
                        <Image
                            style={styles.tinyLogo1}
                            source={require('../assets/images/Becks2.png')}
                        />
                    </View>
                    <Text
                        style={[
                            styles.buttonText,

                        ]}
                    >
                        Becks
                    </Text>
                    <Text
                        style={[
                            styles.buttonTextSecondaire,

                        ]}
                    >
                        2.5DT
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        styles.last,

                    ]}

                >
                    <View >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/images/heineken.png')}
                        />
                    </View>
                    <Text
                        style={[
                            styles.buttonText,

                        ]}
                    >
                        Heineken
                    </Text>
                    <Text
                        style={[
                            styles.buttonTextSecondaire,

                        ]}
                    >
                        2.5DT
                </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.groupsec}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        styles.last,

                    ]}

                >
                    <View >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/images/celtiaj.png')}
                        />
                    </View>
                    <Text
                        style={[
                            styles.buttonText,

                        ]}
                    >
                        Celtia Jetable
                    </Text>
                    <Text
                        style={[
                            styles.buttonTextSecondaire,

                        ]}
                    >
                        2.5DT
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        styles.last,

                    ]}

                >
                    <View >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/images/stella.png')}
                        />
                    </View>
                    <Text
                        style={[
                            styles.buttonText,

                        ]}
                    >
                        Stella Gold
                     </Text>
                    <Text
                        style={[
                            styles.buttonTextSecondaire,

                        ]}
                    >
                        2.5DT
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        styles.last,

                    ]}

                >
                    <View >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/images/stellaB.png')}
                        />
                    </View>
                    <Text
                        style={[
                            styles.buttonText,

                        ]}
                    >
                        Stella Black
                    </Text>
                    <Text
                        style={[
                            styles.buttonTextSecondaire,

                        ]}
                    >
                        1.8DT
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
    <View style={styles.section}>
        <View>
            <Text style={styles.title}>Quantity</Text>
        </View>
        <Input
         style={styles.Input}
         placeholder = "harra ya zabour ?"
        
         placeholderTextColor = "#b7b7b7"
         underlineColorAndroid = "transparent"
         autoCapitalize = "none"
textAlign="left"
keyboardType = 'numeric'

onChangeText={(text) => this.setState({ Quantity: text })}
value={this.state.Quantity}
/>
       
    </View>  
    <View style={styles.section}>
    <View style={styles.price}>
            <Text style={styles.title}>Price</Text>
            <View style={styles.priceResulatsContainer}><Text style={styles.priceResults}>DT</Text></View>
        </View>
        <View style={styles.price}>
            <Text style={styles.title}>Payed</Text>
           
            <ToggleSwitch

isOn={this.state.isOnDefaultToggleSwitch}
onToggle={isOnDefaultToggleSwitch => {
this.setState({ isOnDefaultToggleSwitch });
this.onToggle(isOnDefaultToggleSwitch);
}}
/>
<Switch
                   value={isSwitchEnabled}
                   onValueChange= {(value)=>setSwitch(value)}/>
               

        </View>
    </View>   
    <View style={styles.button}>
    <Button style={styles.buybtn }onPress={()=>{this.setState({show:true})}}>Buy</Button>
    <Modal
    transparent={true}
    visible={this.state.show}>
        <View style={{backgroundColor:"#000000aa" ,flex:1 , alignItems: "center",
justifyContent: "center",}}>
            <View style={styles.model}>
            <Text style={{textAlign: 'center', fontSize: 18,
marginVertical: 14}}>Inset your code</Text>
        <Input
         style={styles.Input}
         placeholder = "code"
        
         placeholderTextColor = "#b7b7b7"
         underlineColorAndroid = "transparent"
         autoCapitalize = "none"
textAlign="left"
keyboardType = 'numeric'

onChangeText={(text) => this.setState({ Code: text })}
value={this.state.Code}
/>
<Button style={styles.buybtn2 } onPress={()=>{this.setState({show:false})}}>Valid</Button>
     
</View>
</View>
    </Modal>
        </View>                         
</ScrollView>
</SafeAreaView>
        
        
        );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    headerContainer: {
        top: 0,
        height: height * 0.15,
        width: width
    },
model:{
   maxHeight:height*0.3,
  
    backgroundColor:"#ffffff",
    margin:80,
    padding:20,
    borderRadius: 14,
    flex:1
},
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.20,
        width: width,
        paddingHorizontal: 14
    },
    logo: {
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
        paddingHorizontal: 16
    },
    price:{
        justifyContent: "space-between",
        flexDirection:"row"
    },
    priceResulatsContainer:{
        
        minWidth: '30%',
        borderBottomColor: "#48FF5A",
        borderBottomWidth: 1
    },
    priceResults:{
        textAlign: 'right',
        fontSize: 18,
        marginVertical: 14
    },
    button:{ 
        width:width,
    },
    buybtn:{
        width:width*0.9,
        backgroundColor:"#48FF5A",
    },
    buybtn2:{
        width:width*0.5,
        backgroundColor:"#48FF5A",
    },
    section: {

        flexDirection: "column",
        marginHorizontal: 14,
        marginBottom: 14,
        paddingBottom: 24,
        borderBottomColor: "#EAEAED",
        borderBottomWidth: 1
    },
    Input:{
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#48FF5A",
        height: 50,
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 18,
        marginVertical: 14
    },
    groupsec: {
        flexDirection: "row",

        justifyContent: "space-between"
    },
    types: {
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#48FF5A",
    },
    group: {

        flexDirection: "row",
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#48FF5A",
        justifyContent: "space-between"

    },
    button: {
        flex: 1,
        padding: 14,
        alignContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "700"
    },
    active: {
        color: "#FFF",
        backgroundColor: "#48FF5A"
    },
    activeText: {
        color: "#FFF"
    },
    first: {
        borderTopLeftRadius: 13,
        borderBottomLeftRadius: 13
    },
    last: {
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13
    },
    option: {
        marginBottom: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },



});
