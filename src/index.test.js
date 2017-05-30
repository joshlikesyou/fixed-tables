import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ads from './data/ads';
import ad_metrics from './data/ad_metrics';

it('renders app component crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

const appy = new App()
console.log(App.keys);

describe('The New Ads Metrics', () => {
  test('matches the Ads name', () => {
  // expect(thing).toEqual(1);
  });
});
