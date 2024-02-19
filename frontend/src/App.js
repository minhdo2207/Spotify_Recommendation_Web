import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/detail',
    element: <Detail/>
  }
])

function App() {
  return (
    <RouterProvider router={router}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Fragment>
          <Header/>
          <Outlet/>
        </Fragment>
      </ThemeProvider>
    </RouterProvider>
  );
}

export default App;
