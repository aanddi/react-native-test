import React, { FC } from 'react'
import { FlatList, Image, Text, View } from 'react-native'

import MainPage from '@/components/elements/MainPage/MainPage'
import Layout from '@/components/layout/Layout'
import PageTitle from '@/components/ui/PageTitle/PageTitle'
import ProgressBar from '@/components/ui/ProgressBar/ProgressBar'

import card1 from '@assets/Home/Ico/1.png'
import card2 from '@assets/Home/Ico/2.png'
import card3 from '@assets/Home/Ico/3.png'
import card4 from '@assets/Home/Ico/4.png'
import card5 from '@assets/Home/Ico/5.png'
import card6 from '@assets/Home/Ico/6.png'
import card7 from '@assets/Home/Ico/7.png'
import card8 from '@assets/Home/Ico/8.png'
import screen from '@assets/Home/Slider/screen.png'
import UserIcon from '@assets/Home/User.png'

import styles from './Home.styles'

const Home: FC = () => {
  return (
    <Layout>
      <View style={styles.home}>
        <View style={styles.header}>
          <View style={styles.welcome}>
            <Image source={UserIcon} />
            <Text style={styles.welcomeTetx}>
              <Text style={styles.greetings}>Приветствую,</Text>
              {'\n'}
              <Text style={styles.userName}>ИмяПользователя</Text>
            </Text>
          </View>
        </View>
        <ProgressBar progress={5} />
        <MainPage>
          <PageTitle>Что вам нужно?</PageTitle>
          <View style={styles.cards}>
            <View style={styles.card}>
              <Image source={card1} />
              <Text style={styles.textCard}>Косметолог</Text>
            </View>
            <View style={styles.card}>
              <Image source={card2} />
              <Text style={styles.textCard}>Окулист</Text>
            </View>
            <View style={styles.card}>
              <Image source={card3} />
              <Text style={styles.textCard}>Психолог</Text>
            </View>
            <View style={styles.card}>
              <Image source={card4} />
              <Text style={styles.textCard}>Дантист</Text>
            </View>
            <View style={styles.card}>
              <Image source={card5} />
              <Text style={styles.textCard}>Препараты</Text>
            </View>
            <View style={styles.card}>
              <Image source={card6} />
              <Text style={styles.textCard}>Терапевт</Text>
            </View>
            <View style={styles.card}>
              <Image source={card7} />
              <Text style={styles.textCard}>Рентген</Text>
            </View>
            <View style={styles.card}>
              <Image source={card8} />
              <Text style={styles.textCard}>Диетолог</Text>
            </View>
          </View>
          <PageTitle>Скидки</PageTitle>
          <View style={styles.slider}>
            <Image source={screen} />
          </View>
        </MainPage>
      </View>
    </Layout>
  )
}

export default Home
