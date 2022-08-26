import React from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	StatusBar,
	Platform,
} from 'react-native';

import { colors } from '../utils/colors';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default function CustomStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={[styles.statusBar, { backgroundColor }]}>
			<SafeAreaView>
				<StatusBar translucent backgroundColor={backgroundColor} {...props} />
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	statusBar: {
		height: STATUSBAR_HEIGHT,
	},
	appBar: {
		backgroundColor: colors.colorPrimary,
		height: APPBAR_HEIGHT,
	},
	content: {
		flex: 1,
		backgroundColor: colors.colorPrimary,
	},
});
