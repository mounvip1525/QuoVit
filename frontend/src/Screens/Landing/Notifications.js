import React from 'react'
import MainLayout from '../../Components/Structure/Main'
import AddPostModal from './AddPostModal'
import './css/Notifications.css'

export default function Notifications() {
    return (
            <MainLayout type="landing">
                <AddPostModal />
                {/* html code here */}
            </MainLayout>
    )
}
