'use strict'
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableHighlight,
	Dimensions,
	Animated,
  ListView,
  PixelRatio,
  Platform
} from 'react-native';
import React, {Component} from 'react'
import KeyboardAwareScrollView from './index.js'
import Theme from './../theme/default.js'

export default class Content extends Component{

  static propTypes = {
  ...KeyboardAwareScrollView.propTypes,
  style: React.PropTypes.object,
  padder: React.PropTypes.bool,
  disableKBDismissScroll: React.PropTypes.bool,
  enableResetScrollToCoords: React.PropTypes.bool
};

    render() {
    return (
      <KeyboardAwareScrollView
        style={styles.contentStyle}
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={(this.props.disableKBDismissScroll) ? null : { x: 0, y: 0 }}
        {...this.props}
      >
        {this.props.children}
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle : {
      flex: 1,
      backgroundColor: 'transparent',
  } 
})

