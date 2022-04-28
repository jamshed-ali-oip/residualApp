import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Profile from './Profile';
import EditProfile from './EditProfile';

const ProfileStackNav = createNativeStackNavigator();
const ProfileStack = props => {
  return (
    <ProfileStackNav.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="profile">
      <ProfileStackNav.Screen
        name="profile"
        component={Profile}
        {...props.navigation}
      />

      <ProfileStackNav.Screen
        name="editProfile"
        component={EditProfile}
        {...props.navigation}
      />
    </ProfileStackNav.Navigator>
  );
};

export default ProfileStack;
