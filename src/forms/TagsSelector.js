/**
 * 标签选择器
 import { TagsSelector } from 'react-native-whui';
 <TagsSelector
 	tags={[{id:1, text:"全选"},{id:2, text:"转发"},{id:3, text:"评论"},{id:4, text:"赞"},{id:5, text:"@"}]}
	selectedIds={[1, 2]}	// 选中的 tag id
	showAll={true}			// 是否显示全选
	onChange={选中后的回调，会把全部选择的结果扔回去}
	tagWidth="auto|50"	// 标签是自适应宽度还是固定宽度
	spacing={20}
	 />
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from './../theme/default.js';
import Button from './../buttons/Button';

class TagsSelector extends Component {

	constructor(props){
		super(props);
		this.selectTag = this.selectTag.bind(this);
		this.selectAll = this.selectAll.bind(this);
		this.state = {
			selectedIds: this.props.selectedIds || []
		};
	}

	selectTag(id){
		// console.log("select tag: " + id);
		var position = this.state.selectedIds.indexOf(id);
		if(position == -1){
			this.state.selectedIds.push(id);
		} else {
			this.state.selectedIds.splice(position, 1);
		}
		// console.log(this.state.selectedIds);
		this.setState({
			selectedIds: this.state.selectedIds
		});
		this.props.onChange && this.props.onChange(this.state.selectedIds);
	}

	selectAll(){
		// console.log("selectAll");
		// 如果已经全选
		if(this.state.selectedIds.length == this.props.tags.length){
			let selectedIds = [];
			this.setState({
				selectedIds: selectedIds
			});
			this.props.onChange && this.props.onChange(selectedIds);
		} else {
			let tags = this.props.tags;
			let output = [];
			for(let i = 0, count = tags.length; i < count; i ++ ){
				let id = tags[i].id;
				output.push(id);
			}
			this.setState({
				selectedIds: output
			});
			this.props.onChange && this.props.onChange(output);
		}

	}

	getTags(){
		let tags = this.props.tags;
		let output = [];
		let style;
		let itemWidth = this.props.tagWidth || "auto";
		if(this.props.showAll === true){
			// 判断初始状态就是全选的
			if(this.state.selectedIds.length == this.props.tags.length){
				style = {};
			} else {
				style = {
					backgroundColor: '#fff',
					color: '#999'
				};
			}
			output.push(<Button key="all" title="全选"
				width={itemWidth} height={Theme.size(50)} borderType="fontSame"
				spacing={this.props.spacing || Theme.size(10)} {...style} fontSize={Theme.fontSize(26)} onPress={()=>{this.selectAll();}} />);
		}
		for(let i = 0, count = tags.length; i < count; i ++ ){
			let tag = tags[i];
			let id = tag.id;
			if(this.state.selectedIds.indexOf(id) != -1){
				style = {};
			} else {
				style = {
					backgroundColor: '#fff',
					color: '#999'
				};
			}
			output.push(<Button key={tags[i].id} title={tags[i].text}
				width={itemWidth} height={Theme.size(50)} borderType="fontSame"
				spacing={this.props.spacing || Theme.size(10)} {...style} fontSize={Theme.fontSize(26)} onPress={()=>{this.selectTag(id);}} />);
		}
		return output;
	}

	render(){
		let tags = this.getTags(this.state.selectedIds);
		// console.log("render");
		return (
		<View style={styles.tags}>
			{ tags }
		</View>
		);
	}
}

TagsSelector.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.object).isRequired,	// tags 是一个对象数组
	selectedIds: PropTypes.arrayOf(PropTypes.number),		// selectedIds 是一个数字数组
	onChange: PropTypes.func.isRequired,
	tagWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	showAll: PropTypes.oneOf([true, false])
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
TagsSelector.defaultProps = {
	tags: null,
	selectedIds: [],
	tagWidth: "auto",
	showAll: true
};

const styles = StyleSheet.create({
	tags: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		// backgroundColor: 'green'
		// justifyContent: 'flex-start',//'space-around',
		// alignItems: 'flex-start',//'stretch',
		// paddingVertical: Theme.size(20),
		// paddingHorizontal: Theme.size(20)
	}
});

export default TagsSelector;
