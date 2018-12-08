import React from 'react';
import { StyleSheet, SectionList, View, Image, Text } from 'react-native';

import contacts from './contacts';

export default class App extends React.Component {
	render() {
    return (
			<View style={styles.container}>
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>Confrence Keynote </Text>
					<Text style={styles.subtitle}>Thursday, May 18, 10-10:45 AM</Text>
					<Text style={styles.description} >Hear about some stuff.</Text>
				</View>
				<View style={styles.speakerContainer}>
					<Image 
						style={styles.image}
						source={require('./assets/Moab.jpeg')}
					/>
					<View style={{justifyContent:'center',}}> 
						<Text style={styles.speakerName}> Lucy Vatne </Text>
						<Text style={styles.speakerBio}> The best doggo </Text>
					</View>
				</View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor: '#ffff',
		paddingTop:25,
	},
	detailsContainer:{
		paddingVertical:30,
		paddingHorizontal:20,
		borderBottomWidth:StyleSheet.hairlineWidth,
		borderColor:'grey',
	},
	title:{
		fontSize:24,
		fontWeight:'bold' || 500,
		marginBottom:4,
	},
	subtitle:{
		fontSize:15,
		fontWeight:'bold' || 500,
		marginBottom:12,
	},
	description:{
		fontSize:13,
	},
	speakerContainer:{
		paddingVertical:30,
		paddingHorizontal:20,
		flexDirection:'row',
	},
	image:{
		height:80,
		width:80,
		borderRadius:40,
		backgroundColor:'black',
	},
	speakerName:{
		fontSize:18,
		color:'purple',
	},
	speakerBio:{
		fontSize:13,
	},
});
























//source={require('./assets/Moab.jpeg')}
//
//const sections=contacts.map(contact=>({title:contact.name,data:[contact.phone]}));
/*
const header=({section: {title}}) => (
	<Text style={{fontWeight: 'bold',fontSize:20,}}>{title}</Text>
)
const makeContact=({item, index, section}) => (
	<View style={styles.box}>
		<Text key={index}>{item}</Text>
		<Image 
			style={{flex:1,height:60,width:150}}
		/>
	</View>
)

//const extractKey=(contact)=>String(contact.key); //expected key is of type string for FlatList
*/
