import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { colors } from '../utils/colors';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import Icon from 'react-native-vector-icons/AntDesign'
import Button from './Button';
import { fonts } from '../utils/fonts';

export default function Header({ }) {
	return <SafeAreaView style={styles.container}>
		<View>
			<Text style={[fonts.fontWhite18, styles.fontBold]}>Welcome to app</Text>
			<Text style={[fonts.fontWhite14, styles.fontBold, { marginTop: 12 }]}>
				How do you feel today?
			</Text>
		</View>
		<Button>
			<Icon name='appstore1' size={24} color={colors.mainColor} />
		</Button>
	</SafeAreaView>;
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 20,
		alignItems: 'center',
		backgroundColor: colors.colorPrimary,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	fontBold: {
		fontWeight: '600'
	}
});
