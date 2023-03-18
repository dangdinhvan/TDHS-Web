import age18 from 'assets/images/18age.png';
import logo from 'assets/images/logo.png';
import './styles.css';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();

	return (
		<div className='header'>
			<div className='header__age'>
				<img src={age18} />
				<span>Dành cho người chơi trên 18 tuổi. Chơi quá 180 phút mỗi ngày sẽ hại sức khỏe.</span>
			</div>
			<div className='header__logo'>
				<div className='header__logo__top'></div>
				<div className='header__logo__bottom'>
					<img src={logo} />
				</div>
			</div>

			<table>
				<tbody>
					<tr>
						<td
							className={classNames('', {
								'selected': location.pathname === '/',
							})}
						>
							<Link to='/'>Trang Chủ</Link>
						</td>
						<td
							className={classNames('', {
								'selected': location.pathname === '/ranking',
							})}
						>
							<Link to='/ranking'>Bảng Xếp Hạng</Link>
						</td>
						<td
							className={classNames('', {
								'selected': location.pathname === '/account',
							})}
						>
							<Link to='/account'>Tài khoản</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Header;
