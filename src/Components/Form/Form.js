import React, {Component} from 'react';

 class Form extends Component{
     constructor() {
         super()
         this.state = {
             image: "",
             name: "",
             price: 0
         }

         this.updateImage=this.updateImage.bind(this)
         this.updateName=this.updateName.bind(this)
         this.updatePrice=this.updatePrice.bind(this)
     }

     updateName(newName) {
        this.setState({name: newName})
        console.log(this.state.name)
    }

    updateImage(newImage) {
        this.setState({image: newImage})
        console.log(this.state.image)
    }

    updatePrice(newPrice) {
        this.setState({price: newPrice})
        console.log(this.state.price)
    }

    resetValue() {
        this.setState({image: ""})
        this.setState({name: ""})
        this.setState({price: 0})
    }
    render() {
        return (
            <div className="Form">
              <form>
                  <input id='image' onChange={(e) => this.updateImage(e.target.value)} placeholder="Image"/>
                  <input id='name' onChange={(e) => this.updateName(e.target.value)} placeholder='Name'/>
                  <input id='price' onChange={(e) => this.updatePrice(e.target.value)}  placeholder='Price'/>
                  <button id='cancel' onClick={() => this.resetValue()}>Cancel</button>
                  <button>Add to Inventory</button>
              </form>
            </div>
          );
    }
  }
  
  export default Form;
  