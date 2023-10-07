import './ImageList.css'
import ImageShow from "./ImageShow"

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return (
      <ImageShow
        key={image.id}
        image={image}
      />
    )
  })

  return <div className='image-list'>
  {!images.length && (<h1>There aren't images</h1>)}
  {renderedImages}</div>
}

export default ImageList