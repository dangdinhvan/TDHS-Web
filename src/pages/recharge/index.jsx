import './styles.css';
import momoImg from 'assets/images/momo.jpg';
import mobileCardImg from 'assets/images/mobile-card.jpg';
import bankingImg from 'assets/images/banking.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Recharge() {
	const userInfo = useSelector(state => state.auth.userInfo);

	const navigate = useNavigate();

	useEffect(() => {
		if (userInfo && userInfo?.status !== 'active') {
			alert('Nạp 20.000 tự động kích hoạt tài khoản');
		}
	}, []);

	return (
		<div className='content-frame'>
			<div className='recharge'>
				<h3>Nạp coin</h3>
				<div className='recharge__main'>
					<div className='recharge__item'>
						<img src={momoImg} />
						<div className='recharge__item__text'>
							<div className='recharge__item__title'>Nạp tiền MOMO</div>
							<div className='recharge__item__description'>
								<p>Nạp tiền qua MOMO</p>
								<p>Thời gian thanh toán 1-3 phút</p>
							</div>
							<hr />
							<button onClick={() => navigate('/momo-recharge')}>Nạp coin</button>
						</div>
					</div>
					<div className='recharge__item'>
						<img src={mobileCardImg} />
						<div className='recharge__item__text'>
							<div className='recharge__item__title'>Nạp thẻ cào</div>
							<div className='recharge__item__description'>
								<p>Nạp tiền qua thẻ điện thoại</p>
								<p>Thời gian thanh toán 2-5 phút</p>
							</div>
							<hr />
							<button onClick={() => navigate('/mobile-recharge')}>Nạp coin</button>
						</div>
					</div>
					<div className='recharge__item'>
						<img src={bankingImg} />
						<div className='recharge__item__text'>
							<div className='recharge__item__title'>Banking</div>
							<div className='recharge__item__description'>
								<p>Chuyển tiền qua internet banking tạm thời đang bảo trì</p>
							</div>
							<hr />
							<button disabled onClick={() => navigate('/banking')}>Nạp coin</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Recharge;
