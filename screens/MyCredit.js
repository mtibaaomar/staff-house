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

 
  
class Credit extends React.Component {
    state={
        orders: [],
        Quantity: "",
        price:"",
        type: "",
        code: "",
        payed:false,
        error:""
         
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
    payed:false,
    error:""
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
     
     const url ='https://staffhouse-app.herokuapp.com/api/person'


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
;
    const code = this.state.code;
    
    const url =
      "https://staffhouse-app.herokuapp.com/api/consomation/paycredit/"+code
    
    const urlp = `${url}`;

    //  const urlg =url;
    axios
      .post(urlp ,{
        code: code,
      })
      //   axios.get(urlg)
      .then((response) => {
        if(response.data==="success"){
            this.props.navigation.navigate('Beer')
        }
       else if (response.data==="error"){
           this.setState({error:"Wrong password"})
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
     
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView style={styles.container}>
                <View style={styles.section}>
                        <View style={styles.group}>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    styles.first,
                                    "Credit" ? styles.active : null
                                ]}
                                onPress={() => this.props.navigation.navigate("Credit")}
                            >
                                <Text
                                    style={[
                                        styles.buttonText,
                                        "Credit" ? styles.active : null
                                    ]}
                                >
                                    Credit
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    styles.last,

                                   
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
                            <Text style={styles.title}>Pay your credit</Text>
                        </View>
                        <Input
                         style={styles.Input}
                         placeholder = "Insert your password"
                        
                         placeholderTextColor = "#b7b7b7"
                         underlineColorAndroid = "transparent"
                         autoCapitalize = "none"
         textAlign="left"
         keyboardType = 'numeric'
             
              onChangeText={(text) => this.setState({ code: text })}
              value={this.state.code}
              
            />
                    <Text style={styles.titleerror}> {this.state.error} </Text>     
                     
                      
                    <View style={styles.button}>
                    <Button style={styles.buybtn } onPress={()=>{this.login()}}>pay</Button>
                    
                        </View>
                          </View>
                        <View style={styles.section}>
                        <View>
                    { this.state.orders.map(orders =>
                         <View style={styles.price} key={orders.id}>
                            <Text style={styles.title}>{orders.firstName+' '+orders.lastName }</Text>
                            <View style={styles.priceResulatsContainer}>
                                <Text style={styles.priceResults}>{orders.credit} 
                                </Text>
                            </View>
                      </View> )}   
                      </View>
                      </View >
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
export default Credit;


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

    titleerror: {
        fontSize: 12,
        marginVertical: 5,
        color:	"#FF0000"
    },

});
