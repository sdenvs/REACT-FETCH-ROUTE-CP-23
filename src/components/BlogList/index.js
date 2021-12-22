// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsListm: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const bolgsDataSnakeCase = await response.json()
    const blogsListm = bolgsDataSnakeCase.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    console.log(blogsListm)

    this.setState({blogsListm, isLoading: false})
  }

  createBlogList = () => {
    const {blogsListm} = this.state
    return (
      <ul className="ulList">
        {blogsListm.map(eachItem => (
          <BlogItem key={eachItem.id} details={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {blogsListm, isLoading} = this.state

    return isLoading ? (
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    ) : (
      this.createBlogList()
    )
  }
}
export default BlogList
