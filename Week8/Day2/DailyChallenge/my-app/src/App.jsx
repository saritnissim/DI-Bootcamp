import './App.css'
import { useState } from 'react'

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])
  const vote = (language) => {
    const updatedLanguages = languages.map(l => {
      if (language.name === l.name) {
        return { ...l, votes: l.votes + 1 };
      }
      return l;
    })
    setLanguages(updatedLanguages)
  }
  return (
    <>
    <div>
    <h1>Vote for Your Favorite Language</h1>
    {
      languages.map((language) => {
        return (
          <div className='language'key={language.name}>
        <button onClick={() => {vote(language)}}>
          {language.votes}{language.name}
          </button>
          </div>
        )
      })
    }
    </div>
       
    </>
  )
}

export default App
