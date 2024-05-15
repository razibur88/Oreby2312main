import RootLayout from "./components/layout/RootLayout"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Product from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
  </Route>
))


function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
