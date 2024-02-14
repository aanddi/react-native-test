import { ReactNode } from 'react'
import React from 'react'
import { Image, View } from 'react-native'

import Logo from '@assets/Logo/logo.png'

import { styles } from './Layout.style'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.page}>
      <View style={styles.logo}>
        <Image source={Logo} />
      </View>
      {children}
    </View>
  )
}
