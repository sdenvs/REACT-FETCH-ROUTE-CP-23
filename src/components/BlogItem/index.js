// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link to={`/blogs/${id}`}>
      <div className="border border-dark blogItem p-3 mb-3 d-md-flex align-items-center">
        <img className="image-1 mr-md-3" src={imageUrl} />
        <div>
          <p>{topic}</p>
          <h1 className="h5 text-dark">{title}</h1>
          <div className="d-flex align-items-center ">
            <img className="avatar rounded-circle mr-2" src={avatarUrl} />
            <p className="pt-3">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
