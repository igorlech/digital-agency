import "./index.css"
import {Route, Navigate, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage.js"
import ActivitiesPage from "./pages/ActivitiesPage.js"
import EventsPage from "./pages/EventsPage.js"
import PlacesPage from "./pages/PlacesPage.js"
import AttractionsPage from "./pages/AttractionsPage.js"
import DescriptionPage from "./pages/DescriptionPage.js"
import YourTripPage from "./pages/YourTripPage.js"
import SchedulePage from "./pages/SchedulePage.js"


function App() {
  return(
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/activities" element={<ActivitiesPage/>} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/places" element={<PlacesPage/>} />
        <Route path="/attractions" element={<AttractionsPage/>} />
        <Route path="/description" element={<DescriptionPage/>} />
        <Route path="/yourtrip" element={<YourTripPage/>} />
        <Route path="/schedule" element={<SchedulePage/>} />
        <Route path='*' element={<Navigate to="/home"/>} /> 
      </Routes>
    </main>
  )
}

export default App