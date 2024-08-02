import Navbar from "./components/navbar/Navbar.component"
import Homepage from "./pages/homepage/homepage"
import CollectionsOverview from "./pages/collections/collections-overview"
import CollectionsPage from "./pages/collections/collections-page"
import SignIn from "./components/sign-in/sign-in"
import Checkout from "./pages/checkout/checkout"
import { Routes, Route, useLocation } from "react-router-dom"
import "./App.css"
import LocationProvider from "./LocationProvider"

function App() {
  return (
    <>
      <Navbar />
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </>
  )
}

function RoutesWithAnimation() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.key}>
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
  )
}
export default App
