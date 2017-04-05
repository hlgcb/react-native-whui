import { TouchableOpacity, View, Text, Component } from 'react-native'; 

class Button extends Component {
	render(){
		return (
			<TouchableOpacity activeOpacity={1}>
				{this.props.text}
			</TouchableOpacity>
		);
	}
}

module.exports = Button;