import { useState } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'hate Gervais', body: "he's a twit", author: 'Si', id: 1 },
    { title: 'hate TV', body: "it's rubbish", author: 'Si', id: 2 },
    { title: 'hate BBC', body: 'so patronising', author: 'Si', id: 3 },
    { title: 'hate custard', body: "it's yellow", author: 'Si', id: 4 },
  ])
  return (
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
