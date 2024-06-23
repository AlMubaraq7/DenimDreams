import Navbar from "./components/navbar/Navbar.component"
import Homepage from "./pages/homepage/homepage"
import CollectionsOverview from "./pages/collections/collections-overview"
import CollectionsPage from "./components/collections-page/collections-page"
import SignIn from "./components/sign-in/sign-in"
import Checkout from "./pages/checkout/checkout"
import { Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collections">
          <Route index element={<CollectionsOverview />} />
          <Route path=":categoryId">
            <Route index element={<CollectionsPage />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
