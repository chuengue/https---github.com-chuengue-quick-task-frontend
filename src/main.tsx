import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { queryClient } from './services/queryClient.ts'
import Theme from './theme/theme.ts'
// pages
import CreateTask from './pages/createTask/CreateTask'
import Home from './pages/home/Home'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", Helvetica, Sans-Serif;
    background-color: ${Theme.colors.blue.dark};
  }
`
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/new', element: <CreateTask /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
