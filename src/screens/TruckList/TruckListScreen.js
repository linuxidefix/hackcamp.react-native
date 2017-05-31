import React, {ReactElement} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {ListView} from '@shoutem/ui';
import {Entypo} from '@expo/vector-icons';

import {Banner} from '../../components/Banner';
import {globalStyles} from '../../styles/globalStyles';
import {Footer} from './Footer';
import {Header} from './Header';
import { Button } from '../../components/Button';
import {filters} from "../../constants/filters";

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  }, row: {
    fontSize: 20,
  }
});

const filtring = {
  [filters.NONE]: (trucks) => trucks,
  [filters.ACTIVE]: (trucks) => trucks.filter(truck => truck.active),
  [filters.INACTIVE]: (trucks) => trucks.filter(truck => !truck.active),
};

export const TruckListScreen = ({appTitle, trucks, switchScreens, filter, setFilter, toggleTruck}) => {

  let filteredList = filtring[filter](trucks);

  const renderRow = (truck) => (
    <Text>Im a truck</Text>
  );

  return (
    <View style={globalStyles.container}>
      <Banner />
      <Header
        trucks={trucks}
        filter={filter}
        setFilter={setFilter}
      />
      <View style={{flex:7.5}}>
        <ListView
          data={filteredList}
          renderRow={renderRow}
        />
      </View>
      <View style={{flex: 0.5}}>
        <Button
          onPress={switchScreens}>
          <Text style={{fontSize: 20, color: 'white'}}>Add a truck</Text>
          <Entypo name="circle-with-plus" size={20} color='white'/>
        </Button>
      </View>
      <Footer trucks={trucks}/>
    </View>
  );
};
