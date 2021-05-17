import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {fonts} from '../utils/theme';
function MainLayout(props) {
  const {children} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SDR retriever APP</Text>
        <Image
          source={{
            uri: 'https://www.qsl.net/on6jc/sat/tech/img/tiros.jpg',
          }}
          style={{width: 50, height: 50, borderRadius: 100}}
        />
      </View>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={{
          uri: 'https://www.qsl.net/on6jc/sat/tech/img/tiros.jpg',
        }}>

        <View style={styles.childContainer}>{children}</View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  },
  headerText: {...fonts.tittle},
  childContainer: {
    margin: 15,

    flex: 1,
  },
});
export default MainLayout;
