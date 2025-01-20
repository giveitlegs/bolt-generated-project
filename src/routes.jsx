import React from 'react'
    import { Routes, Route } from 'react-router-dom'
    import Layout from './pages/_default.page'
    import BreedsPage from './pages/breeds/index.page'
    import BreedPage from './pages/breeds/[id].page'
    import ApiStatusPage from './pages/api-status.page'

    export default function AppRoutes() {
      return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BreedsPage />} />
            <Route path="breeds" element={<BreedsPage />} />
            <Route path="breeds/:id" element={<BreedPage />} />
            <Route path="api-status" element={<ApiStatusPage />} />
          </Route>
        </Routes>
      )
    }
