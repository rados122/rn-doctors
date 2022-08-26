import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import RowText from './RowText';
import Icon from 'react-native-vector-icons/AntDesign'

export default function DoctorItem({ wrapperStyle, item }) {
	return <View style={[styles.container, wrapperStyle]}>
		<View style={styles.info}>
			<View style={styles.avatar}>
				<Icon name='smile-circle' size={24} color={colors.colorPrimary} />
			</View>
			<View style={{ marginLeft: 12, }}>
				<Text style={[fonts.fontBlack16, { fontWeight: '700' }]}>{`Dr. ${item.first_name} ${item.last_name}`}</Text>
			</View>
		</View>
		<View style={{ marginTop: 12, borderTopWidth: 1, borderColor: colors.colorPrimary }}>
			<RowText wrapperStyle={{ marginTop: 12 }} type="City" value={item.city} />
			<RowText type="Email" value={item.email} />
			<RowText type="Expertise" value={item.area_of_expertise} />
			<RowText type="Facility" value={item.facility} />
		</View>
	</View>;
}

const styles = StyleSheet.create({
	container: {
		shadowColor: "#00000090",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.58,
		shadowRadius: 1.40,
		elevation: 12,
		backgroundColor: colors.mainColor,
		borderRadius: 16,
		padding: 16,
		borderColor: colors.colorPrimary + '20',
		borderWidth: 2,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatar: {
		width: 44,
		height: 44,
		borderRadius: 12,
		backgroundColor: colors.colorSecondary,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
