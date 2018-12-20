import React from 'react';
import { StyleSheet, SectionList, View, Image, Text,TouchableOpacity } from 'react-native';

export default class ToggleButton extends React.Component {


	renderItems=(item,index,list)=>{
		return(
			<TouchableOpacity 
				key={index}
				style={[styles.container,{marginLeft:index?20:0}]}
			> 
				<Text style={[styles.button,{marginHorizontal:index!==0?10:0}]}>{item}</Text>
			</TouchableOpacity>

		);
	}
	render() {
		const {items,value}=this.props;
		return (
			<View style={{flexDirection:'row',}}>
				{items.map(this.renderItems)}
			</View>
    );
  }
}


const styles = StyleSheet.create({
	container: {
		alignItems:'center',
		textAlign:'center',
		height:30,
		paddingHorizontal:20,
		//marginHorizontal:10,
		backgroundColor:'purple',
		borderRadius:15,
	},
	button:{
		color:'white',
		fontSize:20,
	},
});
