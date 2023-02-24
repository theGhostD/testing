import {Route,Routes} from "react-router-dom"
import Home from "./components/home/home.component"
import Navigationcomponent from "./components/Navigation/Navigation.component"
import Shopcomponent from "./components/Shop/Shop.component"
import SignUpcomponent from "./components/signUP/SignUp.component"
const App =()=>{

  return (
    <Routes>
      <Route path="/" element={<Navigationcomponent/>}>
      <Route index element= {<Home/>} />
      <Route path="Sign-up" element={<SignUpcomponent/>} />
      <Route path="shop" element={<Shopcomponent />}/>
      </Route>
    </Routes>
  )
}
export default App