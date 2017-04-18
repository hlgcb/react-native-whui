import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet,Modal,Dimensions } from 'react-native';
import Theme from './../theme/default.js';

var a=null;
var {width, height} = Dimensions.get('window');
 class MaterialDialog extends Component  {
      constructor(props){
       super(props);
       this.state={
         modalVisible: this.props.modalVisible,
         transparent: true,
       }


  }
   static defaultProps = {
    Title: '这里是标题',
    
    disabled:true,
    cancelTouchMethod(){
      this.props.cancelTouchMethod
    },
     button:["确定","取消"],
     ButtonFuc(){

     },
    }
 

   
  
  render() {
      // 判断有没有TopView
    var havaTopView = false; 
    if (this.props.TopView) {
      havaTopView = true;
    } else  {
      havaTopView = false;
    } 

 // 判断有没有BottomView
    var havaBottomView = false;
    if (this.props.BottomView) {
      havaBottomView = true;
    } else  {
      havaBottomView = false;
    }
 // 整体更新view
    var havaView = false;
   if (this.props.View) {
      havaView = true;
    } else  {
      havaView = false;
    }
 
    return (
       <Modal
          animatedType={"fade"}
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {this.close}}
          >
          <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={this.props.cancelTouchMethod} disabled={!this.props.setCanceledOnTouchOutside}//点击灰色区域消失  
                >  
            <View  style = {[styles.aaa, this.props.modalBackgroundStyle]} >
            <View style = {[styles.innerContainer,this.props.innerContainerTransparentStyle]}>
               <View style={[styles.customView,this.props.customView]}>
                      <View>
                        <Text style={[styles.ContentStyle,this.props.textStyle]}>{this.props.Title}</Text>
                        <Text style={[styles.ContentStyle,this.props.ContentStyle]}>{this.props.Content}</Text>
                     </View> 
                
               </View>
                   <View style={styles.bottomContainStyle}>
                  <TouchableOpacity activeOpacity={0.5} style={{flex:1}} onPress={this.props.leftButton} >
                  <View style={styles.buttonLeft}>
                  <Text style={[styles.buttonText,this.props.leftTextStyle]}>
                   {this.props.leftText}
                   </Text>
                   </View>
                  </TouchableOpacity> 
                 <TouchableOpacity activeOpacity={0.5} style={{flex:1}} onPress={this.props.rightButton}>
                  <View style={styles.buttoRight} >
                  <Text style={[styles.buttonText,this.props.RightTextStyle]}>
                  {this.props.RightText}
                   </Text>
                   </View>
                  </TouchableOpacity> 
        
              </View>
               
        
            
         
            </View>
          </View>
            </TouchableOpacity>  
        </Modal>
    );
  }
}


const styles = StyleSheet.create({
   bottomContainStyle: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
   
  },
  buttoRight:{
  flex:1,
  borderTopWidth:1,
  borderColor:'#ccc',
  alignItems:'center',
  justifyContent:'center',
  },
  buttonLeft:{
      flex:1,
      borderRightWidth:1,
      borderColor:'#ccc',
      borderTopWidth:1,
      alignItems:'center',
      justifyContent:'center',
  },
 aaa:{
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    right:0,
    top:0,
    bottom:0,
    left:0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
 
  buttonText: {
    textAlign: 'center',
    fontSize:20,
    color: Theme.color.primaryColor
  },
  innerContainer:{
    backgroundColor: 'white', 
    borderRadius:15,  
    width: Theme.size(540),
    height:Theme.size(252),
  },
  customView:{
          flex:2,
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',          
   },
   
      ContentStyle:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        fontSize:20,
     }
  

});

export default MaterialDialog;