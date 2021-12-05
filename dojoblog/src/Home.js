const Home = () => {
  const handleClick = (e) => {
    console.log('hello ninjas!!!!', e.target)
  }

  const handleClickAgain = (name) => {
    console.log('hello ' + name)
  }

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me!!!</button>
      <button
        onClick={(e) => {
          handleClickAgain('Simon', e.target)
        }}
      >
        Click me again!!!
      </button>
    </div>
  )
}

export default Home
