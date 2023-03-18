import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Home from 'pages/home';
import Header from 'components/header';
import Footer from 'components/footer';
import Account from 'pages/account';
import Login from 'pages/login';
import Register from 'pages/register';
import Recharge from 'pages/recharge';
import Ranking from 'pages/ranking';
import MobileRecharge from 'pages/mobile-recharge';
import MomoRecharge from 'pages/momo-recharge';
import ChangePassword from 'pages/change-password';
import PostDetail from 'pages/post-detail';

function App() {
	return (
		<div className='app'>
			<ToastContainer
				position='top-center'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Header />
			<div className='content-container'>
				<Routes>
					<Route path='/account' element={<Account />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/recharge' element={<Recharge />} />
					<Route path='/ranking' element={<Ranking />} />
					<Route path='/mobile-recharge' element={<MobileRecharge />} />
					<Route path='/momo-recharge' element={<MomoRecharge />} />
					<Route path='/banking' element={<MomoRecharge isMomo={false} />} />
					<Route path='/change-password' element={<ChangePassword />} />
					<Route path='/post-detail/:id' element={<PostDetail />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
