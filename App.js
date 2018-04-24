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
      cheeseArray: [
        {
          createdAt: 123,
          updatedAt: 1524496188888,
          id: 1,
          stock: 994,
          isDeleted: false,
          isBeingUpdated: false,
          factoryID: {
            createdAt: 1524480886656,
            updatedAt: 1524555469208,
            id: 1,
            factoryLocation: "Kurunegala",
            factoryCountry: "Sri Lanka",
            isDeleted: false
          },
          cheeseID: {
            createdAt: 123,
            updatedAt: 123,
            id: 1,
            cheeseName:" Cheese 1",
            cheeseDescription: "asdfa",
            cheesePrice: 12,
            isDeleted: false
          }
        },
        {
          createdAt: 124,
          updatedAt: 1524496189064,
          id: 2,
          stock: 966,
          isDeleted: false,
          isBeingUpdated: false,
          factoryID: {
            createdAt: 1524480895899,
            updatedAt: 1524480895899,
            id: 2,
            factoryLocation: "Wonka factory",
            factoryCountry: "Neverland",
            isDeleted: false
          },
          cheeseID: {
            createdAt: 124,
            updatedAt: 124,
            id: 2,
            cheeseName: "Cheese 2",
            cheeseDescription: "adfadf",
            cheesePrice: 13,
            isDeleted: false
          }
        },
        {
          createdAt: 1524555901704,
          updatedAt: 1524555901704,
          id: 3,
          stock: 341,
          isDeleted: false,
          isBeingUpdated: false,
          factoryID: {
            createdAt: 1524480895899,
            updatedAt: 1524480895899,
            id: 2,
            factoryLocation: "Wonka factory",
            factoryCountry: "Neverland",
            isDeleted: false
          },
          cheeseID: {
            createdAt: 124,
            updatedAt: 124,
            id: 2,
            cheeseName: "Cheese 2",
            cheeseDescription: "adfadf",
            cheesePrice: 13,
            isDeleted: false
          }
        },
      ]
      }
    }


  // componentDidMount(){
  //   return fetch('http://192.168.206.1:1337/Inventory')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson)
  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson,
  //       }, function(){
  //
  //       });
  //
  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }

  render() {

    // if(this.state.isLoading){
    //   return(
    //     <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
    //       <ActivityIndicator size="large" />
    //     </View>
    //   )
    // }

    return (
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={{ fontSize: 25, paddingBottom: 30 }}>Cheese Stock</Text>

        <Text style={{ justifyContent: 'space-around' }}>Factory, Country, Cheese, Stock</Text>


        <FlatList
          data = {this.state.cheeseArray}
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
