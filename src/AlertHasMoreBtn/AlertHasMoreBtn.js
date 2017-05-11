/**
 * 多按钮弹窗
 import { AlertHasMoreBtn } from 'react-native-whui';
 <AlertHasMoreBtn
	title:"弹窗标题",
	text:"弹窗内容",
	showAlert: true, 弹窗开启
	btnBackgroundColor:'按钮背景色',
	btnColor:'按钮字体色',
	btnBorderRadius:按钮圆角,
	titleJsx:'支持传入jsx对象作为title，改参数优先级大于title.
								such as: 以文本输入框作为title，则传入如下内容
								<TextInput style={{width: '100%', height: 50, backgroundColor: 'yellow'}} onChangeText={(value)=>{
									console.log(value);
								}}/>',
	textJsx:'支持传入jsx对象作为text，改参数优先级大于title,类似titleJsx'
	btnObj: [{
		title:'按钮文案',
		onPress:()=>{
			按钮点击后的回调方法
			！！！！！！！
				务必添加
				this.setState({
					showAlert: false
				})
				用来关闭弹窗
			！！！！！！！
		}
	}]
	/>

	弹框样式如下！！！！！
	-----------------------------------------
	|				  title				    |
	|										|
	|				  text				    |
	|---------------------------------------|
	|				  按钮一				  |
	|---------------------------------------|
	|				  按钮二				  |
	|---------------------------------------|
	|				  按钮三				  |
	|---------------------------------------|
	|				  .....				    |
	|---------------------------------------|

	如果按钮数量 == 2,即 btnObj.length == 2 ，弹窗会get变形技能
	-----------------------------------------
	|				  title				    |
	|										|
	|				  text				    |
	|---------------------------------------|
	|		按钮一		 |       按钮二		|
	|---------------------------------------|
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Modal } from 'react-native';
import Theme from './../theme/default.js';
import Card from './../Card/Card.js';
import Button from './../buttons/Button.js';

class AlertHasMoreBtn extends Component {

	constructor(props) {
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
		this.alertTitleRenderFn = this.alertTitleRenderFn.bind(this);
		this.alertTextRenderFn = this.alertTextRenderFn.bind(this);
	}

	pressHandler() {
		// 按钮处于加载中和禁用状态，都不响应事件
		if (this.props.loading !== true && this.props.disabled !== true
			&& typeof this.props.onPress == "function") {
			this.props.onPress();
		}
	}

	btnRenderFn(btnObj){
		let btnArray = [];
		if(btnObj.length == 2){
			for(var i in btnObj){
				btnArray.push(
					<Button
						key={i}
						width={Theme.size(270)}
						borderRadius={typeof this.props.btnBorderRadius != 'undefind' ? this.props.btnBorderRadius : Theme.borderRadius}
						backgroundColor='rgba(0,0,0,0)'	
						color={this.props.btnColor}
						title={btnObj[i].title}
						onPress={btnObj[i].onPress}
					/>
				)
			}
			return (<View style={[styles.btnBox, {backgroundColor: this.props.btnBackgroundColor || '#eeefee'}]}>
						{btnArray}
					</View>
			);
		}else{
			for(var i in btnObj){
				btnArray.push(
					<Button
						key={i}
						width={Theme.size(540)}
						borderRadius={typeof this.props.btnBorderRadius != 'undefind' ? this.props.btnBorderRadius : Theme.borderRadius}
						backgroundColor='rgba(0,0,0,0)'	
						color={this.props.btnColor}
						title={btnObj[i].title}
						onPress={btnObj[i].onPress}
					/>
				)
			}
			return (<View style={[styles.btnBox, {backgroundColor: this.props.btnBackgroundColor || '#eeefee'}]}>
						{btnArray}
					</View>
			);
		}
		
	}

	alertTitleRenderFn(){
		if(!!this.props.titleJsx){
			return (<View style={styles.alertText}>
						{this.props.titleJsx}
					</View>)
		}else if(!!this.props.title){
			return (<View style={styles.alertTextTitle}>
						<Text style={styles.h3}>{this.props.title}</Text>
					</View>)
		}else{
			return null;
		}
	}

	alertTextRenderFn(){
		if(!!this.props.textJsx){
			return (<View style={styles.alertText}>
						{this.props.textJsx}
					</View>)
		}else if(!!this.props.text){
			return (<View style={styles.alertText}>
						<Text style={styles.text}>{this.props.text}</Text>
					</View>)
		}else{
			return null;
		}
	}

	render() {
		return (
			<Modal
				visible={this.props.showAlert}
				animationType={"fade"}
				transparent={true}
				onRequestClose={()=>{}}
			>
				<View style={styles.alertBox}
				>
					<View style={styles.alertContain}>
						<View style={styles.alertContent}>
							{this.alertTitleRenderFn()}
							{this.alertTextRenderFn()}
						</View>
						{this.btnRenderFn(this.props.btnObj)}
					</View>
				</View>
			</Modal>
		);
	}
}

// // Props 类型检查
// AlertHasMoreBtn.propTypes = {
// 	showAlert: propTypes.showAlert,
// 	// 取值参考：https://facebook.github.io/react/docs/typechecking-with-proptypes.html
// 	// PropTypes.any,
// 	// PropTypes.object,
// 	// PropTypes.bool,
// 	// PropTypes.string,
// 	// PropTypes.func,
// 	// PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
// }
// 默认 props 值
AlertHasMoreBtn.defaultProps = {
	title:"选择投放模式",
	text:"涨粉目的不会对已有粉丝进行投放",
	showAlert: true,
	btnBackgroundColor:'#EEEFEE',
	btnColor:'#007AFF',
	btnBorderRadius:0,
	btnObj: [{
		title:'涨粉-智能投放',
		onPress:()=>{
		}
	}]
};

const styles = StyleSheet.create({
	alertBox: {
		backgroundColor: 'rgba(0,0,0,0.5)', 
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	alertContain:{
		backgroundColor: '#EEEFEE',
		borderRadius: Theme.size(32),
		width: Theme.size(540),
		overflow: 'hidden',
		opacity: 0.95,
	},
	alertContent: {
		paddingTop: Theme.size(40),
		paddingRight:Theme.size(30),
		paddingBottom:Theme.size(40),
		paddingLeft:Theme.size(30),
	},
	alertTextTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: Theme.size(20),
	},
	alertText: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	text: {
		lineHeight: Theme.lineHeight(34),
	},
	h3: {
		fontSize: Theme.size(34),
	},
	btnBox: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomLeftRadius: Theme.size(32),
		borderBottomRightRadius: Theme.size(32),
	}
});

export default AlertHasMoreBtn;
