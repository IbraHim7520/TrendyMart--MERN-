import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from '../Router/router.jsx'
import AuthProvider from '../Firebase/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const qryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={qryClient}>
          <AuthProvider>
    <Toaster></Toaster>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
