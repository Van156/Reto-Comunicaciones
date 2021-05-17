import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function TopTabs(props) {
  const {setSelectedTab, index, selectedTab} = props;
  const styles = _styles(selectedTab);
  return (
    <TouchableOpacity style={styles.container} onPress={()=> setSelectedTab(index)} >
      <View style={styles.tab}>
        <Text style={{color: selectedTab === index ? 'black' :'white'}}>{index + 1}</Text>
      </View>
    </TouchableOpacity>
  );
}

const _styles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'gray',
      borderWidth: 2,
      alignSelf: 'flex-start',
      minHeight: 40,
      justifyContent: 'center',
      width: 60,
      alignItems: 'center',
    },
    tab: {},
  });
};
export default TopTabs;
