import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {BrowserRouter as Router, Route ,Routes, NavLink} from 'react-router-dom'
import Card from './components/Share/Card'
import './index.css';
import Post from './components/Post'
import {FeedbackProvider} from './Context/FeedbackContext'

function App() {

  return (  
    <FeedbackProvider>
    <Router>
    <Header />
    <div className = 'container'>
      <Routes>
        <Route exact path = '/' element={

      <>
      <FeedbackForm/>
      <FeedbackStats/>
      <FeedbackList/>  
          
      </>
      }>
      </Route>
      <Route path = '/about' element = {<AboutPage />} />
      <Route path='/post/*' element={<Post />} />
     
     
      </Routes>
      
  
      <AboutIconLink />
    </div>
    </Router>
    </FeedbackProvider>
    )
}

export default App;
