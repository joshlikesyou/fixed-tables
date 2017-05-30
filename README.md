# React Fixed Data Representation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## What it's all about
A quick little table made with the [react-fixed-table](https://facebook.github.io/fixed-data-table/) component.
The first column is set to fixed while all the rest are scrollable
underneath. All data comes from an outside js file containing objects
populated with the data.

## Get Started

Clone this repository onto your computer and install the dependencies
with
```
npm install
```

## Sorting Tables

Using the one table to sort the other

```javascript
sort_ad_metrics = () => {
  ads.map((ad, index) => {
    const remote_id = ad.remote_id;
    ad_metrics["rows"].map((ad_m) => {
      if (ad_m.remote_id === remote_id) {
        this.state.sorted_metrics.push(ad_m);
      }
    });
  });
};
```

After that `npm start` will start up the development server and kick
off the table to run in your localhost::3000
