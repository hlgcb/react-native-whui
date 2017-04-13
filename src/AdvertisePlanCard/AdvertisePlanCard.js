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
import AdvertisePlanCardBtns from './../AdvertisePlanCardBtns/AdvertisePlanCardBtns.js';



class AdvertisePlanCard extends Component {

	constructor(props) {
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
		// this.btnStatus = this.btnStatus.bind(this);
		this.state={
			modalVisible: false,
			Title: '',
			Content: ''
		}
		
	}

	pressHandler() {
		// 按钮处于加载中和禁用状态，都不响应事件
		if (this.props.loading !== true && this.props.disabled !== true
			&& typeof this.props.onPress == "function") {
			this.props.onPress();
		}
	}

	cardStatus(statusId) {
		let status = [];
		switch(statusId){
			case 1: 
				status.push(<Text key={1} style={styles.warning}>审核中</Text>)
				break;
			case 2: 
				status.push(<Text key={2} style={styles.normal}>正常</Text>)
				break;
			case 3: 
				status.push(<Text key={3} style={styles.warning}>已暂停</Text>)
				break;
			case 4: 
				status.push(<Text key={4} style={styles.warning}>待发布</Text>)
				break;
			case 5: 
				status.push(<Text key={5} style={styles.warning}>失效</Text>)
				break;
			case 6: 
				status.push(<Text key={6} style={styles.warning}>已结束</Text>)
				break;
			default:
				status.push(<Text key={0} style={styles.warning}>未获得状态信息</Text>)
		}
		return status;
	}

	/*btnStatus(statusId){
		//1：修改出价，2：开始投放，3：暂停投放，4：终止投放
		let status;
		let btnArray = [];
		let btnText=["修改出价","开始投放","暂停投放","终止投放"];
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
	}*/

	// btnPress(thisBtnId){
	// 	console.log(thisBtnId)
	// 	let alertTextBox = {
	// 		'2':{
	// 			title:'确定开启投放吗？',
	// 			content: ''
	// 		},
	// 		'3':{
	// 			title:'确定暂停投放吗？',
	// 			content: ''
	// 		},
	// 		'4':{
	// 			title:'确定终止投放？',
	// 			content: '一旦终止投放，不可恢复'
	// 		}
	// 	}
	// 	let alertText = {
	// 		title: alertTextBox[thisBtnId].title,
	// 		content: alertTextBox[thisBtnId].content,
	// 	};
	// 	Alert.alert(
	// 		alertText.title,
	// 		alertText.content,
	// 		[
	// 			{text: '取消', onPress: () => console.log('Foo Pressed!')},
	// 			{text: '确定', onPress: () => console.log('Bar Pressed!')},
	// 		]
	// 	)
	// 	// this.setState({
	// 	// 	Title: alertText.title,
	// 	// 	Content: alertText.content,
	// 	// 	modalVisible: true
	// 	// });
	// 	/*return (<MaterialDialog 
	// 		Title= {alert.title}
	// 		Content= {alert.content}
	// 		modalVisible= {this.state.modalVisible}
	// 		/>)*/
	// }

	render() {
		return (
			<View>
				<TouchableOpacity
					onPress={this.pressHandler}
					activeOpacity={0.5}
					style={{backgroundColor: '#F2F2F2',width:'100%',}}
				>
					<View style={styles.content}>
						<Text style={styles.contentTitle}>{this.props.planName}</Text>
						<View style={styles.contentState}>
							{this.cardStatus(this.props.status)}
							<Image style={styles.stateImg} resizeMode="contain" source={require('../../../../app/images/AdvertisePlanCard/toRightIcon.png')} />
						</View>
					</View>
					<View style={styles.detial}>
						<View style={styles.priceDetial}>
							<Image style={styles.priceIcon} resizeMode="contain" source={require('../../../../app/images/AdvertisePlanCard/offerIconX.png')} />
							<Text style={styles.priceText}>出价：{this.props.offer}&nbsp;元</Text>
						</View>
						<View style={styles.priceDetial}>
							<Image style={styles.priceIcon} resizeMode="contain" source={require('../../../../app/images/AdvertisePlanCard/appearIconX.png')} />
							<Text style={styles.priceText}>曝光量：{this.props.appear}</Text>
						</View>
						<View style={styles.priceDetial}>
							<Image style={styles.priceIcon} resizeMode="contain" source={require('../../../../app/images/AdvertisePlanCard/expendNowIconX.png')} />
							<Text style={styles.priceText}>今日消耗：{this.props.expendNow}&nbsp;元</Text>
						</View>
						<View style={styles.priceDetial}>
							<Image style={styles.priceIcon} resizeMode="contain" source={require('../../../../app/images/AdvertisePlanCard/expendAllIconX.png')} />
							<Text style={styles.priceText}>累计消耗：{this.props.expendAll}&nbsp;元</Text>
						</View>
					</View>
				</TouchableOpacity>
				<AdvertisePlanCardBtns reason={this.props.reason} />
				{/*{this.btnStatus(this.props.reason)}*/}
				{/*<MaterialDialog 
					Title={this.state.Title}
					Content={this.state.Content}
					modalVisible={this.state.modalVisible}
				/>*/}
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

const adState = {
	"planingList": {
		//【正在投放】页签中只有 正常状态
		"adCard": [{
			"name": "计划名称",	
			"status": "1：审核中 2：正常 3：已暂停 4：待发布 5：失效 6：已结束",
			"reason": "3-1：手动暂停 3-2：投放开始但时间未到 3-3：余额不足 3-4：计划达到日上线 4-1：微博审核通过但时间未到 4-2未绑定微博 5-1原微博被删 5-2微博审核未通过",
			"offer": "出价",
			"appear": "曝光量",
			"expendNow": "今日消耗",
			"expendAll": "累计消耗",
			"planId": "计划id-唯一字段",
			"startUrl": "开始计划接口",
			"pauseUrl": "暂停计划接口",
			"modifyPriceUrl": "",
			"stopUrl": "停止计划接口"
		}]
	},
	"allPlanList": {
		"adCard": [{
			"name": "计划名称",
			"status": "1：审核中 2：正常 3：已暂停 4：待发布 5：失效 6：已结束",
			"reason": "3-1：手动暂停 3-2：投放开始但时间未到 3-3：余额不足 3-4：计划达到日上线 4-1：微博审核通过但时间未到 4-2未绑定微博 5-1原微博被删 5-2微博审核未通过",
			"offer": "出价",
			"appear": "曝光量",
			"expendNow": "今日消耗",
			"expendAll": "累计消耗",
			"planId": "计划id-唯一字段",
			"startUrl": "开始计划接口",
			"pauseUrl": "暂停计划接口",
			"modifyPriceUrl": "",
			"stopUrl": "停止计划接口"
		}]
	}
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: '#FFF',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
		padding: Theme.size(24),
		width: '100%',

	},
	contentTitle: {
		color: '#333',
		fontSize: Theme.size(28),
		paddingTop: Theme.size(16),
	},
	contentState: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		position: 'absolute',
		right: Theme.size(24),
		paddingTop: Theme.size(16),
	},
	stateImg: {
		width: Theme.size(14),
		marginLeft: Theme.size(10),
	},
	error: {
		color: '#DF6E35'
	},
	warning: {
		color: '#F6B759'
	},
	normal: {
		color: '#6ADA91'
	},
	detial: {
		backgroundColor: '#FFF',
		paddingLeft: Theme.size(24),
		paddingBottom: Theme.size(20),
		width: '100%',
	},
	priceDetial: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: Theme.size(48),
	},
	priceIcon: {
		width: Theme.size(30),
		marginRight: Theme.size(16),
	},
	priceText: {
		fontSize: Theme.size(26),
		color: '#999',
	},
	// btnBox: {
	// 	flexDirection: 'row',
	// 	justifyContent: 'flex-end',
	// 	alignItems: 'center',
	// 	height:Theme.size(90),
	// 	backgroundColor: '#FFF',
	// 	marginRight: Theme.size(6),
	// 	borderTopWidth: Theme.borderWidth(1),
	// 	borderTopColor: '#D9D9D9',
	// 	width: '100%'
	// },
	// singleBtnBox: {
	// 	marginRight: Theme.size(20),
	// }
});

export default AdvertisePlanCard;
