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
 static propTypes = {
   
  };
  static defaultProps = {
    LeftImage:require('../images/search.png'),
  
    text:'搜索火龙果商品/店铺',
    keyboardType:'web-search'
  }; 
    render() {  
        return (  
            <View style={[styles.container,this.props.containerStyle]}>  
              
                <View style={[styles.searchBox,,this.props.searchBoxStyle]}>  
                    <Image source={this.props.LeftImage} style={[styles.searchIcon,this.props.LeftIconStyle]} onPress={this.props.LeftButton}/>
                    {
                        this.props.modle=='noIntent'?  
                        <TextInput 
                        underlineColorAndroid="transparent" 
                        keyboardType={this.props.keyboardType} 
                        placeholder={this.props.text}
                        returnKeyType ='search'
                        onSubmitEditing ={this.props.submit}
                        onChangeText={this.props.onChangeText}
                        style={[styles.inputText,this.props.inputTextStyle]}
                        />
                        :
                         <Text
                          style={[styles.inputText,this.props.TextStyle]}
                          onPress={this.props.Intent}
                         > 
                        {this.props.text}
                        </Text>
                    }
                  
                </View>  
               
            </View>  
        )  
    }  
}  
  

  const styles = StyleSheet.create({  
    container: {  
        flexDirection: 'row',   // 水平排布  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏  
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏  
        backgroundColor: '#d74047',  
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中  
    },  
    logo: {  
        height: 24,  
        width: 64,  
        resizeMode: 'stretch'  // 设置拉伸模式  
    },  
    searchBox: {  
        height: 30,  
        flexDirection: 'row',  
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充  
        borderRadius: 5,  // 设置圆角边  
        backgroundColor: 'white',  
        alignItems: 'center',  
        marginLeft: 8,  
        marginRight: 12  
    },  
    scanIcon: {  
        height: 26.7,  
        width: 26.7,  
        resizeMode: 'stretch'  
    },  
    searchIcon: {  
        marginLeft: 6,  
        marginRight: 6,  
        width: 16.7,  
        height: 16.7,  
        resizeMode: 'stretch'  
    },  
    voiceIcon: {  
        marginLeft: 5,  
        marginRight: 8,  
        width: 15,  
        height: 20,  
        resizeMode: 'stretch'  
    },  
    inputText: { 
        padding: 0,
        flex: 1,  
        backgroundColor: 'transparent',  
        fontSize: 14  
    }  
});  