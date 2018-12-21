import React from 'react';
import { StyleSheet, SectionList, View, ImageBackground, Text } from 'react-native';

import ToggleButton from '../components/ToggleButton';


thursdaySection=[
	{title:'8:30AM',data:['Registration And BreakFast',]},
	{title:'10:00AM',data:['Confrence Keynote','Lucy Vatne',]},
]
fridaySection=[
	{title:'8:30AM',data:['Doubts And BreakFast',]},
	{title:'10:00AM',data:['Confrence Keynote','Brent',]},
]
export default class ScheduleScreen extends React.Component {
	state={
		selectedvalue:'THURSDAY',
	}
	handleOnPress=(value)=>{
		this.setState({selectedvalue:value})
	}
	renderItem=({item,index,section})=>{
		return(
			<View style={styles.item}>
				<Text style={{fontSize:20,}}>{item}</Text>
			</View>
		);
	}
	renderSectionHeader=({section: {title}}) => (
		<Text style={styles.header}>{title}</Text>
	)
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
			<SectionList
				renderItem={this.renderItem}
				renderSectionHeader={this.renderSectionHeader}
				sections={this.state.selectedvalue==='THURSDAY'?thursdaySection:fridaySection}
				keyExtractor={(item,index)=>item+index}
			/>
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
		flex: 1,
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
	header:{
		fontSize:25,
		fontWeight:'bold',
		backgroundColor:'#dddddd',
		paddingLeft:10,
	},
	item:{
		backgroundColor:'white',
		paddingLeft:20,
	},
	
});
