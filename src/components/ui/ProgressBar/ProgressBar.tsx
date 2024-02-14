import { FC } from 'react'
import React from 'react'
import { Text, View } from 'react-native'

import styles from './ProgressBar.styles'

interface Props {
  progress: number
}

const ProgressBar: FC<Props> = ({ progress }) => {
  return (
    <View style={styles.progressbar}>
      <Text style={styles.text}>Всего осталось бесплатных попыток для поиска в этом месяце:</Text>
      <View style={styles.full}>
        <View style={[styles.progress, { width: `${progress * 10}%` }]}></View>
      </View>
      <Text style={styles.progressNum}>{progress}/10</Text>
    </View>
  )
}

export default ProgressBar
