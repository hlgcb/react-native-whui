'use strict';
/**

import { ThemeConfig, HudView } from 'react-native-whui';

<HudView ref="HudView"
	isVisible={true}
	isModal={false}
	fadeDuration={300}
	loadingDuration={1000}
	hudText="加载中"
	hudWidth={ThemeConfig.size(240)}
	hudHeight={ThemeConfig.size(240)}
	hudBorderRadius={ThemeConfig.size(40)}
	maskBackgroundColor="rgba(0, 0, 0, 0.2)"
	/>

显示方法：this.refs.HudView.show()
隐藏方法：this.refs.HudVIew.hide()

参数说明：
// isModal: PropTypes.bool,					// 包含在 Modal 里，默认 false
// fadeDuration: PropTypes.number,			// fade 时长，默认 700 毫秒
// loadingDuration: PropTypes.number,		// loading 动画转一圈的时长，默认 200 毫秒
// hudText: "处理中",						  // 文案
// hudWidth: PropTypes.number,				// 宽
// hudHeight: PropTypes.number,				// 高
// hudBorderRadius: PropTypes.number,		// 圆角大小
// hudAdditionalStyles: PropTypes.object,	// 附加样式
// hudBackgroundColor: PropTypes.string,	// 背景色
// icon: PropTypes.string,					// 图标，当前就一个菊花
// maskBackgroundColor: PropTypes.string,	// 蒙层颜色
// hudContent: PropTypes.element			// 自定义内容，例如：hudContent={<Text></Text>}，有这个参数，默认的图标和文案都不再展示

 */

import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Modal,
	Animated,
	Easing,
	ActivityIndicator
} from 'react-native';

import Theme from './../theme/default.js';

export default class HudView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fadeDuration: props.fadeDuration,
			isVisible: false,
			isRotating: false,
			icon: null,
			fadeAnim: new Animated.Value(0),
			rotationAnim: new Animated.Value(0),
			rotateDeg: 0
		};
	}

	show() {
		this.setState({isVisible: false, isRotating: true});
		console.log("call _initializeRotationAnimation");
		this._initializeRotationAnimation(true);
		this._fadeIn();
	}

	hide(){
		this._fadeOut();
	}
	
	
	_fadeIn() {
		this.setState({isVisible: true});
		Animated.timing(this.state.fadeAnim, {
			toValue: 1,
			duration: this.state.fadeDuration
		}).start();
	}

	_fadeOut() {
		Animated.timing(this.state.fadeAnim, {
			toValue: 0,
			duration: this.state.fadeDuration
		}).start(() => {
			this.setState({isVisible: false});
		});
	}

	_getHudContainerStyles() {
		return [
			styles.hudContainer, {
				opacity: this.state.fadeAnim,
				width: this.props.hudWidth,
				height: this.props.hudHeight,
				borderRadius: this.props.hudBorderRadius,
				backgroundColor: this.props.hudBackgroundColor
			},
			this.props.hudAdditionalStyles
		];
	}
	_renderIcon() {
		return (
			<View style={[styles.icon]} key="icon">
				<Image source={require("../images/loading.png")} style={[styles.icon, this.state.rotateDeg]}/>
			</View>
		);
	}

	_initializeRotationAnimation(isRotating) {
		this.state.rotationAnim.setValue(0);
		if (!isRotating && !this.state.isVisible) {
			return;
		}
		if(this.increase == null){
			this.increase = 0;
		} else if(this.increase >= 12){
			this.increase = 0;
		}
		let that = this;
		setTimeout(()=>{
			that.setState({
				rotateDeg: {
					transform: [
						{rotate : (360 / 12 * that.increase) + 'deg'}
					]
				}
			});
			that.increase++;
			that._initializeRotationAnimation(true);
		}, this.props.loadingDuration / 12);
	}

	render (){
		if(this.state.isVisible){
			if(this.props.isModal){
				return (
					<Modal
						animationType='slide'           // 从底部滑入
						transparent={true}             // 透明
						visible={true}    // 根据 visible 决定是否显示
						onRequestClose={() => {}}  // android必须实现
						>
						<View style={[styles.mainContainer, {
							backgroundColor: this.props.maskBackgroundColor
						}]}>
							<Animated.View style={this._getHudContainerStyles()}>
								{
									this.props.hudContent ?
										this.props.hudContent :
										[this._renderIcon(), (<Text style={styles.text} key="text">{this.props.hudText}</Text>)]
								}
							</Animated.View>
						</View>
					</Modal>
				);
			} else {
				return (
					<View style={[styles.mainContainer, {
						backgroundColor: this.props.maskBackgroundColor
					}]}>
						<Animated.View style={this._getHudContainerStyles()}>
							{
								this.props.hudContent ?
									this.props.hudContent :
									[this._renderIcon(), (<Text style={styles.text} key="text">{this.props.hudText}</Text>)]
							}
						</Animated.View>
					</View>
				);
			}
		} else {
			return null;
		}
	}
}

HudView.propTypes = {
	isModal: PropTypes.bool,
	fadeDuration: PropTypes.number,
	loadingDuration: PropTypes.number,
	hudText: PropTypes.string,
	hudWidth: PropTypes.number,
	hudHeight: PropTypes.number,
	hudBorderRadius: PropTypes.number,
	hudAdditionalStyles: PropTypes.object,
	hudBackgroundColor: PropTypes.string,
	icon: PropTypes.string,
	maskBackgroundColor: PropTypes.string,
	hudContent: PropTypes.element
};

HudView.defaultProps = {
	isModal: true,
	fadeDuration: 700,
	loadingDuration: 200,
	hudText: "加载中",
	hudWidth: Theme.size(240),
	hudHeight: Theme.size(240),
	hudBorderRadius: Theme.size(33),
	hudAdditionalStyles: {},
	hudBackgroundColor: "rgba(67, 67, 67, 0.89)",
	icon: 'loading',
	maskBackgroundColor: "rgba(0, 0, 0, 0)",
	hudContent: null
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	hudContainer: {
		justifyContent: "center",
		alignItems: "center"
	},
	icon: {
		width: Theme.size(60),
		height: Theme.size(60)
	},
	text: {
		color: 'white',
		fontSize: Theme.fontSize(28),
		marginTop: Theme.size(22),
		paddingLeft: Theme.size(40),
		paddingRight: Theme.size(40),
		textAlign: 'center',
		lineHeight: Theme.size(50)
	}
});