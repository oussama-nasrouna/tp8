import React, { Component } from 'react'
import{BrowserRouter,Route} from 'react-router-dom'
import Home from './Home'
import Offres from './Offres'
import Listart from './Listart'

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       
         <Route exact  path="/" component={Home}/>
         <Route path="/offre" component={Offres}/>
         <Route path="/la" component={Listart}/>

          
      </div>
      </BrowserRouter>
    )
  }
}

export default App
