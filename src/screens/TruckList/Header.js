import React, {ReactElement} from 'react';
import {StyleSheet, View, ViewStyle, Text} from 'react-native';
import {palette} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import {HeaderWidget} from './HeaderWidget';

export const Header = ({title, filter, setFilter, trucks}) =>  {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>{title}</Text>
      <HeaderWidget
        trucks={trucks}
        filter={filter}
        setFilter={setFilter}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 12,
    backgroundColor: palette.defaultPrimaryColor
  },
});
