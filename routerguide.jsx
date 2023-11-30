

// NEW Syntax 

//Router Component

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/page1",
        element: <Page1/>,
    },
    {
        path: "/page2",
        element: <Page2/>,
    },
])

export default function Router(){
    return (
        <>
        <RouterProvider router={router}/>
        </>
    )
}

//Header Component

import Navbar from '/path/navbar'

export default function Header() {

    return (
        <>
        <h1>Header</h1>
        <Navbar/>
        </>
    )
}


//Navbar Component

import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <>
            <Link path="/page1">Page 1</Link>
            <Link path="/page2">Page 2</Link>
        </>
    )
}


//OLD SYNTAX

//App Component

{/* <Router>
        <Header/>
        <Body/>
    </Router> */}

//Body Component

{/* <Routes>
        <Route path='page1' element= <Page1/> >
        <Route path='page2' element= <Page2/> >
    </Routes>    */}