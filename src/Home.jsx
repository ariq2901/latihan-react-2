import React from 'react';
import { Component } from 'react';
import WebsiteDesign from './components/websiteDesign';
import WebDevelopment from './components/WebsiteDevelopment';

class Home extends Component {
  render() {
    return(
      <div className="container">
        <h3 className="text-primary my-3">Price List</h3>
        <table className="table">
          <thead>
            <tr style={{background: '#0277BD'}} className="text-white">
              <th>Category</th>
              <th>Features</th>
              <th>US $</th>
            </tr>
            
          </thead>
          <WebsiteDesign />
          <WebDevelopment />
        </table>
      </div>
    );
  }
}

export default Home;