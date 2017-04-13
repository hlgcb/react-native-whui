/**
 * 按钮
 import { AdvertisePlanCard } from 'react-native-whui';
 <AdvertisePlanCard
 	此组件暂时为自用，如有类似需求请联系Dby
	
	 />
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Alert } from 'react-native';
import Theme from './../theme/default.js';
import Button from './../buttons/Button.js';
import MaterialDialog from './../MaterialDialog/MaterialDialog.js';

class AdvertisePlanCard extends Component {

	constructor(props) {
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
		this.btnStatus = this.btnStatus.bind(this);
	}

	pressHandler() {
		// 按钮处于加载中和禁用状态，都不响应事件
		if (this.props.loading !== true && this.props.disabled !== true
			&& typeof this.props.onPress == "function") {
			this.props.onPress();
		}
	}

	btnStatus(statusId){
		//1：修改出价，2：开始投放，3：暂停投放，4：终止投放
		let status;
		let btnArray = [];
		let btnText=["修改出价","开始投放","暂停投放","终止投放"];
		console.log(888)
		switch(statusId){
			case 11: 
				status = [3,4];
				break;
			case 21: 
				status = [3,4];
				break;
			case 31: 
				status = [2,4];
				break;
			case 32: 
				status = [3,4];
				break;
			case 33: 
				status = [4];
				break;
			case 34: 
				status = [3,4];
				break;
			case 41: 
				status = [];
				break;
			case 42: 
				status = [];
				break;
			case 51: 
				status = [2,4];
				break;
			case 52: 
				status = [1];
				break;
			case 61: 
				status = [];
				break;
			default:
				status = [];
		};
		console.log(999)
		for(var i=0;i<status.length;i++){
			let thisBtnId = status[i];
			btnArray.push(<View key={i} style={styles.singleBtnBox}>
						<Button 
							key={i}
							width={Theme.size(126)}
							height={Theme.size(50)}
							fontSize={Theme.size(26)}
							color="#999"
							backgroundColor="#FFF"
							borderType="fontSame"
							title={btnText[parseInt(status[i]) - 1]}
							onPress={
								()=>{this.btnPress(thisBtnId)}
							}
						/>
					</View>);
					
		}

		// btnArray.push(</View>);
		return status.length == 0 ? null : (
			<View key='btnBox' style={styles.btnBox}>{btnArray}</View>
		);
	}

	btnPress(thisBtnId){
		let alertTextBox = {
			'2':{
				title:'确定开启投放吗？',
				content: ''
			},
			'3':{
				title:'确定暂停投放吗？',
				content: ''
			},
			'4':{
				title:'确定终止投放？',
				content: '一旦终止投放，不可恢复'
			}
		}
		let alertText = {
			title: alertTextBox[thisBtnId].title,
			content: alertTextBox[thisBtnId].content,
		};
		Alert.alert(
			alertText.title,
			alertText.content,
			[
				{text: '取消', onPress: () => console.log('Foo Pressed!')},
				{text: '确定', onPress: () => console.log('Bar Pressed!')},
			]
		)
	}

	render() {
		return (
			<View>	
				{this.btnStatus(this.props.reason)}
			</View>	
		);
	}
}
// 默认 props 值
AdvertisePlanCard.defaultProps = {
	title: "确定",
	icon: null,
	loading: false,
	loadingText: "处理中，请稍候",
	disabled: false,
	fixPosition: null,
	onPress: () => { },
};

const styles = StyleSheet.create({
	btnBox: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		height:Theme.size(90),
		backgroundColor: '#FFF',
		marginRight: Theme.size(6),
		borderTopWidth: Theme.borderWidth(1),
		borderTopColor: '#D9D9D9',
		width: '100%'
	},
	singleBtnBox: {
		marginRight: Theme.size(20),
	}
});

export default AdvertisePlanCard;
