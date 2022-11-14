import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchPage from "@/pages/search"
import ResultsPage from "@/pages/results"
import DetailPage from "@/pages/detail"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />}>
            <Route path="/items" element={<ResultsPage />} />
            <Route path="/items/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
