import React, {Component} from 'react';

class Product extends Component {
  constructor() {
    super()
    this.state = {
      list: ''
    }
  }

  render() {
    console.log(this.props.listMap)
    return (
      <div className="Product">
         <h1>Product</h1> {this.props.listMap}
      </div>
    );
  }
}
  
  export default Product;
  