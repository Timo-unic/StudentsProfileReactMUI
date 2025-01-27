import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from 'container/App/App'
import { BrowserRouter } from 'react-router-dom'
import { students } from 'data/students'
import { ModalState } from 'context/ModalContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <ModalState>
        <React.StrictMode>
            <BrowserRouter>
                <App student={students} />
            </BrowserRouter>
        </React.StrictMode>
    </ModalState>
)
