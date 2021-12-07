import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'hate Gervais', body: "he's a twit", author: 'mario', id: 1 },
    { title: 'hate TV', body: "it's rubbish", author: 'Si', id: 2 },
    { title: 'hate BBC', body: 'so patronising', author: 'Si', id: 3 },
    { title: 'hate custard', body: "it's yellow", author: 'Si', id: 4 },
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effect ran')
    console.log(blogs)
  })

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title='Warluigis Blogs'
      />
    </div>
  )
}

export default Home
