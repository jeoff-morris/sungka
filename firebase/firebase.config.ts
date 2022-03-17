import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
	apiKey: 'AIzaSyAkY-RJNFi92P1jlJDYVx1a__VaS5FHpU8',
	authDomain: 'sungkalive.firebaseapp.com',
	projectId: 'sungkalive',
	storageBucket: 'sungkalive.appspot.com',
	messagingSenderId: '213481263584',
	appId: '1:213481263584:web:1fd4662d8214e3981edb85',
	measurementId: 'G-9W787S5JHW'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
