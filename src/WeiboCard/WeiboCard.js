/**
 * 微博单条卡片
 import { WeiboCard } from 'react-native-whui';
 <WeiboCard
 	
	 />
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Theme from './../theme/default.js';
import Card from './../Card/Card.js';
import Button from './../buttons/Button.js';

class WeiboCard extends Component {

	constructor(props) {
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
	}

	pressHandler() {
		// 按钮处于加载中和禁用状态，都不响应事件
		if (this.props.loading !== true && this.props.disabled !== true
			&& typeof this.props.onPress == "function") {
			this.props.onPress();
		}
	}

	render() {
		return (
			<View>
				<Card>
					<View>
						<Image resizeMode="contain" style={styles.timeIcon} source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=300268425,1269595726&fm=58'}} />
						<Text>03-28 10:20</Text>
					</View>
					<View>
						<Text>#国庆七天旅程#妹子好美的地方啊，亲们，快来看看这里是哪里吧，我家后院的草原～～</Text>
						<View>
							<Image resizeMode="contain" style={styles.imageBox} source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=300268425,1269595726&fm=58'}} />
							<Image resizeMode="contain" style={styles.imageBox} source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=300268425,1269595726&fm=58'}} />
							<Image resizeMode="contain" style={styles.imageBox} source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=300268425,1269595726&fm=58'}} />
						</View>
					</View>
					<View>
						<Button
							title="12345s"
						 />
					</View>
				</Card>
			</View>
		);
	}
}

// Props 类型检查
WeiboCard.propTypes = {
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
WeiboCard.defaultProps = {
	title: "确定",
	icon: null,
	loading: false,
	loadingText: "处理中，请稍候",
	disabled: false,
	fixPosition: null,
	onPress: () => { }
};

const styles = StyleSheet.create({
	timeIcon:{
		width: 30,
		height:30,
	},
	imageBox: {
		width:100,
		height:100,
	}
 });

export default WeiboCard;
