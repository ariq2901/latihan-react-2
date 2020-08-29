import React, {Component} from 'react';
import WebDevelopment from './WebsiteDevelopment';

class WebsiteDesign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      package : 'Website Design Packages',
      dataWebDesign : [
        {category : 'Website Home Page Design', features : 'Upto 3 design concepts and Unlimited revisions', us : '$90 USD'},
        {category : 'Starter Package', features : 'Upto 5 Static HTML Page', us : '$190 USD'},
        {category : 'Additional Webpages', features : 'Static HTML Output', us : '$10 USD'},
        {category : 'Wordpress Theme', features : 'Design and Conversion', us : '$120 USD'},
        {category : 'Joomla Template', features : 'Design and Conversion', us : '$120 USD'},
      ]
    }
  }
  render() {
    return (
      <tbody>
        <tr style={{background: '#FF9800'}}>
          <th colSpan="3" className="text-white">{this.state.package}</th>
        </tr>
        {this.state.dataWebDesign.map((product) => 
        <tr className="table-warning">
          <td>{product.category}</td>
          <td>{product.features}</td>
          <td>{product.us}</td>
        </tr>
        )}
      </tbody>
    );
  }
}

export default WebsiteDesign;