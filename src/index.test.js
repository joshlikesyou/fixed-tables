import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { sortAdMetrics } from './app';
import ads from './data/ads';
import ad_metrics from './data/ad_metrics';

it('renders app component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('The New Ads Metrics', () => {
  test('Match the Ads data on remote_id', () => {
    const a = new App();
    const size = a.state.ads.length;
    a.sortAdMetrics(ad_metrics);
    for(let i = 0; i < size; i++) {
      const adRemote = a.state.ads[i]["remote_id"]
      const adMetRemote = a.state.sorted_metrics[i]["remote_id"]
      expect(adRemote).toBe(adMetRemote);
    }
  })
})
