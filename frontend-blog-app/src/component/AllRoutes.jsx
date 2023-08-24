import {Route,Routes} from 'react-router-dom';
import Registration from './registration';
export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/register" element={<Registration/>} />
            </Routes>
        </div>
    );
};