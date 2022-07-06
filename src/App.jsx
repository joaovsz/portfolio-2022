import React from 'react';
import './global.css'
import Header from './components/Header/Header'
import MainContainer from './components/Main/Main-container';
import Knowledges from './components/Conhecimentos/Knowledges';
import Projects from './components/Projetos/Projects';
function App() {

  return (
    <> 
    <Header/>
    <main>
    <MainContainer/>
    <Projects/>
    <Knowledges/>
    </main>
    </>
  )
    
  
}

export default App
