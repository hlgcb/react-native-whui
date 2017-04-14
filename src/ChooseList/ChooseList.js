/**
 * 选择网红
 import { ChooseList } from 'react-native-whui';
 <ChooseList
	 />
 */
import React, { Component, PropTypes } from 'react';
import { ListView, TouchableOpacity, View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Theme from './../theme/default.js';
import Card from './../Card/Card.js';
import AlertHasMoreBtn from './../AlertHasMoreBtn/AlertHasMoreBtn.js';

class ChooseList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dataArr: [{
				profile_image_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491995363647&di=ecc43d7c670d7595b95556b1bcb3b131&imgtype=0&src=http%3A%2F%2Fwww.icosky.com%2Ficon%2Fpng%2FSystem%2FScrap%2FClient%25202.png',
				screen_name: 'name',
				verified_type: 1,
				balance: 45
			},
			{
				profile_image_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491995363647&di=ecc43d7c670d7595b95556b1bcb3b131&imgtype=0&src=http%3A%2F%2Fwww.icosky.com%2Ficon%2Fpng%2FSystem%2FScrap%2FClient%25202.png',
				screen_name: '电风扇',
				verified_type: 3,
				balance: 45
			},
			{
				profile_image_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491995363647&di=ecc43d7c670d7595b95556b1bcb3b131&imgtype=0&src=http%3A%2F%2Fwww.icosky.com%2Ficon%2Fpng%2FSystem%2FScrap%2FClient%25202.png',
				screen_name: '地方',
				verified_type: 3,
				balance: 45
			},
			{
				profile_image_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491995363647&di=ecc43d7c670d7595b95556b1bcb3b131&imgtype=0&src=http%3A%2F%2Fwww.icosky.com%2Ficon%2Fpng%2FSystem%2FScrap%2FClient%25202.png',
				screen_name: '泽德',
				verified_type: 2,
				balance: 45
			},
			{
				profile_image_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491995363647&di=ecc43d7c670d7595b95556b1bcb3b131&imgtype=0&src=http%3A%2F%2Fwww.icosky.com%2Ficon%2Fpng%2FSystem%2FScrap%2FClient%25202.png',
				screen_name: 'fdg',
				verified_type: 1,
				balance: 454
			}],
			verifiedIco: [
				require('../images/verified/ico_1.png'),
				require('../images/verified/ico_2.png'),
				require('../images/verified/ico_3.png'),
				require('../images/verified/ico_4.png')
			]
		};
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state.dataSource = ds.cloneWithRows( this.state.dataArr );
	}



   	static defaultProps = {
		clickFn(){
		}
    }


	render() {

		return (
			<View style={styles.main}>
				<Text style={styles.lineText}>请选择投放账户</Text>
		        <ListView
		          dataSource={this.state.dataSource}
		          renderRow={(itemData, sectionID, rowID) =><Card>
							<View style={styles.item}>
								<View style={styles.itemLeft}>
									<Image style={styles.imageStyle} source={{uri:itemData.profile_image_url}} />

									<View>
										<Image style={styles.verified_ico} source={this.state.verifiedIco[itemData.verified_type]} />
									</View>
								</View>
								<View style={styles.itemCenter}>
									<Text style={styles.itemCenter_name}>{itemData.screen_name}</Text>
									<Text style={styles.itemCenter_money}>余额：{itemData.balance}元</Text>
								</View>

								<TouchableHighlight
								  key={itemData.wb_user_id}
						          underlayColor="rgb(210, 230,255)"  
						          activeOpacity={0.5}
								  onPress={this.props.clickFn}
								>
									<View style={styles.itemRight} >
										<Image style={styles.itemRight_img} source={require('../images/ico_ad.png')} />
										<Text style={styles.itemRight_text}>投广告</Text>
									</View>
								</TouchableHighlight>
							</View>

						</Card>}
		        />


		        <View style={styles.center}>
		        	<Text style={styles.lineText}>添加账户请联系我们，微博<Text style={{color: '#FF8944'}}>@大COooO</Text></Text>
		        </View>
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
	dataArr: [{
		Image: 44,
		name: 'name',
		money: 45
	}]
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#fbfbfb'
	},
	center:{
		alignItems:'center',
		justifyContent: 'center',
	},
	lineText: {
        lineHeight: Theme.size(40),
        fontSize:Theme.size(24),
		paddingLeft: Theme.size(30),
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
        lineHeight: Theme.size(40),
        fontSize: Theme.size(32),
		color: '#FF8944'
	},
	itemCenter_money:{
        lineHeight: Theme.size(40),
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
        lineHeight: Theme.size(40),
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