import { TouchableOpacity, View, Text } from 'react-native'; 

class Button extends Componenent {
	render(){
		return (
			<TouchableOpacity activeOpacity={1}>
				按钮
			</TouchableOpacity>
		);
	}
}

module.exports = Button;