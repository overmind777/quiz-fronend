import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import 'modern-normalize/modern-normalize.css'
import store from './redux/store.ts'
import appRouter from './routers/routers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={appRouter} />
        </Provider>
    </React.StrictMode>
)
