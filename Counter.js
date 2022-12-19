import React from 'react';
import {View, Button, Text, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {decrement, increment} from './counterSlice';
import {useGetMoviePlotQuery} from './api';

export const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const {data, error, isLoading} = useGetMoviePlotQuery();
  console.log({data});
  console.log({error});

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Button onPress={() => dispatch(increment())} title="Increment" />
        <Text>{count}</Text>
        <Text>{data ? data.Plot : 'no data received yet'}</Text>
        <Button onPress={() => dispatch(decrement())} title="Decrement" />
      </View>
    </SafeAreaView>
  );
};
