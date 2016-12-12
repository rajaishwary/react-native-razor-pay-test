import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  NativeEventEmitter
} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

export default class razorPay extends Component {

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_XnAzuBWvAc5SZS',
          amount: '5000',
          name: 'foo',
          prefill: {
            email: 'akshay@razorpay.com',
            contact: '8955806560',
            name: 'Akshay Bhalotia'
          },
          theme: {color: '#F37254'}
        }
        RazorpayCheckout.open(options).then((data) => {
          console.log(data);
          // handle success
          alert(`Success: ${data.payment_id}`);
        }).catch((error) => {
          // handle failure
          console.log(error);
          alert(`Error: ${error.code} | ${error.description}`);
        });
      }}>
      <Text style = {styles.text}>Pay</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('razorPay', () => razorPay);