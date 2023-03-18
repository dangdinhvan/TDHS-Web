import axios from 'axios';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../constants';
import './styles.css';

export default function ChangePassword() {
	const [passwordInput1, setPasswordInput1] = useState('');
	const [passwordInput2, setPasswordInput2] = useState('');
	const [active, setActive] = useState(false);

	const userInfo = useSelector(state => state.auth.userInfo);

	useEffect(() => {
		if (passwordInput1 && passwordInput2 && passwordInput1 === passwordInput2) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [passwordInput1, passwordInput2]);

	const handleChangePass = () => {
		const token = localStorage.getItem('accessToken');
		const data = {
			'password': passwordInput2,
		};

		axios
			.patch(`${BASE_URL}/v1/users/${userInfo.id}`, data, { headers: { 'Authorization': `Bearer ${token}` } })
			.then(function () {
				toast.success('Đổi mật khẩu thành công');
			})
			.catch(function () {
				toast.error('Đổi mật khẩu thất bại');
			});
	};

	return (
		<div className='content-frame'>
			<div className='change-password'>
				<div className='register-item'>
					<span>Mật khẩu mới</span>
					<input type='password' value={passwordInput1} onChange={e => setPasswordInput1(e.target.value)} />
				</div>
				<div className='register-item'>
					<span>Xác nhận mật khẩu</span>
					<div className='register-password-2'>
						<input
							type='password'
							value={passwordInput2}
							onChange={e => setPasswordInput2(e.target.value)}
						/>
						{passwordInput2 && passwordInput1 !== passwordInput2 && (
							<p style={{ color: 'red' }}>Mật khẩu chưa khớp</p>
						)}
					</div>
				</div>

				<button className='register-button' disabled={!active} onClick={handleChangePass}>
					Đổi mật khẩu
				</button>
			</div>
		</div>
	);
}
