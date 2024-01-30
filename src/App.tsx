import Navbar from "./components/navbar/Navbar.component"
import Homepage from "./pages/homepage/homepage"
import CollectionsOverview from "./pages/collections/collections-overview"
import CollectionsPage from "./components/collections-components/collections-page"
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
          <Route path=":categoryId" element={<CollectionsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
