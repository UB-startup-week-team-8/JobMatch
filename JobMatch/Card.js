import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Card({ card }) {
  const { image, name, title, company, description, moreInfo } = card;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.description}>{description}</Text>
          {expanded && <Text style={styles.moreInfo}>{moreInfo}</Text>}
          <TouchableOpacity onPress={toggleExpanded} style={styles.moreInfoButton}>
            <Text style={styles.moreInfoButtonText}>{expanded ? 'Less Info' : 'More Info'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    paddingTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 5,
  },
  company: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
    description: {
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
  moreInfo: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  moreInfoButton: {
    marginTop: 10,
    backgroundColor: '#E8E8E8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  moreInfoButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});