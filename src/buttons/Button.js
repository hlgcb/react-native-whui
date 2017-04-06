/**
 * 按钮
 import { Button } from 'react-native-whui';
 <Button
 	title="按钮文案"
	icon={可选参数，图标，暂未支持}
	loading={true，是不是加载中，加载中不会触发 onPress 事件}
	loadingText="加载中的文案，如果没文案，使用默认文案"
	disabled={true，按钮不可用}
	onPress={按钮点击事件}
	backgroundColor="背景色"
	color="文字颜色"
	highlightBackgroundColor="高亮背景色"
	disabledBackgroundColor="禁用状态背景色"
	disabledColor="禁用状态文字颜色"
	 />
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Theme from './../theme/default.js';

class Button extends Component {

	constructor(props){
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
	}

	pressHandler(){
		// 按钮处于加载中和禁用状态，都不响应事件
		if((this.props.loading !== true || this.props.disabled !== true)
				&& typeof this.props.onPress == "function"){
			this.props.onPress();
		}
	}

	render(){
		return (
			<TouchableOpacity onPress={this.pressHandler} activeOpacity={0.5}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>
					{this.props.title}
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
	onPress: ()=>{}
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: Theme.color.primaryColor,
		borderRadius: 4,
		width: Theme.size(750),
		height: Theme.size(88),
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: Theme.borderWidth(1),
		borderColor: '#ccc'
	},
	buttonText: {
		textAlign: 'center',
		fontSize: Theme.fontSize(32),
		color: Theme.color.primaryTextColor
	}
});

export default Button;
