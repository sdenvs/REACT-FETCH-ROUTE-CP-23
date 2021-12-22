import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogData: []}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    console.log(updatedData)
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogData = () => {
    const {blogData} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogData
    return (
      <div className="blogDetails">
        <h1 className="text-center">{title}</h1>
        <div className="d-flex">
          <img
            className="mr-2 avatar rounded-circle"
            src={avatarUrl}
            alt={author}
          />
          <p>{author}</p>
        </div>
        <img className="w-100" src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    ) : (
      this.renderBlogData()
    )
  }
}

export default BlogItemDetails
