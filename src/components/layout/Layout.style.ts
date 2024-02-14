import { StyleSheet } from 'react-native'

import { PRIMARY } from '@/styles/theme.styles'

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: PRIMARY,
    paddingTop: 50,
    fontFamily: 'Ruberoid-Bold'
  },
  logo: {
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 25
  }
})
