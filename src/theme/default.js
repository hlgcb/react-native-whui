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
		mainBgColor: '#f2f2f2',		// 主背景色
		primaryColor: '#659AF0',	// 主色调，蓝色
		sucessColor: '#78C559',		// 成功颜色
		primaryTextColor: '#fff',	// 主色调区域的文字颜色，白色
		mainTextColor: '#333',		// 主要文字颜色
		secondTextColor: '#666',	// 次要文字颜色
		tipsTextColor: '#999',		// tip文字颜色
		requiredTextColor: '#DC4444',	// 必填项的 * 颜色
		nickTextColor: '#F46C0E',	// 昵称文本颜色
		linkTextColor: '#507DAF',	// 链接文本颜色
		actionTextColor: '#508CEE',	// 操作文本颜色
		splitLineColor: 'rgba(0, 0, 0, 0.2)',	// Tabbar 分隔线颜色
		white: 'white'
	},
	fontSize: {
		navigatorTitle: 34,		// 导航标题
		titleText: 32,			// 导航操作文本，浮层标题，浮层按钮
		actionText: 30,			// 
		commonText: 28,			// 最常见的文本
		emptyText: 26,			// 空文本
		tipsText: 24			// 描述文本
	},
	padding: {
		cardInner: size(30),	// 卡片内部
	},
	margin: {
		cardBottom: size(20),	// 卡片底部的间距，20
	},
	borderRadius: 4,
	//
	window: {
		width: width,
		height: height
	},
	// 动态计算的尺寸
	size: size,
	fontSize: size,
	lineHeight: lineHeight,
	borderWidth: border
};

export default ThemeConfig;