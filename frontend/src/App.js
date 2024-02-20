import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import RootLayout from './pages/layout/Layout';
import { NotFound } from './pages/notfound/NotFound';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/detail', element: <Detail/> },
      { path: '*', element: <NotFound/>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
      </ThemeProvider>
    </RouterProvider>
  );
}

export default App;
