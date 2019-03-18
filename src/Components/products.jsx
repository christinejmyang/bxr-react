import React, {Component} from 'react'
import Item from './item'

class Products extends Component {
  state = {
    counters: [
      {name: "blender",   id: 1, value: 0, img: "https://picsum.photos/200"},
      {name: "mattress",  id: 2, value: 0, img: "https://picsum.photos/200"},
      {name: "iHome",     id: 3, value: 0, img: "https://picsum.photos/200"},
      {name: "smartTV",   id: 4, value: 0, img: "https://picsum.photos/200"},
    ]
  };

  render () {
    return(
      <div>
        {this.state.counters.map(item =>
          <Item key={item.id} value={item.value} image={item.img}>
            <h4>{item.name}</h4>
          </Item>)}
      </div>
    );
  }
}

export default Products;
