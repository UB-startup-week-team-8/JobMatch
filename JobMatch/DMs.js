import React, { TouchableHighlight, useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text, TouchableOpacity } from 'react-native';

const DMListScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {

    const companies = [
      { id: 1, name: 'Netflix'},
      { id: 2, name: 'Amazon' },
      { id: 3, name: 'Google' },
      { id: 4, name: 'Meta' },
      { id: 5, name: 'Mirosoft' },
      { id: 6, name: 'Apple' },
      { id: 7, name: 'IBM' },
      { id: 8, name: 'Mozilla' },
      { id: 9, name: 'Dell' },
    ];
    setData(companies);
  };

  const renderItem = ({ item }) => (
    <View style={{padding: 20, marginTop: 0}}>
    <TouchableOpacity onPressIn={() => {opacity: 0.1}} onPressOut={() => {opacity: 1}}>
      <Text style={{fontSize: 20}}><Text style={{fontSize: 40}}>🔥</Text>{item.name}</Text>
      <Text style={{marginLeft: 0, marginTop: 10, color: 808080}}>Hello, we saw your application and we...</Text>
    </TouchableOpacity>  
    </View>
  );

  const ItemSeparator = () => <View style={{ height: 1, backgroundColor: 'gray' }} />;

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={false}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
};

export default DMListScreen;