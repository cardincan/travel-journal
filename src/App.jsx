import { useState, useEffect, useRef } from 'react'
import Header from "./components/Header"
import Card from "./components/Card"
import DarkTheme from './components/DarkTheme'
import postsData from "./postsData"

import './index.scss'

const App = function() {

  const [darkTheme, setDarktheme] = useState(false)

  const handleThemeChange = function() {
    setDarktheme((prevState) => !prevState)
  }

  const changeTheme = function() {
    const body = document.body;

    if(body.classList.contains("dark")) {
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
    }
  }

  const useComponentDidMount = function() {
    const ref = useRef();
    useEffect(() => {
      ref.current = true;
    }, []);
    return ref.current;
  };

  const componentDidMount = useComponentDidMount();

  useEffect(() => {
    if(componentDidMount) {
      changeTheme()
    }
  }, [darkTheme])

  const posts = postsData.map(item => {
    return <Card key={item.id} {...item} />
  })

  return (
    <>
      <Header />
      <main className="main">
        <section className="cards-container">
          {posts}
        </section>
      </main>
      <DarkTheme onClick={handleThemeChange} isDarkTheme={darkTheme}/>
    </>
  )
}

export default App
