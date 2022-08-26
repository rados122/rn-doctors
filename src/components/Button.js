import React from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { colors } from '../utils/colors';

export default function Button({ children }) {
	return <TouchableOpacity activeOpacity={0.8} style={styles.container}>
		{children}
	</TouchableOpacity>;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.colorSecondary,
		width: 44,
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
});
