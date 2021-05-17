import React, { useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import MainLayout from '../../layouts';
import {SampleDateCard} from '../../components';
function NOAA19(props) {
  useEffect(()=>{
alert('Sección aun en desarrollo')
  }, [])
  return (
    <MainLayout>
      <View style={{width: '100%'}}>
        {/* <FlatList
          data={[0, 1, 2, 3, 4]}
          renderItem={({item, index}) => {
            return <SampleDateCard />;
          }}
        /> */}
      </View>
    </MainLayout>
  );
}

export default NOAA19;
