import axios from 'axios';
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateUserInfo } from 'reducers/auth';
import { BASE_URL } from '../../constants';
import './styles.css';

function Register() {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput1, setPasswordInput1] = useState('');
	const [passwordInput2, setPasswordInput2] = useState('');
	const [active, setActive] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (emailInput && passwordInput1 && passwordInput2 && passwordInput1 === passwordInput2) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [emailInput, passwordInput1, passwordInput2]);

	const handleRegister = () => {
		const data = { 'user': emailInput, 'password': passwordInput2 };
		axios
			.post(`${BASE_URL}/v1/auth/register`, data)
			.then(response => {
				localStorage.setItem('accessToken', `${response?.data?.tokens?.access?.token}`);
				dispatch(updateUserInfo(response?.data?.user));
				toast.success('Đăng ký thành công');
				navigate('/account');
			})
			.catch(() => {
				toast.error('Tài khoản đã tồn tại');
			});
	};

	return (
		<div className='content-frame'>
			<div className='register-item'>
				<span>Tài khoản</span>
				<input value={emailInput} onChange={e => setEmailInput(e.target.value)} />
			</div>
			<div className='register-item'>
				<span>Mật khẩu</span>
				<input type='password' value={passwordInput1} onChange={e => setPasswordInput1(e.target.value)} />
			</div>
			<div className='register-item'>
				<span>Xác nhận mật khẩu</span>
				<div className='register-password-2'>
					<input type='password' value={passwordInput2} onChange={e => setPasswordInput2(e.target.value)} />
					{passwordInput2 && passwordInput1 !== passwordInput2 && (
						<p style={{ color: 'red' }}>Mật khẩu chưa khớp</p>
					)}
				</div>
			</div>

			<button className='register-button' disabled={!active} onClick={handleRegister}>
				Đăng ký
			</button>
		</div>
	);
}

export default Register;
