# routing

```
app.js
  <BrowserRouter>
            <Routes>
                {
                    routevalue.map(i => (
                        i.isPrivate ? <Route path={i.path} element={
                            <PrivateRoute>
                                {i.component}
                            </PrivateRoute>
                        } /> : <Route path={i.path} element={
                            i.component
                        } />
                    ))
                }
            </Routes>
        </BrowserRouter>
```

```
import Home from "../pages";
import Product from "../pages/product";

export const routevalue = [{
    id: 1,
    path: "/",
    component: (<Home />),
    isPrivate: false
},
{
    id: 2,
    path: "/product",
    component: (<Product />),
    isPrivate: true
},
{
    id: 2,
    path: "/product/:id",
    component: (<ProductDetail />),
    isPrivate: true
}]

```