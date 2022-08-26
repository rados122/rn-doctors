import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/components/Header'
import { colors } from './src/utils/colors'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomStatusBar from './src/components/CustomStatusBar';
import Body from './src/components/Body';
import { mockApi } from './src/apis';

export default function App() {
  const [search, setSearch] = useState('');
  //Search Doctor follow city, facility and area_of_expertise
  const renderData = mockApi.doctors.filter((e) => e.city.includes(search) || e.facility.includes(search) || e.area_of_expertise.includes(search))
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={colors.colorPrimary} barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Header />
        <Body search={search} setSearch={setSearch} data={renderData} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
});
