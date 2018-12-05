import React from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';

import contacts from './contacts';

const MakeContact=(contact)=>(
	<View >
		<Text> {contact.name} </Text>
		<Image 
			source={require('./assets/Moab.jpeg')}
			style={{height:60,width:150}}
		/>
	</View>
)

const extractKey=(contact)=>String(contact.key); //expected key is of type string for FlatList

export default class App extends React.Component {
	render() {
	
    return (
			<View style={styles.container}>
				{/*data={} => data as array */}
				{/*renderItem={} =>render single item */}
				{/*keyExtractor={}=>extract key and convert it to string if key are not as expected */}
				<FlatList
					data={contacts} 
					renderItem={MakeContact}  
					keyExtractor={extractKey} 
				/>

      </View>
    );
  }
}


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
