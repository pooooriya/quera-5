import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import ProductDetail from '../pages/product/{id}'
import Home from '../pages'
import Prodcut from '../pages/product/index'

const Routes = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/product" element={<Prodcut />} />
                <Route path="/product/:id" element={
                    <PrivateRoute>
                        <ProductDetail />
                    </PrivateRoute>
                } />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Routes