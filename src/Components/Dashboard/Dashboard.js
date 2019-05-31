import React, {Component} from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            list: ''
        }
    }

    render() {
        const listMap= this.props.inventory.map(value => <li key={value}>
            <h2><img src={value.image} alt='Product' /></h2>
            <h2>Name: {value.name}</h2>
            <h2>Price:{value.price}</h2>
            
        </li>

        )
        return (
            <div className="Dashboard">
      
      
            <Product inventory={this.listMap}/>  
            {listMap}
            </div>
          );
    }
  }
  
  export default Dashboard;
  