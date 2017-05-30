# React Fixed Data Representation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## What it's all about
A table made with the [react-fixed-table](https://facebook.github.io/fixed-data-table/) component.
The fixed part of the table comes from the ads data and the scrollable portion comes from ad_metrics.
Ad_metrics is joined on ads at remote_id. Both sections show remote_id to show that it is sorting properly.

The sort is accomplished by the function below in the apps component.

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

## Get Started

Clone this repository onto your computer and install the dependencies
```
> npm install
```

Start the server
```
> npm start
```

Start the tests
```
> npm test
```
