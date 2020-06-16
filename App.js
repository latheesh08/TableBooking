/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Orientation from 'react-native-orientation-locker';
import { Container, Header ,Icon , Accordion, Button, Item} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SubComponent from './SubBill'


const dataArray = [
  { title: "Billing", content: "Lorem ipsum dolor sit amet" }
];

class App extends React.Component{
 state = {
  temp : 'works',
  num_odr : [1],
  selected_food : [{name : 'Grill' ,  qty:1 , price : '$5'}],
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected_food : [{name : 'Grill' ,  qty:1 , price : '5$'}],
  //     temp : 'works'
  //   };
  // }

  componentWillMount() {

    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      //do stuff
    } else {
      //do other stuff
    }
  }
  componentDidMount() {
 
    Orientation.getAutoRotateState((rotationLock) => this.setState({rotationLock}));
    //this allows to check if the system autolock is enabled or not.
    Orientation.lockToLandscape();

 
    Orientation.addOrientationListener(this._onOrientationDidChange);
  }
 
  componentWillUnmount(){
    Orientation.removeOrientationListener(this._onOrientationDidChange);
  }
  _onOrientationDidChange = (orientation) => {
    if (orientation == 'LANDSCAPE-LEFT') {
      //do something with landscape left layout
    } else {
      //do something with portrait layout
    }
  };
// addingContent(item){

//     return(
//       for( let i =0 ; i< Object.keys(item).length ; i++){
//       <>
//       <Text>{item.name}</Text>
//     <Text>{item.qty}</Text>
//     <Text>{item.price}</Text>
//       </>
//     }
//     )

// }

  AddingNewItem(){
    let temp = this.state.num_odr
    temp.push(temp.length + 1)
this.setState({
  num_odr : temp
})
this.state.selected_food[0].qty = temp.length
this.state.selected_food[0].price = '$'+( 5 * temp.length).toString()
console.log(this.state.num_odr)
  }
  _renderContent(item) {
    return (
      <View style={{display:'flex', flexDirection : 'column' , marginTop : 20}}>
        <View style={{display:'flex' , flexDirection : 'row' , justifyContent : 'space-evenly'}}>
          <Text style={{fontSize : 15 }}> Item</Text>
          <Text style={{fontSize : 15 }}>Qty</Text>
          <Text style={{fontSize : 15 }}>Price</Text>
        </View>
        <View style={{display:'flex' , flexDirection : 'row',justifyContent : 'space-evenly' , marginTop : 20}}>
        {item.map((item,id ) => {
          return(
            <>
            <Text>{item.name}</Text>
          <Text>{item.qty}</Text>
          <Text>{item.price}</Text>
            </>
          )
        } ) }
        </View>
      </View>
      // <Text
      //   style={{
      //     backgroundColor: "#e3f1f1",
      //     padding: 10,
      //     fontStyle: "italic",
      //   }}
      // >
      //   {item.content}
      // </Text>
    )
      }

  render(){
      return(
        <Container>
        {/* <Header /> */}
        <Grid>
          <Col style={styles.left_col}>
            <View style={styles.add_header}>
            <Text style={{display:"flex", left : 0 }}>Table No .22</Text>
            <Icon style={styles.icon} name='add-circle' onPress={() => this.AddingNewItem()} />
            </View>
            <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#ff9159" }}
            // animation={true}
            expanded={0}
            // renderHeader={this._renderHeader}
            renderContent={ () => this._renderContent(this.state.selected_food)}
          />

          <View style={styles.final_wrapper}>
          <View style={{display:'flex' ,alignItems : 'center' , justifyContent : 'space-between' , flexDirection : 'row' , paddingRight : 15 , paddingLeft : 15}}>
                <Text>Sub</Text> 
      <Text>{this.state.selected_food[0].price}</Text>
            </View>
            <View style={{display:'flex' ,alignItems : 'center' , justifyContent : 'space-between' , flexDirection : 'row' , paddingRight : 15 , paddingLeft : 15}}>
                <Text>Discount</Text> 
                 <Text>$0</Text>
            </View>
            <View style={{display:'flex' ,alignItems : 'center' , justifyContent : 'space-between' , flexDirection : 'row' , paddingRight : 15 , paddingLeft : 15}}>
                <Text>Tax</Text> 
                 <Text>$0</Text>
            </View>
      <Button color='primary' style={{display:'flex' ,alignItems : 'center' , justifyContent : 'space-between' , flexDirection : 'row' , paddingRight : 10 , paddingLeft : 10}}><Text style={{color : '#fff'}} >PAY</Text><Text  style={{color : '#fff'}}>{this.state.selected_food[0].price}</Text></Button>
          </View>
          </Col>
          <Col style={styles.right_col}>
            {/* <ScrollView  horizontal={true}> */}
            {
              this.state.num_odr.map((it , id) => <SubComponent id ={it} /> )
            }
            {/* </ScrollView> */}
            {/* <ScrollView styles={{display:'flex' , flexDirection : 'row'}}> */}
            {/* {
              this.state.num_odr.map((it , id) => <SubComponent id ={it} /> )
            } */}
            {/* </ScrollView> */}

          </Col>
        </Grid>
      </Container>
      )
  }
}


const styles = StyleSheet.create({
  left_col :{
    backgroundColor: '#c4c2c0',
    width : '30%'
  },
  right_col:{
    backgroundColor: '#a3a09d',
    display : 'flex',
    padding : 5,
    flexDirection : 'row'
    
  },
  final_wrapper:{
    backgroundColor : "#ffffff",
    // display : "flex",
    // flexDirection : 'column',

  },
  add_header:{
backgroundColor : '#ff9159',
height : 40,
display:"flex",
flexDirection : "row",
alignItems :'center',
justifyContent: "space-between"
  },
  icon:{
    display:"flex",
    alignSelf: 'center',
    paddingRight : 10
  },

});

export default App;
