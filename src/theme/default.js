/**
 * 保存当前皮肤的各项设置，比如 颜色，边距
 */
import React, { Component } from 'react';
import {
	Dimensions,
	PixelRatio
} from 'react-native';

const { width, height } = Dimensions.get('window');

// 计算 750px 设计稿下的元素，对应在不同手机屏，应该显示多大尺寸
function size(size){
	size = size / 2;
	return size * width / 375;
}
// 为了兼容 Android，lineHeight 需要取整数
function lineHeight(size){
	return Math.round(size(size));
}
// 计算边框的尺寸，实现细线边框效果
function border(size){
	return size / PixelRatio.get();
}

const ThemeConfig = {
	// 皮肤的公共配置
	// 颜色相关
	color: {
		mainBgColor: 'white',
		primaryColor: 'red'
	},
	fontSize: {

	},
	padding: {

	},
	margin: {

	},
	// 按组件分类
	card: {
		title: {
			color: '',
			fontSize: 26
		}
	},
	// 动态计算的尺寸
	size: size,
	lineHeight: lineHeight,
	borderWidth: border
};

export default ThemeConfig;