import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React, { FC } from 'react'
import { Image, View } from 'react-native'

import Discounts from '@/components/screen/Discounts/Discounts'
import Home from '@/components/screen/Home/Home'
import Profile from '@/components/screen/Profile/Profile'

import DiscountsIcon from '@assets/NavigationIcon/discounts.png'
import HomeIcon from '@assets/NavigationIcon/home.png'
import PofileIcon from '@assets/NavigationIcon/profile.png'

import { PRIMARY, PRIMARY_DARK, YELLOW } from '@/styles/theme.styles'

const Tab = createBottomTabNavigator()

const options = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: PRIMARY,
    elevation: 0,
    borderTopWidth: 0,
    paddingBottom: 10
  }
}

const route = [
  { name: 'Home', component: Home, icon: HomeIcon },
  { name: 'Discounts', component: Discounts, icon: DiscountsIcon },
  { name: 'Profile', component: Profile, icon: PofileIcon }
]

// не разобрался с svg иконками в native поэтому png пока что

const Navigations: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={options}>
        {route.map(elem => {
          return (
            <Tab.Screen
              name={elem.name}
              component={elem.component}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View
                      style={{
                        backgroundColor: focused ? YELLOW : PRIMARY_DARK,
                        borderRadius: 50,
                        padding: 10,
                        margin: 5
                      }}
                    >
                      <Image source={elem.icon} />
                    </View>
                  )
                }
              }}
            />
          )
        })}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigations
