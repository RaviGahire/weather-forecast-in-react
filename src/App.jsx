import ErrorBoundary from './components/ErorrBoundary'
import { AppRoutes } from './routes/AppRoutes'


function App() {


  return (
    <>
      <ErrorBoundary>
           <AppRoutes/>
      </ErrorBoundary>

 
    </>
  )
}

export default App
