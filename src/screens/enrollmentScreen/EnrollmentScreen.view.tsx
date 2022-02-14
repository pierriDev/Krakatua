import React, {useEffect, useState} from 'react';
import {EnrollmentScreenViewProps} from './EnrollmentScreen.types';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

import Icon from '@/components/icon/Icon';
import Background from '@/components/background/Background';
import {
  white,
  black,
  mid_grey,
  main_yellow,
} from 'native-base-theme/variables/colors';
import I18n from '@/localisation/I18n';
import TextInput from '@/components/textInput/TextInput';
import ListCellItem from '@/components/listCellItem/ListCellItem';
import AlertCard from '@/components/alertCard/AlertCard';
import Button from '@/components/button';

import styles from './EnrollmentScreen.styles';
import SelectDropdown from '@/components/selectDropdown/SelectDropdown';

const EnrollmentScreenView = ({
  treinos,
  setIsVisible,
  setClasstime,
  classTime,
  isVisible,
  toggleClassModal,
  handleBackButton,
  handleOpenCamera,
}: EnrollmentScreenViewProps) => {
  return (
    <>
      <Background />
      <View style={styles.logoContainer}>
        <Icon name="Logo" width={200} height={50} color={white} />
      </View>
      <ScrollView style={styles.infoContainer}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            onPress={() => {
              handleBackButton();
            }}>
            <Icon name={'ChevronLeft'} width={34} height={33} color={black} />
          </TouchableOpacity>
        </View>
        <Text style={styles.pageTitle}>{I18n.t('enrollment')}</Text>
        <View style={styles.input}>
          <TextInput label={I18n.t('name_label')} />
        </View>
        <View style={styles.input}>
          <TextInput label={I18n.t('login_username_label')} />
        </View>
        <View style={styles.input}>
          <TextInput label={I18n.t('address_label')} />
        </View>
        <View style={styles.input}>
          <TextInput label={I18n.t('birth_date_label')} />
        </View>
        <View style={styles.input}>
          <TextInput label={I18n.t('rg_label')} />
        </View>
        <View style={styles.input}>
          <TextInput label={I18n.t('cpf_label')} />
        </View>
        <View style={styles.input}>
          <TextInput label={I18n.t('login_password_label')} />
        </View>
        <View style={styles.input}>
          <TextInput label={I18n.t('repeat_password_label')} />
        </View>
        <View style={styles.input}>
          {classTime ? (
            <ListCellItem
              primaryText={`${treinos[classTime - 1].titulo} | ${
                treinos[classTime - 1].hora_inicio
              } | ${treinos[classTime - 1].hora_final}`}
              primaryTextColor={mid_grey}
              onBodyPress={() => {
                toggleClassModal();
              }}
              onRightIconPress={() => {
                toggleClassModal();
              }}
              hasLeftIcon={false}
              rightIconName={'ChevronRight'}
              rightIconColor={mid_grey}
            />
          ) : (
            <ListCellItem
              primaryText={I18n.t('training_label')}
              primaryTextColor={mid_grey}
              onBodyPress={() => {
                toggleClassModal();
              }}
              onRightIconPress={() => {
                toggleClassModal();
              }}
              hasLeftIcon={false}
              rightIconName={'ChevronRight'}
              rightIconColor={mid_grey}
            />
          )}
          <SelectDropdown
            mapping={treinos}
            visible={isVisible}
            onPress={setClasstime}
            closeModal={setIsVisible}
          />
        </View>
        <View style={styles.input}>
          <ListCellItem
            primaryText={I18n.t('photo_label')}
            primaryTextColor={mid_grey}
            onBodyPress={() => {handleOpenCamera()}}
            onRightIconPress={() => {handleOpenCamera()}}
            hasRightIcon={false}
            hasLeftIcon={true}
            leftIconType={'Camera'}
            leftIconColor={main_yellow}
          />
          <View style={styles.helperContent}>
            <AlertCard
              iconName={'Information'}
              cardType={'info'}
              content={I18n.t('photo_helper')}
              centerIcon
            />
          </View>
        </View>
        <View style={styles.input}>
          <Button
            title={I18n.t('contract_download_label')}
            onPress={() => {handleOpenCamera()}}
          />
          <View style={styles.helperContent}>
            <AlertCard
              iconName={'Information'}
              cardType={'info'}
              content={I18n.t('contract_helper_label')}
              centerIcon
            />
          </View>
          <View style={styles.input}>
            <ListCellItem
              primaryText={I18n.t('contract_attach_label')}
              primaryTextColor={mid_grey}
              onBodyPress={() => {}}
              onRightIconPress={() => {}}
              hasRightIcon={false}
              hasLeftIcon={true}
              leftIconType={'Attach'}
              leftIconColor={main_yellow}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title={I18n.t('login_signup_label')} onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EnrollmentScreenView;
