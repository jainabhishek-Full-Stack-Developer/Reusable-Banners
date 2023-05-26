import './index.css'

function Card(props) {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <>
      <li className={`card ${className}`}>
        <div className="cardDetails">
          <h1 className="cardDetailsHeading">{headerText}</h1>
          <p className="cardDetailsPara">{description}</p>
          <button type="button" className="cardDetailsBtn">
            Show More
          </button>
        </div>
      </li>
    </>
  )
}
export default Card
