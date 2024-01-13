import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { Home } from '../pages/Home';
import { Category } from '../pages/Category';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/item/:productId' element={<ItemDetailContainer />}/>
            <Route path='/category/:id' element={<Category />}/>
        </Routes>
    </BrowserRouter>
  )
}