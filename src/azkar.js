import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Platform } from 'react-native';
import data from '../data/data.json';
import Counter from '../components/counter';

const Azkar = ({route,navigation}) => {

const catId = route.params.Id;
const displayedDetails = data.find((item) => item.id==catId);

useLayoutEffect(() => {
    const selectedCategory = data.find((category) => category.id === catId);
  
    if (selectedCategory) {
      const categoryTitle = selectedCategory.category;

      navigation.setOptions({
        title: categoryTitle,
      });
    }
  }, [catId, navigation, data]);

    return (
        <View style={styles.container}>
        <FlatList 
        // data={data[catId-1].array}
        data={displayedDetails.array}
        // -1 because index from 0
        renderItem={({item})=>{
            return(
            <View style={styles.gridItem}>
                {/* <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
                ]}
                // onPress={pressHandler}
                > */}
                    <View style={styles.innerContainer}>
                        <Text style={styles.title}>{item.text}</Text>
                        <Counter initialCount={item.count} catId={catId} selectedOne={displayedDetails.array}></Counter>
                    </View>
                {/* </Pressable> */}
            </View>
            )
            }}
            keyExtractor={(item)=>item.id.toString()}
        // ItemSeparatorComponent={<View style={{height:10}}/>}
        // ListEmptyComponent={<Text style={[styles.card,styles.cardtext]}>No items founds</Text>}
        // ListHeaderComponent={<Text style={styles.footer}>Start of list</Text>}
        // ListFooterComponent={<Text style={styles.footer}>End of list</Text>}
        // numColumns={2}
        />
        </View>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#242424',
},
  gridItem: {
    flex: 1,
    margin: 15,
    marginHorizontal: 20,
    // padding:5,
    // height: 100,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#000000',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    //عملت اوفر فلو هيدن علشان البوردر بتاع البريس وعملت بلات فورم علشان  لما عملت اوفر فلو الشادو اختفي فال الابل
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    // padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color:'#FFFFFF',
    padding: 16,
    letterSpacing:3
  },
});

export default Azkar;
