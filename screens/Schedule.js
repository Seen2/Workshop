import React from 'react';
import { StyleSheet, SectionList, View, ImageBackground, Text } from 'react-native';

import ToggleButton from '../components/ToggleButton';

export default class ScheduleScreen extends React.Component {
	state={
		selectedvalue:'THURSDAY',
	}
	handleOnPress=(value)=>{
		this.setState({selectedvalue:value})
	}
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					style={styles.backgroundImage}
					source={require('../assets/react.png')} 
				>
					<Text style={styles.title}> React Europe </Text>

					<ToggleButton 
						items={['THURSDAY','FRIDAY']}
						value={this.state.selectedvalue}
						onPressing={this.handleOnPress}
					/>

				</ImageBackground>
			</View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor: '#ffff',
	},
	backgroundImage:{
		flex:0.35,
		textAlign:'center',
		justifyContent:'center',
		alignItems:'center',
	},
	title:{
		marginTop:60,
		fontSize:40,
		color:'white',
		backgroundColor:'transparent',

	},

	
});
