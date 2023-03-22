import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'constants';

function Ranking() {
	const [rankData, setRankData] = useState([]);
	const [rankType, setRankType] = useState('topLevel');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${BASE_URL}/v1/webshops/topRank`, {
				params: {
					type: rankType,
				},
			})
			.then(response => setRankData(response.data))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [rankType]);

	return (
		<div className='content-frame'>
			<div className='ranking'>
				<h3 style={{ textAlign: 'center' }}>Bảng xếp hạng</h3>
				<div className='ranking-filter'>
					<label>Bộ lọc</label>
					<select style={{ marginLeft: '12px' }} onChange={e => setRankType(e.target.value)}>
						<option value='topLevel'>Top level</option>
						<option value='topPay'>Top nạp coin</option>
					</select>
				</div>
				{loading ? (
					<p style={{ textAlign: 'center' }}>Loading...</p>
				) : (
					<table>
						<thead>
							<tr>
								<th>STT</th>
								<th>Tài khoản</th>
								<th>{rankType === 'topLevel' ? 'Cấp độ' : 'Nạp Coin'}</th>
							</tr>
						</thead>
						<tbody>
							{rankData.map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{item.name}</td>
									<td>{rankType === 'topLevel' ? item.level : item.totalPay}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}

export default Ranking;
