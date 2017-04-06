/**
 * 按钮
 import { TextInput } from 'react-native-whui';
 <TextInput
 	placeholder="placeholder 文案"
	defaultValue=""
	editable=""
	 />
 */
import React, { Component, PropTypes } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Theme from './../theme/default.js';

class FormTextInput extends Component {

	constructor(props){
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
	}

	render(){
		// 自定义样式部分
		return (
			<TextInput style={styles.input} clearButtonMode="while-editing" {...this.props} />
		);
	}
}

// Props 类型检查
FormTextInput.propTypes = {
	// title: PropTypes.string.isRequired,
	// icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	// loading: PropTypes.bool,
	// loadingText: PropTypes.string,
	// disabled: PropTypes.bool,
	// fixPosition: PropTypes.oneOf(['bottom']),
	// onPress: PropTypes.func,
	// 取值参考：https://facebook.github.io/react/docs/typechecking-with-proptypes.html
	// PropTypes.any,
	// PropTypes.object,
	// PropTypes.bool,
	// PropTypes.string,
	// PropTypes.func,
	// PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
}
// 默认 props 值
FormTextInput.defaultProps = {
	// title: "确定",
	// icon: null,
	// loading: false,
	// loadingText: "处理中，请稍候",
	// disabled: false,
	// fixPosition: null,
	// onPress: ()=>{}
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: Theme.color.primaryColor,
		borderRadius: Theme.borderRadius,
		width: Theme.size(750),
		height: Theme.size(88),
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: Theme.borderWidth(1),
		borderColor: '#ccc'
	},
});

export default FormTextInput;
