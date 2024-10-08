import Navbar from "./components/navbar/Navbar.component"
import Homepage from "./pages/homepage/homepage"
import CollectionsOverview from "./pages/collections/collections-overview"
import CollectionsPage from "./pages/collections/collections-page"
import SignIn from "./components/sign-in/sign-in"
import Checkout from "./pages/checkout/checkout"
import { Routes, Route, useLocation } from "react-router-dom"
import "./App.css"
import LocationProvider from "./LocationProvider"
import { SuccessPage } from "./pages/successPage/successPage"
import { CancelPage } from "./pages/cancelPage/cancelPage"
import { Footer } from "./components/footer/Footer"
import { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import { checkUserSession } from "./redux/users/user.slice"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
      <Footer />
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
      <Route path="/checkout">
        <Route index element={<Checkout />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="cancelled" element={<CancelPage />} />
      </Route>
    </Routes>
  )
}
export default App
