import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ads from '../src/data/ads';
import ad_metrics from '../src/data/ad_metrics';
import {Table, Column, Cell} from 'fixed-data-table';

class AdCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MetricCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {rowIndex, field, data, order, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class App extends Component {
	constructor(props) {
		super(props);
    const sorted_metrics =[]
    this.state = {
      ads, sorted_metrics
    }
	}

  sortAdMetrics = () => {
    ads.map((ad, index) => {
      const remote_id = ad.remote_id;
      ad_metrics["rows"].map((ad_m) => {
        if (ad_m.remote_id === remote_id) {
          this.state.sorted_metrics.push(ad_m);
        }
      });
    });
  };

	render() {
    this.sortAdMetrics();
	  return (
	    <div>
      <h1> Fixed Data Table </h1>
	      <Table
		      rowHeight={50}
		      rowsCount={this.state.ads.length}
					width={1140}
					maxHeight={1000}
					headerHeight={50}>
					<Column
						header={<Cell>Name</Cell>}
						cell={<AdCell
								data={this.state.ads}
	              field="name"
						/>}
						width={150}
						fixed={true}
					/>
          <Column
            header={<Cell> Remote Id </Cell>}
            cell={<AdCell
                data={this.state.ads}
                field="remote_id"
            />}
            width={150}
            fixed={true}
          />
          <Column
            header={<Cell> Remote Id </Cell>}
            cell={<MetricCell
                data={this.state.sorted_metrics}
                field="remote_id"
            />}
            width={150}
          />
					<Column
						header={<Cell> Impessions </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="impressions"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> Reach </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="reach"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> Frequency </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="frequency"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> CPM </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="cpm"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> Spend </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="spend"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> CTR </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="ctr"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> Cost Per Inline Click </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="cost_per_inline_link_click"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> Actions:Goals </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="actions:goal"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> Actions:Link Click </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="actions:link_click"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> Cost Per Action Type:Cost Per Goal </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="cost_per_action_type:cost_per_goal"
						/>}
						width={150}
					/>
					<Column
						header={<Cell> Offsite Conversion </Cell>}
						cell={<MetricCell
								data={this.state.sorted_metrics}
	              field="actions:offsite_conversion"
						/>}
						width={150}
					/>
				</Table>
	    </div>
	  );
	}
}

export default App;
