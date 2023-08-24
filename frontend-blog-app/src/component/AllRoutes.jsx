import { Route, Routes } from 'react-router-dom';
import Registration from './registration';
import { Home } from './Home';
export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/register" element={<Registration />} />
            </Routes>
        </div>
    );
};