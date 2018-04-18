import React, { Component } from 'react';
import { DatePicker, Button, Pagination, Progress } from 'antd';
import './App.less';


const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


class App extends Component {
  constructor() {
      super()
      this.state = {
          current: 2,
          percent: 0
      };
      this.onChange = this.onChange.bind(this);
  }


  componentWillMount() {
      if( !window.screen.lockOrientation ) return;
      window.screen.lockOrientation('portrait-primary');
  }

  onChange(date, dateString) {
      console.log(date, dateString);
      let {current, percent} = this.state;
      current++
      this.setState({
          current
      })
      setInterval(() => {
          percent++
          this.setState({
              percent
          })
      }, 10);
  }

  onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
  }

  render() {
    let {onChange, onShowSizeChange} = this;
    let {current, percent} = this.state;
    return (
        <div>
          <DatePicker onChange={onChange} />
          <br />
          <MonthPicker onChange={onChange} placeholder="Select month" />
          <br />
          <RangePicker onChange={onChange} />
          <br />
          <WeekPicker onChange={onChange} placeholder="Select week" />
          <br/>
          <Pagination showSizeChanger current={current} onShowSizeChange={onShowSizeChange} defaultCurrent={1} total={500} />
          <br/>
          <Progress type="circle" percent={percent} />
      </div>
    );
  }
}

export default App;
