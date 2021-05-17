import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';


import {fonts} from '../utils/theme';

function BackArrowLayout(props) {
  const {children} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
<Text style={{...fonts.tittle}} >Samples details</Text>
      </View>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={{
          uri:
            'https://i2.wp.com/clipset.com/wp-content/uploads/2016/04/Tierra-desde-ISS.jpg?fit=1024%2C681&ssl=1',
        }}>
        <View style={styles.childContainer}>{children}</View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
  },
  headerText: {...fonts.tittle},
  childContainer: {
  
 flex:1
   
  },
});
export default BackArrowLayout;
