import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import './App.css';

const App = () => {

	const [counter, setCounter] = useState('')

	const flag = useRef(true)

	const phrases = ['Congratulations!', 'Did you know?', 'Amazing!', "Wow!", 'Unbelievable!', 'Such Luck!']

	useEffect(
		() => {
			if (flag.current) {
				flag.current = false
				const counterValue = localStorage.getItem('counter')
				if (counterValue) {
					axios.get('http://api.webapp.test/read', {
						"Access-Control-Allow-Origin": "*"
					})
						.then(res => {
							if (res.data) {
								setCounter(res.data.data)
								localStorage.setItem('counter', res.data.data)
							}
						})
				} else {
					axios.get('http://api.webapp.test/write',{
						"Access-Control-Allow-Origin": "*"
					})
						.then(res => {
							if (res.data) {
								setCounter(res.data.data)
								localStorage.setItem('counter', res.data.data)
							}
						})
				}
			}
		},[]
	)

	const randomMessage = () => {
		const number = Math.floor(Math.random() * 6)
		return phrases[number]
	}

	const suffix = () => {
		switch (counter) {
			case 1: return 'st'
			case 2: return 'nd'
			case 3: return 'rd'
			default: return 'th'
		}
	}

	return (
		<div className="app">
			<div className="card">
				{counter
					? <>
						<p>{randomMessage()}</p>
						<p>You are the {counter}{suffix()} visitor</p>
					</>
					: <p>Oops, something went wrong.. :(</p>}
			</div>
		</div>
	);
}

export default App;
