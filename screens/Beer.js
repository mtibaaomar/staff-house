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
import axios from "axios";
import { CheckBox } from 'react-native-elements'
import ToggleSwitch from 'toggle-switch-react-native'
import * as Icon from "react-native-vector-icons";
import { Input,Button} from "galio-framework";
import { color } from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");
function test(){
const [isSwitchEnabled, setSwitch] = React.useState(false)
return( 
<Switch
value={isSwitchEnabled}
onValueChange= {(value)=>setSwitch(value)}/>
);}
class Beer extends React.Component {

    state={

        Quantity: "",
        price:"",
        type: "",
        code:"",
        error:""
         
      }
      constructor()
      {
          super()
this.state={
    show:false,
    type:"",
    price:"",
    payed:false,
    Quantity: "",
    code:"",
    error:""
}
}



login = () => {
    axios.interceptors.request.use(
      function (config) {
        config.withCredentials = true;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    const code = this.state.code;
    const type = this.state.type;
    const Quantity = this.state.Quantity;
    const payed = this.state.payed;
    const url =
      "https://staffhouse-app.herokuapp.com/api/consomation"
    
    const urlp = `${url}`;

    //  const urlg =url;
    axios
      .post(urlp ,{
        code: code,
        article:{id: type},
        quantity:Quantity,
        paid:payed,
      })
      //   axios.get(urlg)

     .then((response) => {
         if(response.data==="success"){
            this.setState({show:false})
         }
        else if (response.data==="error"){
            this.setState({error:"Wrong password or Invalid stock"})
        }
        }
         );
      
      
    
  };
    renderHeader() {
        
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
                </ScrollView>
            </SafeAreaView>
        );
    }

    renderStructure() {
        const { type } = this.props;
        const activeType = key => type === key;
      
        return (
            
            <SafeAreaView style={styles.container}>

                <ScrollView style={styles.container}>
                    <View style={styles.section1}>
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
                                 onPress={() => this.props.navigation.navigate("Wine")}
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
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    styles.last,

                                ]}
                                onPress={() => this.props.navigation.navigate("Drinks")}
                            >
                                <Text
                                    style={[
                                        styles.buttonText,

                                    ]}
                                >
                                    Drinks
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.group}>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    styles.first,
                                   
                                ]}
                                onPress={() => this.props.navigation.navigate("Credit")}
                            >
                                <Text
                                    style={[
                                        styles.buttonText,
                                      
                                    ]}
                                >
                                    Credit
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                   
                                ]}
                                o onPress={() => this.props.navigation.navigate("Quantity")}
                            >
                                <Text
                                    style={[
                                        styles.buttonText,
                                     
                                    ]}
                                >
                                    Quantity
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
                                        this.state.type === "615e3614d538ca4e4f271659" ? styles.active : true
                                    ]}
                                    onPress={()=>{ this.setState({type:"615e3614d538ca4e4f271659"}),console.log(this.state.type)}}
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
                                       2.6DT
                                </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        this.state.type === "615e3625d538ca4e4f27165a" ? styles.active : true
                                    ]}
                                    onPress={()=>{ this.setState({type:"615e3625d538ca4e4f27165a"}),console.log(this.state.type)}}
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
                                     3DT
                                </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        styles.lastfirst,
                                        this.state.type === "615e36aed538ca4e4f27165b" ? styles.active : true

                                    ]}
                                    onPress={()=>{ this.setState({type:"615e36aed538ca4e4f27165b"}),console.log(this.state.type)}}
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
                                       2DT
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.groupsec}>
                            <TouchableOpacity
                                    style={[
                                        styles.button,
                                        styles.lastlast,
                                        this.state.type === "615e36b7d538ca4e4f27165c" ? styles.active : true

                                    ]}
                                    onPress={()=>{ this.setState({type:"615e36b7d538ca4e4f27165c"}),console.log(this.state.type)}}
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
                                        2DT
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
                            <Text style={styles.title}>Paid</Text>
                            <CheckBox
  
  checked={this.state.checked}
  onPress={()=>{ 
      if (this.state.payed===true){this.setState({ checked: false }), this.setState({ payed: false })
    }
    else if (this.state.payed===false){this.setState({ checked: true }), this.setState({ payed: true })
    }
  }}
/>
          </View>
                    </View>   
                    <View style={styles.button}>
                    <Button style={styles.buybtn }onPress={()=>{
                           if (this.state.type==="615e3614d538ca4e4f271659"){this.setState({ price: this.state.Quantity*2.6 })
                        }
                        else if (this.state.type==="615e3625d538ca4e4f27165a"){this.setState({ price: this.state.Quantity*3})
                    }
                    else if (this.state.type==="615e36aed538ca4e4f27165b"){this.setState({ price: this.state.Quantity*2})
                }
                else if (this.state.type==="615e36b7d538ca4e4f27165c"){this.setState({ price: this.state.Quantity*2})
            }
                        
                        this.setState({show:true})}}>Buy</Button>
                    <Modal
                    transparent={true}
                    visible={this.state.show}>
                        <View style={{backgroundColor:"#000000aa" ,flex:1 , alignItems: "center",
        justifyContent: "center",}}>
                            <View style={styles.model}>
                            <View style={styles.price}>
                            <Text style={styles.title}>Price</Text>
                            <View style={styles.priceResulatsContainer}><Text style={styles.priceResults}>{this.state.price} DT</Text></View>
                        </View>
                            <Text style={{textAlign: 'center', fontSize: 18,
        marginVertical: 14 , marginTop:30,}}>Inset your password</Text>
                        <Input
                         style={styles.Input}
                         placeholder = "code"
                        
                         placeholderTextColor = "#b7b7b7"
                         underlineColorAndroid = "transparent"
                         autoCapitalize = "none"
         textAlign="left"
         keyboardType = 'numeric'
             
              onChangeText={(text) => this.setState({ code: text })}
              value={this.state.code}
            />
               <Text style={styles.titleerror}>{this.state.error} </Text>

              <Button style={styles.buybtn2 } onPress={()=>{this.login()}}>Valid</Button>    
                   <Button style={styles.buybtn3 } onPress={()=>{
                this.setState({show:false})}}>Cancel</Button>
            </View>
   </View>
                    </Modal>
                        </View>                         
                </ScrollView>
            </SafeAreaView>
        )
    }
    render() {
        
        return (
            
            <SafeAreaView style={styles.container}>
                {this.renderHeader()}
                <ScrollView style={styles.container}>
                    {this.renderStructure()}
                   
                </ScrollView>
            </SafeAreaView>

        )
    }
}
export default Beer;


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
    buybtn3:{
        marginTop:30,
        alignItems: "center",
        justifyContent: "center",
        width:width*0.8,
        backgroundColor:"#808080",
        alignItems: "center",
        justifyContent: "center",
    },
model:{
   maxHeight:height*0.5,
   minWidth:width*0.9,
  
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
        fontSize: 30,
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
        marginTop:30,
        alignItems: "center",
        justifyContent: "center",
        width:width*0.8,
        backgroundColor:"#48FF5A",
        alignItems: "center",
        justifyContent: "center",
    },
    buybtn3:{
        marginTop:30,
        alignItems: "center",
        justifyContent: "center",
        width:width*0.8,
        alignItems: "center",
        justifyContent: "center",
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
    titleerror: {
        fontSize: 12,
        marginVertical: 5,
        color:	"#FF0000"
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
    section1: {

        flexDirection: "column",
        marginHorizontal: 14,
        marginBottom: 14,
        paddingBottom: 24,
      
    },
    first: {
        borderTopLeftRadius: 13,
        
    },
    last: {
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13
    },
    lastfirst: {
        borderTopRightRadius: 13,
      
    },
    lastlast: {
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13
    },
    option: {
        marginBottom: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    

});
