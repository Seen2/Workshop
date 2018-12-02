import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

import contacts from './contacts';

export default class App extends React.Component {
	render() {
	
    return (
			<View style={styles.container}>

				<ScrollView>
					{
						contacts.map(contact=>MakeContact(contact))
					}
				</ScrollView>
      </View>
    );
  }
}

const MakeContact=(contact)=>(
	<View key={contact.key}>
		<Text> {contact.name} </Text>
		<Image 
			source={require('./assets/Moab.jpeg')}
			style={{height:60,width:150}}
		/>
	</View>
	)

const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
	box: {
		//flexGrow:0,
		//flexShrink:1,
		//flexBasis:100,//changes within ups and downs
		flex: 1,
		width:200,
		borderWidth:3,
		borderRadius:3,
		borderColor:'grey',
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
