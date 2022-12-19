import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {store} from './store';

import {Counter} from './Counter';

// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

const plot =
  'Thinking he can overshadow an unknown actress in the part, an egocentric actor unknowingly gets a witch cast in an upcoming television remake of the classic sitcom Bewitched (1964).';

describe('App', () => {
  it('fetches correctly', async () => {
    const {getByText} = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(getByText('no data received yet')).toBeDefined();

    // Note: this works without mocking; does the actual request!
    await waitFor(() => screen.findByText(plot));

    expect(plot).toBeDefined();
  });
});
