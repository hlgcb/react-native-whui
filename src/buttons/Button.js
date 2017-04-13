/**
 * 按钮
 import { Button } from 'react-native-whui';
 <Button
 	title="按钮文案"
	icon={可选参数，图标，暂未支持}
	loading={true，是不是加载中，加载中不会触发 onPress 事件}
	loadingText="加载中的文案，如果没文案，使用默认文案"
	disabled={true，按钮不可用}
	fixPosition="bottom"	// 底部悬浮
	onPress={按钮点击事件}
	backgroundColor="背景色"
	color="文字颜色"
	borderRadius="按钮圆角"
	disabledBackgroundColor="禁用状态背景色"
	disabledColor="禁用状态文字颜色"
	width={120|auto}
	height={50|auto}
	spacing={}
	fontSize={Theme.size(26)}
	borderType="fontSame"	//边框颜色类型 fontSame：与按钮字色相同；！fontSame：与按钮背景色相同
	/>
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';
import Theme from './../theme/default.js';

class Button extends Component {

	constructor(props){
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
	}

	pressHandler(){
		// 按钮处于加载中和禁用状态，都不响应事件
		if(this.props.loading !== true && this.props.disabled !== true
				&& typeof this.props.onPress == "function"){
			this.props.onPress();
		}
	}

	render(){
		// 自定义样式部分
		let buttonStyle = {};
		if(this.props.disabled && typeof this.props.disabledBackgroundColor != "undefined"){
			buttonStyle.backgroundColor = this.props.disabledBackgroundColor;
			buttonStyle.borderColor = this.props.disabledBackgroundColor;
		} else if(typeof this.props.backgroundColor != "undefined"){
			buttonStyle.backgroundColor = this.props.backgroundColor;
		}
		if(typeof this.props.borderRadius != "undefined"){
			console.log(this.props.borderRadius)
			buttonStyle.borderRadius = this.props.borderRadius;
		}
		if(typeof this.props.borderRadius != "undefined"){
			console.log(this.props.borderRadius)
			buttonStyle.borderRadius = this.props.borderRadius;
		}
		let buttonTextStyle = {};
		if(this.props.disabled && typeof this.props.disabledColor != "undefined"){
			buttonTextStyle.color = this.props.disabledColor;
		} else if(typeof this.props.color != "undefined"){
			buttonTextStyle.color = this.props.color;
		}
		if(typeof this.props.width != "undefined"){
			buttonStyle.width = this.props.width;
			if(this.props.width == "auto"){
				buttonStyle.paddingHorizontal = Theme.size(20);
			}
		}
		if(typeof this.props.height != "undefined"){
			buttonStyle.height = this.props.height;
		}
		if(typeof this.props.spacing != "undefined"){
			buttonStyle.marginRight = this.props.spacing;
			buttonStyle.marginBottom = this.props.spacing;
		}
		if(typeof this.props.fontSize != "undefined"){
			buttonTextStyle.fontSize = this.props.fontSize;
		}
		if(typeof this.props.borderType != "undefined" && this.props.borderType == "fontSame"){
			buttonStyle.borderColor = typeof this.props.color != "undefined" ? this.props.color : Theme.color.primaryTextColor;
		}else{
			buttonStyle.borderColor = typeof this.props.backgroundColor != "undefined" ? this.props.backgroundColor : Theme.color.primaryColor;
		}

		return (
			<TouchableOpacity onPress={this.pressHandler} activeOpacity={0.5}
					style={ [this.props.fixPosition == "bottom" ? styles.fixed : null] }>
				<View style={[styles.button, this.props.disabled ? styles.disabled : null, buttonStyle]}>
					<Text style={[styles.buttonText, buttonTextStyle]}>
					{this.props.loading ? this.props.loadingText : this.props.title}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

// Props 类型检查
Button.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	loading: PropTypes.bool,
	loadingText: PropTypes.string,
	disabled: PropTypes.bool,
	fixPosition: PropTypes.oneOf(['bottom']),
	onPress: PropTypes.func,
	// 取值参考：https://facebook.github.io/react/docs/typechecking-with-proptypes.html
	// PropTypes.any,
	// PropTypes.object,
	// PropTypes.bool,
	// PropTypes.string,
	// PropTypes.func,
	// PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
}
// 默认 props 值
Button.defaultProps = {
	title: "确定",
	icon: null,
	loading: false,
	loadingText: "处理中，请稍候",
	disabled: false,
	fixPosition: null,
	onPress: ()=>{}
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: Theme.color.primaryColor,
		borderRadius: Theme.borderRadius,
		width: Theme.size(750),
		height: Theme.size(88),
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: Theme.borderWidth(1),
		borderColor: Theme.color.primaryColor
	},
	buttonText: {
		textAlign: 'center',
		fontSize: Theme.fontSize(32),
		color: Theme.color.primaryTextColor
	},
	disabled: {
		backgroundColor: '#999'
	},
	fixed: {
		position: 'absolute',
		top: Theme.window.height - 44 - (Platform.OS == "android" ? 20 : 0) /* 扣掉导航栏的高度 */
	}
});

export default Button;
