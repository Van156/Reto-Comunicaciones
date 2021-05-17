import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts} from '../../../utils/theme';
function SampleDateCard(props) {
  const {goToSampleDetail, date} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToSampleDetail()}>
      <Text style={{...fonts.priceText, color: 'black'}}>{date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(155,155,155,0.7)',
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
  },
});

export default SampleDateCard;
