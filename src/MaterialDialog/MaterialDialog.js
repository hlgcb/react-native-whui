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
    Content:'这里是内容',
    disabled:true,
    cancelTouchMethod(){
      this.props.cancelTouchMethod
    },
     button:["确定","取消"],
     ButtonFuc(){

     },
    }
 

 putTogether(aa){
  var arrAlbum  = [] ;
        var i =0;
        for (var i in aa) {
           console.log(i);
           if(i==0&&aa.length>0){
         arrAlbum.push(

               <TouchableOpacity  key={i} activeOpacity={0.5} style={{flex:1}} onPress={this.props.ButtonFuc[i]}>
                  <View style={styles.buttonLeft}>
                  <Text style={styles.buttonText}>
                   {aa[i]}
                   </Text>
                   </View>
                  </TouchableOpacity> 
              );  
              }else if(i==aa.length-1&&aa.length>0){
                  arrAlbum.push(

               <TouchableOpacity  key={i} activeOpacity={0.5} style={{flex:1}} onPress={this.props.ButtonFuc[i]}>
                  <View style={styles.buttonRight}>
                  <Text style={styles.buttonText}>
                   {aa[i]}
                   </Text>
                   </View>
                  </TouchableOpacity> 
              );  
              }
               else{
                 arrAlbum.push(

               <TouchableOpacity  key={i} activeOpacity={0.5} style={{flex:1}} onPress={this.props.ButtonFuc[i]}>
                  <View style={styles.buttonLeft}>
                  <Text style={styles.buttonText}>
                   {aa[i]}
                   </Text>
                   </View>
                  </TouchableOpacity> 
              );  
              }      
    
     }
     console.log(arrAlbum);
     return arrAlbum;
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
             {
                havaView?
                   <View>
                     {this.props.View}
                   </View>
               :
               <View style={[styles.customView,this.props.customView]}>
               {
                     havaTopView?
                     <View style={{flex:3}}> 
                      {this.props.TopView}
                      </View> 
                     :
                      <View style={{flex:3}}>
                        <Text style={[styles.ContentStyle,this.props.textStyle]}>{this.props.Title}</Text>
                        <Text style={[styles.ContentStyle,this.props.ContentStyle]}>{this.props.Content}</Text>
                     </View> 
                }
                {
                   havaBottomView?
                      <View>
                      {this.props.BottomView}
                      </View> 

                   :
                   <View style={styles.bottomContainStyle}>
                          

                    {  
                      this.putTogether(this.props.button)
                    }  
             </View>
                }
        
              </View>
               
        
            }  
         
            </View>
          </View>
            </TouchableOpacity>  
        </Modal>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  dialogStyle:{
      width:width-20,
      height:300,
      marginRight:20,
      marginLeft:20,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
  },
   bottomContainStyle: {
    height:50,

    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
   
   
  },
 aaa:{
    alignItems:'center',
    justifyContent:'center',
    width:width,
    flex:1,
    height:1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonLeft: {
    backgroundColor: Theme.color.mainBgColor,
    borderBottomLeftRadius:15,
     flex:1,
       alignItems:'center',
    justifyContent:'center',
     borderWidth: Theme.borderWidth(1),
    borderBottomWidth:0,
    borderColor: '#ccc'
  },
   buttonRight: {
    backgroundColor: Theme.color.mainBgColor,
    borderBottomRightRadius:15,
     flex:1,
       alignItems:'center',
    justifyContent:'center',
     borderWidth: Theme.borderWidth(1),
    borderBottomWidth:0,
    borderColor: '#ccc'
  },
  buttonText: {
    textAlign: 'center',
    fontSize:20,
    color: Theme.color.primaryColor
  },
  innerContainer:{
    backgroundColor: 'white', 
    borderRadius:15,
  },
  customView:{
                width: width-20,
                height:300,
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
  },
   textStyle:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        fontSize:20,
     },
      ContentStyle:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        fontSize:20,
     }
  

});

export default MaterialDialog;