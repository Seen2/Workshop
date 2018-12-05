import React from 'react';
import { StyleSheet, SectionList, View, Image, Text } from 'react-native';

import contacts from './contacts';


const sections=contacts.map(contact=>({title:contact.name,data:[contact.phone]}));
const header=({section: {title}}) => (
	<Text style={{fontWeight: 'bold',fontSize:20,}}>{title}</Text>
)
const makeContact=({item, index, section}) => (
	<View style={styles.box}>
		<Text key={index}>{item}</Text>
		<Image 
			source={require('./assets/Moab.jpeg')}
			style={{flex:1,height:60,width:150}}
		/>
	</View>
)

const extractKey=(contact)=>String(contact.key); //expected key is of type string for FlatList

export default class App extends React.Component {
	render() {
    return (
			<View style={styles.container}>
				<SectionList
					  renderItem={makeContact}
						renderSectionHeader={header}
						sections={sections}
						keyExtractor={(item, index) => item + index}
			/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor: '#abce',
    alignItems: 'center',
		justifyContent: 'center',
		paddingTop:25,
  },
	box: {
		//flexGrow:0,
		//flexShrink:1,
		//flexBasis:100,//changes within ups and downs
		flex: 1,
		fontSize:15,
		width:200,
		borderWidth:3,
		borderRadius:3,
		borderColor:'grey',
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
