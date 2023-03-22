import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from 'reducers/auth';

function Account() {
	const userInfo = useSelector(state => state.auth.userInfo);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		dispatch(updateUserInfo(null));
		window.location.reload();
	};

	const handleRecharge = () => {
		if (userInfo) {
			navigate('/recharge');
		} else {
			navigate('/login');
		}
	};

	return (
		<div className='content-frame'>
			<div className='account'>
				{userInfo?.user ? (
					<div>
						<div>Xin chào, {userInfo.user}</div>
						<div style={{ marginTop: '6px' }}>Số coin: {userInfo.coin}</div>
						<div style={{ marginTop: '6px' }}>Trạng thái: {userInfo.status}</div>
					</div>
				) : (
					<div>
						<button onClick={() => navigate('/login')}>Đăng nhập</button>
						<button style={{ marginLeft: '6px' }} onClick={() => navigate('/register')}>
							Đăng ký
						</button>
					</div>
				)}

				<div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
					{userInfo ? (
						<>
							{userInfo.status !== 'active' && (
								<>
									<button onClick={() => navigate('/recharge')}>Kích hoạt</button>
									<span>|</span>
								</>
							)}
							<button onClick={handleRecharge}>Nạp coin</button>
							<span>|</span>
							<button onClick={() => navigate('/change-password')}>Đổi mật khẩu</button>
							<span>|</span>
							<button onClick={handleLogout}>Đăng xuất</button>
							<span>|</span>
							<button onClick={() => window.open('http://hsraze.xyz/')}>Đi đến Webshop</button>
						</>
					) : (
						<button onClick={handleRecharge}>Nạp coin</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Account;
