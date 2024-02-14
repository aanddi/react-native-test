import React, { FC, ReactNode } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { WHITE } from '@/styles/theme.styles'

type Props = {
  children: ReactNode
}

const styles = StyleSheet.create({
  mainPage: {
    borderRadius: 50,
    height: '63%',
    backgroundColor: WHITE,
    marginTop: 10
  },
  container: {
    padding: 30
  }
})

const MainPage: FC<Props> = ({ children }) => {
  return (
    <ScrollView style={styles.mainPage}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  )
}

export default MainPage
