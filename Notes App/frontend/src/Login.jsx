import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./AuthForms.css"


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({remember})

    }
    return (
        <div className='auth-page'>
            <div className='auth-card'>
                <div className='auth-logo-wrap'>
                    <div className='auth-logo'>📝</div>
                </div>

                <h1 className='auth-title'>Welcome Back 👋</h1>
                <p>Login to  your account</p>

                <form onSubmit={handleSubmit} className='auth-form'>
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='auth-input'
                    />

                    <input type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='auth-input'
                    />
                    <div className='auth-row'>
                        <label className='auth-remember'>
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)} />
                            Remember me
                        </label>
                        
                    </div>
                    <button type='submit' className='auth-button' >Login</button>
                </form>
                <p className="auth-footer">
                    Don't have an account?{" "}
                    <Link to="/register" className="auth-link">
                        Register
                    </Link>
                </p>
            </div>
        </div>

    )
}
