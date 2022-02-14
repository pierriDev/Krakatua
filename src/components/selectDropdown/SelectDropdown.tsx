import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {selectDropdownProps} from './SelectDropdown.types';
import styles from './SelectDropdown.styles';

const SelectDropdown = ({onPress, mapping, visible, closeModal}: selectDropdownProps) => { 

  const buttonPressed = (item: any) => {
    if(closeModal){
      onPress(item.id)
      closeModal(false)
    }else{
      onPress(item.id)
    }
  }
  return (
    visible ?
    <View style={styles.dropdown}>
      <ScrollView>
        {/* INTEGRATE WITH BACKEND LATER */}
        {mapping.map((item: any) => (
          <TouchableOpacity 
            style={styles.dropdownItem}
            onPress={
              () => buttonPressed(item)
            }
          >
            <Text style={styles.dropdownText}>
              {item.titulo} | {item.hora_inicio} - {item.hora_final}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    :
    null
  );
};

export default SelectDropdown;
