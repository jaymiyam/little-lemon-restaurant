import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
