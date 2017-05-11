/**
 * 微博单条卡片
 import { WeiboCard } from 'react-native-whui';
 <WeiboCard
 	text:'',		//微博文案
	time:'',		//微博时间
	timeIcon:'',	//时间图标
	imgUrl: [],		//微博图片
	showTime: true  //是否显示时间
	backgroundColor: '#F2F2F2' //背景颜色
	 />
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image , Platform} from 'react-native';
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

	imgBox(arr){
		let imgArr = [];
		for(let i = 0;i<arr.length;i++){
			imgArr.push(<Image key={i} resizeMode="contain" style={styles.image} source={{uri:arr[i]}} />)
		}
		return imgArr;
	}

	weiboTime(){
		if(this.props.showTime == true){
			return (<View style={styles.timeBox}>
						<Image resizeMode="contain" style={styles.timeIcon} source={require('../../../../app/images/weiboCard/timeIcon.png')} />
						<Text style={styles.timeText}>{this.props.time}</Text>
					</View>)
		}
		else{
			return null;
		}
	}

	weiboImage(){
		if(this.props.imgUrl.length == 0){
			return null;
		}else{
			return (<View style={[styles.imageBox,{backgroundColor: this.props.backgroundColor}]}>
						{this.imgBox(this.props.imgUrl)}
					</View>)
		}
	}


	render() {
		return (
			<View>
				{this.weiboTime()}
				<View style={[styles.detial, {backgroundColor: this.props.backgroundColor}]}>
					<Text style={styles.detialText}>{this.props.text}</Text>
					{this.weiboImage()}
				</View>
			</View>
		);
	}
}

// Props 类型检查
WeiboCard.propTypes = {
	title: PropTypes.string,
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
WeiboCard.defaultProps = {
	text:'#国庆七天旅程#妹子好美的地方啊，亲们，快来看看这里是哪里吧，我家后院的草原～～',
	time:'03-26 10:20',
	timeIcon:'../../../../app/images/weiboCard/timeIcon.png',
	imgUrl: ['https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=300268425,1269595726&fm=58','https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=300268425,1269595726&fm=58','https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=300268425,1269595726&fm=58'],
};

const styles = StyleSheet.create({
	timeBox: {
		backgroundColor: '#FFF',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginLeft: Theme.size(28),
		paddingTop: Theme.size(30),
		paddingBottom: Theme.size(10),

	},
	timeIcon:{
		...Platform.select({
			ios:{
				width: Theme.size(30),
				height: Theme.size(30),
			},
			android:{
				width: Theme.size(32),
				height: Theme.size(32),
			}
		}),
		marginRight: Theme.size(24),
		marginTop:Theme.size(2)
	},
	timeText: {
		color: '#666',
		fontSize: Theme.size(30),
	},
	detial: {
		backgroundColor: '#F7F7F7',
		paddingBottom: Theme.size(20),
		paddingTop: Theme.size(20)
	},
	detialText: {
		marginLeft: Theme.size(26),
		marginRight: Theme.size(26),
		color: '#151515',
		fontSize: Theme.size(32),

	},
	imageBox: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		paddingLeft: Theme.size(16),
		marginBottom: Theme.size(30),
		marginTop: Theme.size(20),
	},
	image: {
		width: Theme.size(226),
		height: Theme.size(226),
		margin: Theme.size(5),
	},
	imageCenter: {
		width: Theme.size(226),
		height: Theme.size(226),
	}
 });

export default WeiboCard;
