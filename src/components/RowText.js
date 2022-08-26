import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { fonts } from '../utils/fonts';

export default function RowText({ type, value, wrapperStyle }) {
	return <View style={[styles.container, wrapperStyle]}>
		<Text style={[fonts.fontBlack15, { fontWeight: '700' }]}>{`${type}: `}</Text>
		<Text style={fonts.fontBlack15}>{value}</Text>
	</View>;
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
});
