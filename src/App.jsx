import React from 'react'

import './App.css'
import {Routes, Route} from 'react-router-dom'
import Data from './HOOKS/data'
import Home from './HOOKS/Home'
import UseReducer from './HOOKS/UseReducer'
import UseRef from './HOOKS/UseRef'
import UseCallback from './HOOKS/UseCallback'
import UseMemo from './HOOKS/UseMemo'
import UseContext from './HOOKS/UseContext'
import UseTransition from './HOOKS/UseTranstion'
import UseState from './HOOKS/useState'
import UseEffect from './HOOKS/useEffect'
function App() {
 
  return (
    <>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/UseState" element={<UseState/>}/>
     <Route path="/UseEffect" element={<UseEffect/>}/>
     <Route path="/UseContext" element={<UseContext/>}/>
     <Route path="/UseCallback" element={<UseCallback/>}/>
     <Route path="/UseMemo" element={<UseMemo/>}/>
     <Route path="/UseRef" element={<UseRef/>}/>
     <Route path="/UseTransition" element={<UseTransition/>}/>
     <Route path="/UseReducer" element={<UseReducer/>}/>
     <Route path="/Data" element={<Data/>}/>
     </Routes>
    </>
  )
}

export default App
