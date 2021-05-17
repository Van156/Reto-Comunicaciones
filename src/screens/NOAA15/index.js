import React, {useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {SampleDateCard} from '../../components';
import {pushScreen} from '../../navigation/Navigation';
import MainLayout from '../../layouts';
import {SAMPLE_DETAIL} from '../../navigation/screens';
import * as wp from '../../assets/images/16-05-21/index';
import {canal1, canal2, canal3} from '../../assets/images/16-05-21/index';

function NOAA15(props) {
  const goToSampleDetail = (images) => {
    pushScreen('NOAA15', SAMPLE_DETAIL.name,{images});
  };
  const samples = [
    {
      date: 'Sábado 15 de mayo de 2021',
      images: [
        {description: 'Esto es una imagen de muestra', img: canal1},
        {description: '', img: canal2},
        {description: '', img: canal3},
      ],
    },
  ];
  return (
    <MainLayout>
      <View style={{width: '100%'}} />

      <FlatList
        data={samples}
        renderItem={({item, index}) => {
          const {date, images} = item

          return <SampleDateCard  date={date} goToSampleDetail={()=>goToSampleDetail(images)} />;
        }}
      />
    </MainLayout>
  );
}

export default NOAA15;
