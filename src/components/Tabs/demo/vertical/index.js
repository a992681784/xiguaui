/* tslint:disable:no-console */
import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import {Tabs, DefaultTabBar } from '../../index';
import './index.less';

class BasicDemo extends React.Component{

  constructor(props) {
    super(props);
  }

  renderContent() {
    const pStyle = { margin: 0, padding: 10 };

    return [
      <div key="1" style={{ background: '#ADFFD7' }}>
        <p style={pStyle}>tab 1 1</p>
        <p style={pStyle}>tab 1 2</p>
        <p style={pStyle}>tab 1 3</p>
        <p style={pStyle}>tab 1 4</p>
      </div>,
      <div key="2" style={{ background: '#ADFFD7' }}>
        <p style={pStyle}>tab 2 1</p>
        <p style={pStyle}>tab 2 2</p>
        <p style={pStyle}>tab 2 3</p>
        <p style={pStyle}>tab 2 4</p>
        <p style={pStyle}>tab 2 5</p>
        <p style={pStyle}>tab 2 6</p>
        <p style={pStyle}>tab 2 7</p>
        <p style={pStyle}>tab 2 8</p>
        <p style={pStyle}>tab 2 9</p>
      </div>,
      <div key="3" style={{ background: '#ADFFD7' }}>tab 3</div>,
      <div key="4" style={{ background: '#ADFFD7' }}>tab 4</div>,
      <div key="5" style={{ background: '#ADFFD7' }}>tab 5</div>,
      <div key="6" style={{ background: '#ADFFD7' }}>tab 6</div>,
      <div key="7" style={{ background: '#ADFFD7' }}>tab 7</div>,
      <div key="8" style={{ background: '#ADFFD7' }}>tab 8</div>,
      <div key="9" style={{ background: '#ADFFD7' }}>tab 9</div>,
    ];
  }

  render() {
    const baseStyle = {
      display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
    };

    return (
      <div>
        <div className="example-item">
          <h2>可以左右滑动</h2>
          <Tabs 
            tabs={[
              { title: 't1' },
              { title: 't2' },
              { title: 't3' },
              { title: 't4' },
              { title: 't5' },
            ]} 
            tabBarPosition="left"
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div className="example-item" style={{height:"240px"}}>
          <h2>不可左右滑动</h2>
          <Tabs 
            tabs={[
              { title: 't1' },
              { title: 't2' },
              { title: 't3' },
              { title: 't4' },
              { title: 't5' },
              { title: 't6' },
              { title: 't7' },
              { title: 't8' },
              { title: 't9' }
            ]} 
            tabBarPosition="left" 
            tabDirection="vertical"
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div className="example-item" style={{height:"240px"}}>
          <h2>不可左右滑动2</h2>
          <Tabs 
            tabs={[
              { title: 't1' },
              { title: 't2' },
              { title: 't3' },
              { title: 't4' },
              { title: 't5' },
              { title: 't6' },
              { title: 't7' },
              { title: 't8' },
              { title: 't9' }
            ]} 
            tabBarPosition="right" 
            tabDirection="vertical"
          >
            {this.renderContent()}
          </Tabs>
        </div>
      </div>
    );
  }
}

let root = document.getElementById('app');

render(<BasicDemo />, root);

