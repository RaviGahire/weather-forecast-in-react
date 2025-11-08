import React from 'react'
import { Header } from './components/Header'
import ErrorBoundary from './components/ErorrBoundary'


function App() {


  return (
    <>
      <ErrorBoundary>
            <Header/>
      </ErrorBoundary>

 
    </>
  )
}

export default App
