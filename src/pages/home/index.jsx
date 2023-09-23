import './styles.css';
import javaPng from '../../assets/images/java.png';
import apkPng from '../../assets/images/apk.png';
import playPng from '../../assets/images/play.png';
import pcPng from '../../assets/images/pc.png';
import ipPng from '../../assets/images/ip.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from 'constants';
import { useNavigate } from 'react-router-dom';

function Home() {
	const [content, setContent] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${BASE_URL}/v1/posts`)
			.then(function (response) {
				setContent(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<>
			<div className='home__gif'></div>
			<div className='content-frame'>
				<div className='home__download'>
					<div className='home__download__item'>
						<a href='https://www.mediafire.com/file/n73jv332aazung5/HSOTIHON_%25282%2529.jar/file' target={'_blank'}>
							<img src={javaPng} />
						</a>
						<div className='home__download__item__text'>
							<p>250</p>
							<p></p>
						</div>
					</div>
					<div className='home__download__item'>
						<a href='https://www.mediafire.com/file/wbytfswy290k2zv/Hi%25E1%25BB%2587p_s%25C4%25A9_t%25C3%25AD_hon.apk/file' target={'_blank'}>
							<img src={apkPng} />
						</a>
						<div className='home__download__item__text'>
							<p>250</p>
							<p>Hướng dẫn cài</p>
						</div>
					</div>
					{/* <div className='home__download__item'>
						<a
							href='https://play.google.com/store/apps/details?id=com.silverbat.knightage'
							target={'_blank'}
						>
							<img src={playPng} />
						</a>
						<div className='home__download__item__text'>
							<p>250</p>
							<p></p>
						</div>
					</div> */}
					<div className='home__download__item'>
						<a href='https://www.mediafire.com/file/r9cjl8ivjm4mli1/Hi%25E1%25BB%2587p_S%25C4%25A9_T%25C3%25AD_Hon.rar/file' target={'_blank'}>
							<img src={pcPng} />
						</a>
						<div className='home__download__item__text'>
							<p>248</p>
							<p></p>
						</div>
					</div>
					<div className='home__download__item'>
						<a href='https://www.mediafire.com/file/m8ufyo4gol7xk9b/Payload.ipa/file' target={'_blank'}>
							<img src={ipPng} />
						</a>
						<div className='home__download__item__text'>
							<p>247</p>
							<p>TestFlight</p>
						</div>
					</div>
				</div>
			</div>
			<div className='content-frame'>
				{!!content.length &&
					content.map(item => (
						<div
							className='horizontal-box'
							key={item.id}
							onClick={() => navigate(`/post-detail/${item.id}`)}
						>
							{item?.title || item?.id}
						</div>
					))}
			</div>
		</>
	);
}

export default Home;
