import { useState, useEffect } from 'react';
import './styles.css';
import classNames from 'classnames';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from 'constants';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'reducers/auth';

function Login() {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [active, setActive] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (emailInput && passwordInput) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [emailInput, passwordInput]);

	const handleLogin = () => {
		const data = { 'user': emailInput, 'password': passwordInput };
		axios
			.post(`${BASE_URL}/v1/auth/login`, data)
			.then(response => {
				localStorage.setItem('accessToken', `${response?.data?.tokens?.access?.token}`);
				dispatch(updateUserInfo(response?.data?.user));
				toast.success('Đăng nhập thành công');
				navigate('/account');
			})
			.catch(() => {
				toast.error('Đăng nhập thất bại');
			});
	};

	return (
		<div className='content-frame'>
			<div className='login-item'>
				<span>Tài khoản</span>
				<input value={emailInput} onChange={e => setEmailInput(e.target.value)} />
			</div>
			<div className='login-item'>
				<span>Mật khẩu</span>
				<input type='password' value={passwordInput} onChange={e => setPasswordInput(e.target.value)} />
			</div>

			<button
				className={classNames('login-button', { 'disabled': !active })}
				disabled={!active}
				onClick={handleLogin}
			>
				Đăng nhập
			</button>
		</div>
	);
}

export default Login;
