
FIRST METHOD

import React, { useState } from 'react'

//Declare the context

export const VariableNameContext = React.createContext


export default function App(){

    const [data,setData] = useState(0);

    return(
        <>
        <VariableNameContext.Provider value={data}>
            {/* Component1
            Component2 */}
        </VariableNameContext.Provider>
        </>
    )
}

//In Component1.jsx
import { useContext } from 'react';
import VariableNamedContext from './App'
export default function Component1(){
    const data = useContext(VariableNameContext)
}



//SECOND METHOD

//In NameProvider.jsx
import React, { useState, useContext } from 'react'

//Declare contexts
const DataProvider1 = React.createContext();
const DataProvider2 = React.createContext();

//Create and export function for custom hooks
export function useData (){
    return useContext(DataProvider1);
}

export function useHandleData (){
    return useContext(DataProvider2);
}

//Main functions must accept children parameter
export /*default*/ NameProvider ({children}){

    const [data,setData] = useState(null);

    const handleData = () =>{
        setData(null);
    }

    return(
        //Wrap the Declared contexts
        <DataProvider1.Provider value={data}>
            <DataProvider2.Provider value={setData}>
                {children}
            </DataProvider2.Provider>
        </DataProvider1.Provider>
    )
}

//In App.jsx
//Import the context
import {NameProvider} from 'NameProvider.jsx'
export default App(){

    return(
        <NameProvider>
            // <Component1/>
            // <Component2/>
        </NameProvider>
    )
}


//In Component 1
import {useData, useHandleData} from './NameProvider.jsx'

export default function Component1(){
    const data = useData();
    const handleData = useHandleData();
}


