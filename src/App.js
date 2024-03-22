import React from 'react'
import Create from './Crud/Create'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Read from './Crud/Read'
import Update from './Crud/Update'

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Create></Create>} ></Route>
    <Route path="/read" element={<Read></Read>} ></Route>
    <Route path="/update" element={<Update></Update>} ></Route>
    
    </Routes>
    
    </BrowserRouter>

    
    </div>
  )
}
