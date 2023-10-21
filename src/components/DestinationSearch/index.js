// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchList = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-cont">
        <h1 className="main-head">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            onChange={this.searchList}
            value={searchInput}
            placeholder="search"
            className="search-input"
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="dest-list">
          {searchResult.map(item => (
            <DestinationItem itemDetails={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
