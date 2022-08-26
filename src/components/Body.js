import React from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import DoctorItem from './DoctorItem';

export default function Body({ data, search, setSearch }) {
	return <View style={styles.container}>
		<View style={styles.viewTextInput}>
			<TextInput value={search} onChangeText={setSearch} placeholder="Search doctor ..." placeholderTextColor={colors.placeholderColor} />
		</View>
		<View style={styles.scrollView}>
			<FlatList
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={({ item, index }) => {
					return (
						<DoctorItem wrapperStyle={[index > 0 && { marginTop: 12 }, index === data.length - 1 && { marginBottom: 12 }]} item={item} />
					);
				}}
			/>
		</View>
	</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.mainColor,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		marginTop: -12,
		paddingTop: 20,
		paddingHorizontal: 16,
	},
	viewTextInput: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.58,
		shadowRadius: 2.00,
		elevation: 12,
		width: '100%',
		backgroundColor: colors.mainColor,
		height: 44,
		borderRadius: 8,
		justifyContent: 'center',
		paddingHorizontal: 12,
	},
	scrollView: {
		marginTop: 24,
		flex: 1,
	}
});
