import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.box}>
					<Text> 1/6 </Text>
				</View>
				<View style={{backgroundColor:'skyblue',flex:2,width:200,borderWidth:3,}}>
					<Text> 2/6 </Text>
				</View>
				<View style={{backgroundColor:'skyblue',flex:3,width:200,borderWidth:3,}}>
					<Text> 3/6 </Text>
				</View>
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
		width:200,
		borderWidth:3,
		borderRadius:3,
		borderColor:'grey',
    backgroundColor:'red',
  },
});
