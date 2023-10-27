import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Hire from '../pages/Hire'
import Notfound from '../pages/Notfound'

export default function Main() {
  return (
    <main>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/hire" element={<Hire/>}/>
            <Route path="*" element={<Notfound />} />
        </Routes>
    </main>
  )
}
