import React, { Component } from "react";

class WebsiteDevelopment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      package : 'Website Development / Programming Package',
      dataWebDevelopment : [
        {category: 'Custom Web Application Development', features: 'PHP/MySQL Solution', us: '$8 USD / hour'},
        {category: 'E-Commerce Webshop Module Development', features: 'Shopping Cart, Admin Panel Support, Platforms - osCommerce/Virtuemart', us: '$590 USD'},
        {category: 'Forum Integration and Custom Skinning', features: 'SMF/PHPBB Platform', us: '$150 USD'},
        {category: 'Blog Installation and Custom Setup', features: 'Wordpress Platform', us: '$120 USD'},
        {category: 'CMS (Content Management) Integration', features: 'Wordpress Platform', us: '$100 USD'},
      ]
    }
  }
  render() {
    return (
      <tbody className="table table-warning">
      <tr>
        <th colSpan="3" style={{backgroundColor: "#ff9800"}} className="text-white">{this.state.package}</th>
      </tr>
      {this.state.dataWebDevelopment.map((product) => 
      <tr>
        <td>{product.category}</td>
        <td>{product.features}</td>
        <td>{product.us}</td>
      </tr>
      )}
      </tbody>
    );
  }
}
export default WebsiteDevelopment;