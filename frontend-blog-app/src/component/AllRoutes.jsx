import {Route,Routes} from 'react-router-dom';
import Login from './login';
export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
    );
};