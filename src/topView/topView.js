import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, 
    View,
    Text,
  StyleSheet,
   Modal,
 Dimensions,
   Image,
 TextInput,
  Platform
} from 'react-native';
import Theme from './../theme/default.js';

export default class Search extends Component { 
 
  static defaultProps = {
    Image:require('../images/notice.png'),
    
    text:'微博未通过审核,计划无效',
   
  }; 
    render() {  
        return (  
            <View style={[styles.View,this.props.View]}> 
                <Image source={this.props.Image} style={[styles.Icon,this.props.IconStyle]} />
                <Text style={[styles.text,this.props.Text]}>{this.props.text}</Text>
            </View>  
        )  
    }  
}  
  

  const styles = StyleSheet.create({  
    text:{
      color:'#FFb540'
    },
    View:{
    	  flexDirection: 'row',
    	  alignItems:'center',
    	  backgroundColor:'#303030',
    	  height:Theme.size(64),
    	  width:Theme.size(750),   // 水平排布  
    },
    Icon:{
         height:Theme.size(28),
    	 height:Theme.size(28) ,
    	 resizeMode: 'contain'
    }
});  