import React from 'react'
import { StyleSheet, Text, View,FlatList, Pressable, Platform } from 'react-native';
import data from '../data/data.json';
import { LinearGradient } from 'expo-linear-gradient';


// function renderCategoryItem(itemData) {
const RenderCategoryItem = React.memo(({ itemData, navigation }) => {
  function pressHandler() {
  navigation.navigate('details'
  , {
  Id: itemData.item.id,
  });
  }
return (
  <View style={styles.gridItem}>
    <LinearGradient
    // Background Linear Gradient
    style={styles.linear}
    colors={['#000000','#2E2E2E']}
    start={{ x: 0, y: 1 }} 
    end={{ x: 1, y: 0 }} 
    >
      <Pressable
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [
      styles.button,
      pressed ? styles.buttonPressed : null,
      ]}
      onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{itemData.item.category}</Text>
        </View>
      </Pressable>
    </LinearGradient>
  </View>
  );
});

const Main = ({ navigation }) => {
  // const renderCategoryItem = ({ item }) => (
  //   <RenderCategoryItem itemData={{ item }} navigation={navigation} />
  // );
return (
  <View style={styles.container}>
      <View>
        <FlatList 
        data={data}
        // renderItem={renderCategoryItem}
        renderItem={({item})=>{
          return(
            <RenderCategoryItem itemData={{ item }} navigation={navigation} />
          )
        }}
        keyExtractor={(item)=>item.id.toString()}
        maxToRenderPerBatch={5}
        windowSize={5}
        updateCellsBatchingPeriod={50}
        // ItemSeparatorComponent={<View style={{height:10}}/>}
        // ListEmptyComponent={<Text style={[styles.card,styles.cardtext]}>No items founds</Text>}
        // ListHeaderComponent={<Text style={styles.footer}>Start of list</Text>}
        // ListFooterComponent={<Text style={styles.footer}></Text>}
        // numColumns={2}
        />
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
  },
  linear:{
    flex:1
  },
  gridItem: {
    flex: 1,
    margin: 15,
    marginHorizontal: 20,
    height: 80,
    borderRadius: 8,
    elevation: 4,
    // backgroundColor: '#000000',
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
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color:'white',
  },
  footer:{
    backgroundColor:'#000000',
    fontSize:20
  }
});

export default Main;
