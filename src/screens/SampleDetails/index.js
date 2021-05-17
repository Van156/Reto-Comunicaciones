import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {TopTabs} from '../../components';
import BackArrowLayout from '../../layouts/BackArrowLayout';
import {IMG_0} from '../../assets/images/index';
import {canal1, canal2} from '../../assets/images/16-05-21';
import * as wp from '../../assets/images/16-05-21/index';
import { fonts } from '../../utils/theme';
function SampleDetail(props) {
  const {images} = props;
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <BackArrowLayout>
      <View style={{ marginBottom: 30,backgroundColor: 'white', flex:1}} >
        <View><FlatList
          horizontal={true}
          data={images}
          renderItem={({item, index}) => {
            return <TopTabs setSelectedTab={setSelectedTab} index={index} selectedTab={selectedTab} />;
          }}
        /></View>
        
        <Image
          source={images[selectedTab].img}
          style={{width: '100%'}}
        />
        <View style={{marginTop: 30, backgroundColor:'white', alignSelf: 'center' }}>
          <Text style={{color:'red'}} >{images[selectedTab].description}</Text>
        </View>
      </View>
    </BackArrowLayout>
  );
}
export default SampleDetail;
