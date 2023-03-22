import './styles.css';
import axios from 'axios';
import { BASE_URL } from 'constants';
import { useState } from 'react';
import { toast } from 'react-toastify';

function MobileRecharge() {
	const [amount, setAmount] = useState(10000);
	const [code, setCode] = useState('');
	const [serial, setSerial] = useState('');
	const [telco, setTelco] = useState('');
	const [loading, setLoading] = useState(false);

	const handleCardRecharge = () => {
		setLoading(true);
		const token = localStorage.getItem('accessToken');
		const data = {
			'amount': Number(amount),
			'code': code,
			'serial': serial,
			'telco': telco,
		};

		axios
			.post(`${BASE_URL}/v1/webshops/napCard`, data, { headers: { 'Authorization': `Bearer ${token}` } })
			.then(response => {
				if (response.data.status === 'pending') {
					toast.success('Check lịch sử nạp thẻ');
				} else {
					toast.error('Nạp thẻ thất bại');
				}
			})
			.catch(() => {
				toast.error('Nạp thẻ thất bại');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className='content-frame'>
			{loading && <div className='mobile-recharge__loading'>Đang xử lý...</div>}
			<div className='mobile-recharge'>
				<h3 style={{ textAlign: 'center' }}>Nạp coin bằng thẻ điện thoại</h3>
				<div className='mobile-recharge__label'>Nhà mạng:</div>
				<select onChange={e => setTelco(e.target.value)}>
					<option value=''>----- Chọn nhà mạng -----</option>
					<option value='VIETTEL'>Viettel</option>
					<option value='VINAPHONE'>Vinaphone</option>
					<option value='MOBIPHONE'>Mobiphone</option>
					<option value='VIETNAMMOBILE'>VietnamMobile</option>
					<option value='ZING'>Zing</option>
					<option value='GATE'>Gate</option>
				</select>
				<div className='mobile-recharge__label'>Mệnh giá:</div>
				<select onChange={e => setAmount(e.target.value)}>
					<option value=''>----- Chọn mệnh giá -----</option>
					<option value={10000}>10.000</option>
					<option value={20000}>20.000</option>
					<option value={50000}>50.000</option>
					<option value={100000}>100.000</option>
					<option value={200000}>200.000</option>
					<option value={300000}>300.000</option>
					<option value={500000}>500.000</option>
				</select>
				<div className='mobile-recharge__label'>Mã thẻ:</div>
				<input placeholder='Nhập mã thẻ' value={code} onChange={e => setCode(e.target.value)} />
				<div className='mobile-recharge__label'>Số Seri:</div>
				<input placeholder='Nhập số serial' value={serial} onChange={e => setSerial(e.target.value)} />
				<button onClick={handleCardRecharge}>Nạp thẻ</button>
				<hr />
				<p>Lưu ý:</p>
				<p>(*) Chọn đúng giá trị thẻ, đúng số seri, mã thẻ</p>
				<p>(**) Những thẻ bị điền sai thông tin chúng tôi sẽ không chịu trách nhiệm và không bồi thường.</p>
			</div>
		</div>
	);
}

export default MobileRecharge;
