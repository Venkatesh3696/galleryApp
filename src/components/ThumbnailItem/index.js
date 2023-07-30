// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const onClickTmbImg = () => {
    onClickThumbnail(id)
    // console.log('hiiiiii')
  }
  const activeThumbnailClass = isActive ? '' : 'half-opacity'
  return (
    <li className="thumbnail-item">
      <button type="button" className="button">
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={`thumbnail-image ${activeThumbnailClass} `}
          onClick={onClickTmbImg}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
