import './styles.css';
import javaPng from '../../assets/images/java.png';
import apkPng from '../../assets/images/apk.png';
import playPng from '../../assets/images/play.png';
import pcPng from '../../assets/images/pc.png';
import ipPng from '../../assets/images/ip.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from 'constants';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
	const [postData, setPostData] = useState({});

	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`${BASE_URL}/v1/posts/${id}`)
			.then(function (response) {
				setPostData(response.data);
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
						<a href='http://wap.teamobi.com/game/jar/116/4' target={'_blank'}>
							<img src={javaPng} />
						</a>
						<div className='home__download__item__text'>
							<p>250</p>
							<p></p>
						</div>
					</div>
					<div className='home__download__item'>
						<a href='http://dl.teamobi.com/drive/get/mF' target={'_blank'}>
							<img src={apkPng} />
						</a>
						<div className='home__download__item__text'>
							<p>250</p>
							<p>Hướng dẫn cài</p>
						</div>
					</div>
					<div className='home__download__item'>
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
					</div>
					<div className='home__download__item'>
						<a href='http://dl.teamobi.com/drive/get/ll' target={'_blank'}>
							<img src={pcPng} />
						</a>
						<div className='home__download__item__text'>
							<p>248</p>
							<p></p>
						</div>
					</div>
					<div className='home__download__item'>
						<a href='https://testflight.apple.com/join/bOzxqdei' target={'_blank'}>
							<img src={ipPng} />
						</a>
						<div className='home__download__item__text'>
							<p>247</p>
							<p>TestFlight</p>
						</div>
					</div>
				</div>
			</div>
			<div className='content-frame' dangerouslySetInnerHTML={{ __html: postData?.content }}></div>
		</>
	);
}
