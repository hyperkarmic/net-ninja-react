import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'hate Gervais', body: "he's a twit", author: 'mario', id: 1 },
    { title: 'hate TV', body: "it's rubbish", author: 'Si', id: 2 },
    { title: 'hate BBC', body: 'so patronising', author: 'Si', id: 3 },
    { title: 'hate custard', body: "it's yellow", author: 'Si', id: 4 },
  ])
  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs' />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title='Warluigis Blogs'
      />
    </div>
  )
}

export default Home
