import React from 'react'
import {Route, Switch,BrowserRouter} from "react-router-dom";
import Home from './modules/HomePage/D6_SL_Home'
import Contact from './modules/ContactPage/D6_DASAC_Contact'

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} /> 
     {/*       <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Services" component={Services} />   */}
            <Route exact path="/ContactUs" component={Contact} />  
          </Switch>
      </BrowserRouter>
    )
}

export default Routes
