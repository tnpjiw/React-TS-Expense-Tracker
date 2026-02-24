import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';

function App() {

  return (
   <BrowserRouter>
   <div className="flex min-h-screen">
    <Sidebar />

    <div className="flex-1 p-6">
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>

   </div>
   </BrowserRouter>
  )
}

export default App
