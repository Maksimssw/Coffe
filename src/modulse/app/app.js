import './app.scss';
import { CoffePage, CoffeHousePage, CoffePleasurePage, GrainsPage, TypeCoffePage, BestPage } from '../pages';
import Footer from '../footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './media.scss';

const App = () => {
    return(
        <Router>
            <>
                <Routes>
                    <Route path='/' element={<CoffePage/>}/>
                    <Route path='/our_coffe' element={<CoffeHousePage/>}/>
                    <Route path='/pleasure' element={<CoffePleasurePage/>}/>
                    <Route path='/our_coffe/:idGrains' element={<GrainsPage/>}/>
                    <Route path='/pleasure/:idDrinks' element={<TypeCoffePage/>}/>
                    <Route path='/:idBest' element={<BestPage/>}/>
                </Routes>
                <Footer/>
            </>
        </Router>
    )
}

export default App;