import React from "react";
import { View ,Text, Button, Root } from "native-base";

class SubComponent extends React.Component{

    render(){
        return(
            <View style={{display : 'flex' , width : '30%',}} >
                <View style = {{     backgroundColor : '#ff9159',
        height : 40,
        display:"flex",
        flexDirection : "row",
        alignItems :'center',
        justifyContent: "center"}}>
                <Text style={{display:"flex", left : 0 }}>Table No .22 - {this.props.id}</Text>
                </View>
                <View style={{backgroundColor: '#c4c2c0'}}>
                <View style={{display:'flex', flexDirection : 'column' , marginTop : 20}}>
        <View style={{display:'flex' , flexDirection : 'row' , justifyContent : 'space-evenly'}}>
          <Text style={{fontSize : 15 }}> Item</Text>
          <Text style={{fontSize : 15 }}>Qty</Text>
          <Text style={{fontSize : 15 }}>Price</Text>
        </View>
        <View style={{display:'flex' , flexDirection : 'row',justifyContent : 'space-evenly' , marginTop : 20}}>
            <Text>Grill</Text>
          <Text>1</Text>
          <Text>$5</Text>
        </View>
      </View>

      <View style={{marginTop : '20%'}}>

            <View style={{display:'flex' ,alignItems : 'center' , justifyContent : 'space-between' , flexDirection : 'row' , paddingRight : 5 , paddingLeft : 5}}>
                <Text>Sub</Text> 
                 <Text>$5</Text>
            </View>
            <View style={{display:'flex' ,alignItems : 'center' , justifyContent : 'space-between' , flexDirection : 'row' , paddingRight : 5 , paddingLeft : 5}}>
                <Text>Discount</Text> 
                 <Text>$0</Text>
            </View>
            <View style={{display:'flex' ,alignItems : 'center' , justifyContent : 'space-between' , flexDirection : 'row' , paddingRight : 5 , paddingLeft : 5}}>
                <Text>Tax</Text> 
                 <Text>$0</Text>
            </View>
        <Button color='primary' style={{display:'flex' ,alignItems : 'center' , justifyContent : 'space-between' , flexDirection : 'row' , paddingRight : 10 , paddingLeft : 10 , color : '#fff'}}><Text>PAY</Text><Text>$5</Text></Button>

      </View>

                </View>
            </View>
        )
    }
}

export default SubComponent