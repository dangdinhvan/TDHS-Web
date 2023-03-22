import './styles.css';
import { useSelector } from 'react-redux';

function MomoRecharge({ isMomo = true }) {
	const userInfo = useSelector(state => state.auth.userInfo);

	return (
		<div className='content-frame'>
			<div className='momo-recharge'>
				<table className='momo-recharge__table'>
					<tr>
						<td colSpan={2} style={{ fontWeight: '700' }}>
							{isMomo ? 'Nạp coin qua momo' : 'Nạp coin qua internet banking'}
						</td>
					</tr>
					<tr>
						<td>Nội dung chuyển khoản:</td>
						<td>{userInfo.user}</td>
					</tr>
					<tr>
						<td> {isMomo ? 'Số điện thoại nhận tiền:' : 'Số tài khoản nhận tiền:'}</td>
						<td>0963225935</td>
					</tr>
					<tr>
						<td>Chủ tài khoản:</td>
						<td>Phan Thị Ngọc Huyền</td>
					</tr>
				</table>
				<hr />
				<p>Lưu ý: Thời gian xử lý từ 1-2 phút</p>
				<p>(*) Cần ghi đúng nội dung chuyển khoản</p>
				<p>(*) Kiểm tra số điện thoại nhận tiền và chủ tài khoản</p>
				<p>(***) Những thẻ bị điền sai thông tin chúng tôi sẽ không chịu trách nhiệm và không bồi thường.</p>
			</div>
		</div>
	);
}

export default MomoRecharge;
