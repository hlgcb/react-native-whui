/**
 * 按钮
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Theme from './../theme/default.js';

class Button extends Component {
	render(){
		return (
			<TouchableOpacity onPress={this.props.onPress} activeOpacity={0.5}>
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
	title: "确定"
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
		fontSize: 32,
		color: Theme.color.primaryTextColor
	}
});

export default Button;
