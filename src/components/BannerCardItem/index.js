import './index.css'

const ReusableBanner = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard

  return (
    <div className="banner-card-container">
      <li className={className}>
        <div>
          <h1 className="heading">{headerText}</h1>
          <p className="description">{description}</p>
          <button type="button" className="button">
            Show More
          </button>
        </div>
      </li>
    </div>
  )
}

export default ReusableBanner
