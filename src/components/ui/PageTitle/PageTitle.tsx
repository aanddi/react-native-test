import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type TitleProps = {
  children: ReactNode
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20
  },
  text: {
    color: '#000',
    fontSize: 22
  }
})

const PageTitle: FC<TitleProps> = ({ children }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default PageTitle
