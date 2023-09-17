import React from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from './Card';

const fakeJobPosts = [
  {
    image: { uri: 'https://picsum.photos/200/200?random=1' },
    title: 'Software Engineer',
    company: 'ABC Inc.',
    location: 'New York, NY',
    description: 'We are seeking a talented software engineer to join our team...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. ',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=2' },
    title: 'Product Manager',
    company: 'XYZ Corp.',
    location: 'San Francisco, CA',
    description: 'We are looking for an experienced product manager to lead...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=3' },
    title: 'Data Analyst',
    company: '123 Co.',
    location: 'Chicago, IL',
    description: 'We are hiring a data analyst to analyze and interpret...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=4' },
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'Seattle, WA',
    description: 'We are seeking a creative UX designer to join our team...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=5' },
    title: 'Marketing Specialist',
    company: 'Marketing Agency',
    location: 'Los Angeles, CA',
    description: 'We are looking for a marketing specialist to develop...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=6' },
    title: 'Frontend Developer',
    company: 'Web Solutions',
    location: 'Austin, TX',
    description: 'We are hiring a frontend developer to build responsive...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=7' },
    title: 'Graphic Designer',
    company: 'Creative Agency',
    location: 'Miami, FL',
    description: 'We are seeking a talented graphic designer to create...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=8' },
    title: 'Accountant',
    company: 'Financial Services',
    location: 'Boston, MA',
    description: 'We are looking for an experienced accountant to manage...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=9' },
    title: 'Project Manager',
    company: 'Tech Solutions',
    location: 'Denver, CO',
    description: 'We are hiring a project manager to oversee...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  },
  {
    image: { uri: 'https://picsum.photos/200/200?random=10' },
    title: 'Sales Representative',
    company: 'Sales Agency',
    location: 'Dallas, TX',
    description: 'We are seeking a motivated sales representative to...',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.',
  }
];

export default function SwiperComponent() {
  const handleSwiped = (direction) => {
    console.log(`Swiped ${direction}`);
  };

  return (
    <View>
      <Swiper
        cards={fakeJobPosts}
        renderCard={(card) => <Card card={card} />}
        onSwipedLeft={() => handleSwiped('left')}
        onSwipedRight={() => handleSwiped('right')}
        onSwipedAll={() => { console.log('onSwipedAll') }}
        stackSize={2}
        stackSeparation={0}
        verticalSwipe={false}
      />
    </View>
  );
}
