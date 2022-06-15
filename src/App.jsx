import React from 'react';
import './global.css'
import Header from './components/Header/Header'
import Apresentation from './components/Main/Apresentation';
import Knowledges from './components/Conhecimentos/Knowledges';
import Projects from './components/Projetos/Projects';
function App() {

  return (
    <> 
    <Header/>
    <Apresentation/>
    <Projects/>
    <Knowledges/>
    </>
  )
    
  
}

export default App
