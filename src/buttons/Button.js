import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

class Button extends Component {
	render(){
		return (
			<TouchableOpacity activeOpacity={1}>
				<Text>
				{this.props.text}
				</Text>
			</TouchableOpacity>
		);
	}
}

module.exports = Button;
