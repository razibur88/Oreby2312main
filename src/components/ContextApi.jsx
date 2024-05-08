import React, { useState } from 'react'
import { createContext } from 'react'
let ApiData = createContext()

const ContextApi = ({children}) => {
    
    
  return (
    <ApiData.Provider value="">
        {children}
    </ApiData.Provider>
  )
}

export {ContextApi,ApiData}