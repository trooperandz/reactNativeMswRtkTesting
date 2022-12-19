import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {store} from './store';

import {Counter} from './Counter';

// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('App', () => {
  it('fetches correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(getByText('no data received yet')).toBeDefined();
  });
});
