/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Screen from './src/View';
import counters from './src/index';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

const store = createStore(counters);

const App=()=>{
  return(
    <Provider store={store}>
        <Screen/>
    </Provider>
  )
}


export default App;