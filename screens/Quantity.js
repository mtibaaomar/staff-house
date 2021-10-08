import React from "react"
import R, { useState } from "react";
import {
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,Modal,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
    SafeAreaView
} from "react-native";
import axios from "axios";
import { CheckBox } from 'react-native-elements'
import ToggleSwitch from 'toggle-switch-react-native'
import * as Icon from "react-native-vector-icons";
import { Input,Switch,Button} from "galio-framework";
const { width, height } = Dimensions.get("screen");

 
  
class Quantity extends React.Component {
    state={
        orders: [],
        Quantity: "",
        price:"",
        type: "",
        code: "",
        payed:false
         
      }
      constructor()
      {
          super()
this.state={
    orders: [],
    show:false,
    type:"",
    price:"",
    code: "",
    payed:false
}
}
componentDidMount(){
    this.getFreelancerList();
    

}
getFreelancerList() {
    axios.interceptors.request.use(
       function (config) {
         config.withCredentials = true;
         return config;
       },
       function (error) {
         return Promise.reject(error);
       }
     );
     
     const url ='https://staffhouse-app.herokuapp.com/api/stock/list'


    const urlp = `${url}`;

    //  const urlg =url;
    axios.get(urlp)
      //   axios.get(urlg)

      //   axios.get(urlg)

      .then(response => {const orders =response.data;console.log(orders);
        
      this.setState({orders})

  })
  .catch(function (error) {
    console.log('Error: ', error);
});
(error) => {
  console.log('error error!', error) }

}
   
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
     
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView style={styles.container}>
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
                                    styles.last,

                                    "Quantity" ? styles.active : null
                                ]}
                                o onPress={() => this.props.navigation.navigate("Quantity")}
                            >
                                <Text
                                    style={[
                                        styles.buttonText,
                                        "Quantity" ? styles.active : null
                                    ]}
                                >
                                    Quantity
                            </Text>
                            </TouchableOpacity>
                         
                        </View>
                    </View>

                    <View style={styles.section}>
                       
                        { this.state.orders.map(orders =>
                         <View style={styles.price} key={orders.id}>
                            <Text style={styles.title}>{orders.article.name}</Text>
                            <View style={styles.priceResulatsContainer}>
                                <Text style={styles.priceResults}>{orders.quantity} 
                                </Text>
                            </View>
                      </View> )}
                        
                      

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
export default Quantity;


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
        borderBottomLeftRadius: 13,
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13
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
