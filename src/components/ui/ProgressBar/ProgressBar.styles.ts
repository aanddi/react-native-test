import { StyleSheet } from 'react-native'

import { BLACK, GRAY, PRIMARY_DARK, YELLOW } from '@/styles/theme.styles'

export const styles = StyleSheet.create({
  progressbar: {
    marginLeft: 23,
    marginRight: 23,
    marginTop: 20
  },
  text: {
    width: 263,
    color: PRIMARY_DARK
  },
  full: {
    backgroundColor: YELLOW,
    width: '100%',
    height: 10,
    borderRadius: 20,
    marginTop: 15
  },
  progress: {
    backgroundColor: GRAY,
    height: 10,
    borderRadius: 20
  },
  progressNum: {
    marginTop: 7,
    textAlign: 'right',
    color: BLACK
  }
})

export default styles
