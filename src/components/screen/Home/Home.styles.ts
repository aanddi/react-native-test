import { StyleSheet } from 'react-native'

import { BLACK, PRIMARY, PRIMARY_DARK, WHITE } from '@/styles/theme.styles'

export const styles = StyleSheet.create({
  home: {},
  welcome: {
    gap: 15,
    flexDirection: 'row'
  },
  header: {
    marginLeft: 23,
    marginRight: 23
  },
  greetings: {
    color: BLACK
  },
  userName: {
    color: '#3C4732'
  },
  welcomeTetx: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: 'Ruberoid-Bold'
  },
  cards: {
    marginBottom: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  card: {
    flex: 1,
    flexBasis: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_DARK,
    borderRadius: 20,

    width: 80,
    height: 80
  },

  textCard: {
    color: WHITE,
    alignItems: 'center',
    marginTop: 5,
    fontSize: 8
  },
  slider: {
    flex: 1,
    backgroundColor: PRIMARY,
    height: 165,
    borderRadius: 25,
    overflow: 'hidden',
    width: '100%'
  }
})

export default styles
