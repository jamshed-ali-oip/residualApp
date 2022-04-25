import React from 'react';
import Dashboard from './screens/Dasboard';
import Promotion from './screens/promotion';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Profile from './screens/Profile';
import Products from './screens/Products';
import Invoices from './screens/Invoices';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import ProductsStack from './ProductsStack';

const Tabs = AnimatedTabBarNavigator();

const MainStack = () => {
  return (
    <Tabs.Navigator
      initialRouteName="dashboard"
      tabBarOptions={{
        activeTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'red',
        },
        activeBackgroundColor: '#7124BC',
      }}
      appearance={{
        tabBarBackground: '#F1F4F7',
      }}>
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={size ? size : 26}
              color={focused ? color : '#A1A2AB'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Products"
        component={ProductsStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Feather
              name="box"
              size={size ? size : 26}
              color={focused ? color : '#A1A2AB'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Promotions"
        component={Promotion}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Foundation
              name="clipboard-notes"
              size={size ? size : 26}
              color={focused ? color : '#A1A2AB'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Invoices"
        component={Invoices}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={size ? size : 26}
              color={focused ? color : '#A1A2AB'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome
              name="user-circle-o"
              size={size ? size : 26}
              color={focused ? color : '#A1A2AB'}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainStack;
