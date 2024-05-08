import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import Home from '../Home'
import { useLocation, useNavigate } from 'react-router-dom'
import Register from '../../components/auth/Register'

const AuthPage = () => {
    const [modalContent, setModalContent] = useState<React.ReactNode>(null)
    const navigate = useNavigate()
    const path = useLocation()

    useEffect(() => {
        if (path.pathname.startsWith('/auth/')) {
            const page = path.pathname.substring(6)
            console.log(page)

            switch (page) {
                case 'register':
                    setModalContent(<Register />)
                    break
                // case 'login':
                //     setModalContent(<Login />)
                //     break
                // case 'logout':
                //     setModalContent(<Logout />)
                //     break
                // case 'restorePassword':
                //     setModalContent(<RestorePassword />)
                //     break
                // case 'newPassword':
                //     setModalContent(<NewPassword />)
                //     break
                default:
                    setModalContent(
                        <div>
                            {/* <NewPassword /> */}
                            New Password
                        </div>
                    )
                    break
            }
        }
    }, [path.pathname])

    return (
        <div>
            <Home />
            <Modal closeModal={() => navigate('/')}>{modalContent}</Modal>
        </div>
    )
}

export default AuthPage
