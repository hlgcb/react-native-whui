/**
 * 按钮
 import { PageTopTabBar } from 'react-native-whui';
 <PageTopTabBar
 	title="计划名称"
	
	 />
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Theme from './../theme/default.js';

class PageTopTabBar extends Component {

	constructor(props) {
		super(props);
		this.state = { highLightState : 1 };  
		this.pressHandlerLeft = this.pressHandlerLeft.bind(this);
		this.pressHandlerRight = this.pressHandlerRight.bind(this);
	}

	pressHandlerLeft() {
		let highLight = 1;
		this.setState({
			highLightState: highLight
		})
		this.props.onPress(highLight);
	}

	pressHandlerRight(){
		let highLight = 2;
		this.setState({
			highLightState: highLight
		})
		this.props.onPress(highLight);
	}

	render() {
		return (
			<View style={styles.tabBarBox}>
				<TouchableOpacity style={styles.tabBar} onPress={this.pressHandlerLeft}>
					<Text style={[styles.tabBarText, this.state.highLightState == 1 ? styles.textHighLight : '']}>正在投放</Text>
					<View style={[styles.tabBarChosen, this.state.highLightState == 1 ? styles.bottomHighLight : '']}></View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.tabBar} onPress={this.pressHandlerRight}>
					<Text style={[styles.tabBarText, this.state.highLightState == 2 ? styles.textHighLight : '']}>所有投放</Text>
					<View style={[styles.tabBarChosen, this.state.highLightState == 2 ? styles.bottomHighLight : '']}></View>
				</TouchableOpacity>
			</View>
		);
	}
}
// 默认 props 值
PageTopTabBar.defaultProps = {
	title: "确定",
	onPress: (highLight)=>{alert(highLight)}
};

const styles = StyleSheet.create({
	tabBarBox: {
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		height: Theme.size(88),
	},
	tabBar: {
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		height: Theme.size(88),
		position: 'relative',
	},
	tabBarText: {
		fontSize: Theme.size(32),
		color: '#666',
	},
	tabBarChosen: {
		width: Theme.size(76),
		height: Theme.size(8),
		backgroundColor: '#FFF',
		position: 'absolute',
		bottom: Theme.size(0),

	},
	textHighLight: {
		color: '#659AF0'
	},
	bottomHighLight: {
		backgroundColor: '#6E9AE9'
	}
});

export default PageTopTabBar;
