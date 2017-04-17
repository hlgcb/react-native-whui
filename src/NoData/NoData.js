/**
 * 空数据状态
 import { NoData } from 'react-native-whui';
 <NoData
    words:'暂没数据',        //描述文字
    type:'0',        //ico图标（共3中）
     />
 */
import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import Theme from './../theme/default.js';

const {width,height} = Theme.window;

const styles = StyleSheet.create({
    center:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop: height/4
    },
    image_uri:{
        width: Theme.size(340),
        height: Theme.size(408)
    },
    words: {
        lineHeight: Theme.size(42),
        fontSize: Theme.size(24)  
    }
});

export default class NoData extends Component{

    constructor(props) {
      super(props);

      this.state = {
        words: '暂无数据',
        img: [
            require('../images/Nodata/nodata_common_1.png'),
            require('../images/Nodata/nodata_common_2.png'),
            require('../images/Nodata/nodata_common_3.png'),
        ],
        type: 0
      };
    }

    setWords(opts){
        this.setState({
            words: opts.text,//当前暂无可投放微博
            type: opts.type || 0
        })
    }

    render() {

         return (<View style={styles.center}>
                    <Image style={styles.image_uri} source={this.state.img[this.props.type || 0]} />
                    <Text style={styles.words}>{this.props.words}</Text>
                </View>)
    }
};