import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

class Button extends Component {
	render(){
		return (
			<TouchableOpacity activeOpacity={1}>
				<View style={style.button}>
					<Text>
					{this.props.text}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {

	},
	buttonText: {
		
	}
});

module.exports = Button;
