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
import Theme from './../theme/default.js'

export default class Card extends Component{

  static propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
  dataArray: React.PropTypes.object,
  renderRow: React.PropTypes.object,
};

    render() {
    if (this.props.dataArray && this.props.renderRow) {
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      const dataSource = ds.cloneWithRows(this.props.dataArray);
      return (
        <ListView
          {...this.props}
          enableEmptySections
          dataSource={dataSource}
          renderRow={this.props.renderRow}
        />
      );
    }
    return (
      <View style = {styles.cardStyle}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle : {
      marginVertical: 5,
      marginHorizontal: 2,
      flex: 1,
      borderWidth: (1/PixelRatio.getPixelSizeForLayoutSize(1)),
      borderRadius: 2,
      borderColor: Theme.color.card_borderColor,
      flexWrap: 'wrap',
      backgroundColor: Theme.color.card_backgroundColor,
      shadowColor: Theme.color.card_shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 3,
  } 
})

