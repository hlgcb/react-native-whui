/**
 * 选择网红
 import { ChooseList } from 'react-native-whui';
	<ChooseList
		dataArr={[]}
	/>
 */
import React, { Component, PropTypes } from 'react';
import { ListView, TouchableOpacity, View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Theme from './../theme/default.js';
import Card from './../Card/Card.js';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ChooseList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			verifiedIco: [
				require('../images/verified/ico_0.png'),
				require('../images/verified/ico_1.png'),
				require('../images/verified/ico_2.png'),
				require('../images/verified/ico_3.png'),
				require('../images/verified/ico_4.png')
			]
		};
	  	this.state.dataSource = ds.cloneWithRows( this.props.dataArr );
	  	this.renderRow = this.renderRow.bind(this);
	}

	componentWillReceiveProps(nextProps){;
		this.setState({
			dataSource: ds.cloneWithRows( nextProps.dataArr )
		})
	}

	renderRow(itemData, sectionID, rowID){
		return (
		<View style={styles.card}>
			<View style={styles.item}>
				<View style={styles.itemLeft}>
					<Image style={styles.imageStyle} source={{uri:itemData.profile_image_url}} />
					<View>
						{
							+itemData.verified ?
							<Image style={styles.verified_ico} source={this.state.verifiedIco[itemData.verified]} /> :
							null
						}
					</View>
				</View>
				<View style={styles.itemCenter}>
					<Text style={styles.itemCenter_name}>{itemData.screen_name}</Text>
					{/*<Text style={styles.itemCenter_money}>余额：{itemData.balance}元</Text>*/}
				</View>
				<TouchableHighlight
					key={itemData.wb_user_id}
					underlayColor="rgb(210, 230,255)"  
					activeOpacity={0.5}
					onPress={
						()=>{this.props.clickFn(itemData)}
					}
					>
					<View style={styles.itemRight} >
						<Image style={styles.itemRight_img} source={require('../images/ico_ad.png')} />
						<Text style={styles.itemRight_text}>投广告</Text>
					</View>
				</TouchableHighlight>
			</View>
		</View>
		);
	}

	render() {
		return (
			<View style={styles.main}>
				<ListView
					dataSource={this.state.dataSource}
					enableEmptySections={true}
					renderRow={this.renderRow}
				/>
			</View>
		);
	}
}

// Props 类型检查
ChooseList.propTypes = {
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
ChooseList.defaultProps = {
	clickFn(Data){
		if( Data.need_auth ){
			alert(Data.need_auth + Data.auth_url);
		}else{
			alert('ready');
		}
	},
	dataArr: []
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#f2f2f2'
	},
	center:{
		alignItems:'center',
		justifyContent: 'center',
	},
	lineText: {
		lineHeight: Theme.lineHeight(40),
		fontSize:Theme.size(24),
		paddingLeft: Theme.size(30),
	},
	card: {
		marginBottom: Theme.size(20)
	},
	item: {
		backgroundColor: '#fff',
		flexDirection: 'row',   // 水平排布
		height: Theme.size(145),
	},
	itemLeft: {
		width: Theme.size(128),
		height: Theme.size(138),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginLeft: Theme.size(10),
		paddingTop: Theme.size(25),
		paddingRight: Theme.size(15),
		paddingBottom: Theme.size(15),
		paddingLeft: Theme.size(15),
		position: 'relative',
	},
	imageStyle: {
		width: Theme.size(98),
		height: Theme.size(98),
		borderRadius: Theme.size(49),
	},
	verified_ico: {
		width: Theme.size(28),
		height: Theme.size(28),
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	itemCenter: {
		width: Theme.size(480),
		height: Theme.size(98),
		marginTop: Theme.size(25),
		marginLeft: Theme.size(10),
	},
	itemCenter_name: {
		lineHeight: Theme.lineHeight(40),
		fontSize: Theme.size(32),
		color: '#FF8944'
	},
	itemCenter_money:{
		lineHeight: Theme.lineHeight(40),
		fontSize:Theme.size(24),
		color: '#666'
	},
	itemRight: {
		width: Theme.size(98),
		height: Theme.size(98),
		alignItems:'center',
		justifyContent: 'center',
		marginTop: Theme.size(30),
	},
	itemRight_img: {
		width: Theme.size(42),
		height: Theme.size(42),
	},
	itemRight_text: {
		color: '#508CEE',
		lineHeight: Theme.lineHeight(40),
		fontSize:Theme.size(24),
	},
 });

export default ChooseList;





// {
//   "code": 0,
//   "message": "",
//   "data": [
//     {
//       "wb_user_id": "123",
//       "profile_image_url": "url",
//       "screen_name": "123",
//       "balance": "123.00",
//       "verified_type": "1",
//       "is_biz_auth": "1",
//       "biz_auth_url": "url",
//       "is_ad_auth": "1",
//       "ad_auth_url": "url"
//     },
//     {
//       "wb_user_id": "124",
//       "profile_image_url": "url",
//       "screen_name": "123",
//       "balance": "123.00",
//       "verified_type": "1",
//       "is_biz_auth": "1",
//       "biz_auth_url": "url",
//       "is_ad_auth": "1",
//       "ad_auth_url": "url"
//     }
//   ]
// }