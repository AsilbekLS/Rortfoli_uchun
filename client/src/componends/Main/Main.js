
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddMebel from '../../pages/AddMebel'


const Main = () => {
    return (
  
      <div className="wrapper">
        
    <Routes>
     <Route path="/add"   element={ <AddMebel/>  }/>
    </Routes>
  
      </div>
    )
  }
  
  export default Main