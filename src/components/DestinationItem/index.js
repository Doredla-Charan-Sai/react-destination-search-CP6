// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails
  return (
    <li className="img-cont">
      <img src={imgUrl} alt={name} className="img" />
      <p className="img-name">{name}</p>
    </li>
  )
}

export default DestinationItem
