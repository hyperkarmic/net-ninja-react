import './App.css'

function App() {
  const title = 'welcome to the new blog!!!'
  const likes = 50
  const link = 'http://www.google.com'
  return (
    <div className='App'>
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} Times</p>
        <p>Hello Ninjas</p>
        <p>[1,2,3,4,5]</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>google site</a>
      </div>
    </div>
  )
}

export default App
