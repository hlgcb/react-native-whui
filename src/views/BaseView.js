import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

// 统一封装的东西，比如无网络，有本地消息、通知，数据埋点，登录状态

class BaseView extends Component {
	componentWillMount(){
		// console.log("BaseView componentWillMount");
	}
}

export default BaseView;