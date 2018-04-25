/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  SectionList,
  Dimensions,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      }
    }


  componentDidMount(){
    return fetch('http://192.168.8.101:1338/Inventory/return-all-json',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authentication': 'CHEESYSTOCK'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });

      console.log(this.state.dataSource)

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={{ fontSize: 25, paddingBottom: 30 }}>Cheese Stock</Text>

        <Text style={{ justifyContent: 'space-around' }}>Factory, Country, Cheese, Stock</Text>


        <FlatList
          data = {this.state.dataSource['inventory']}
          renderItem={ ({item}) =>
            <View style={styles.cardContainer}>
              <Text>
                {item.factoryID.factoryLocation},
                {item.factoryID.factoryCountry},
                {item.cheeseID.cheeseName},
                {item.stock}
              </Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15
  },
  cardContainer: {
    width: Dimensions.get('window').width - 30,
    // height: 150,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
    elevation: 2,
  },
});
