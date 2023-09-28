// import React, {useEffect} from 'react'
// import jwtDecode from 'jwt-decode';
// import {useNavigate} from 'react-router-dom'

// const Dashboard = () => {
//     const navigate = useNavigate()

//     async function populateQuote(){
//         const req = await fetch('http://localhost:1337/api/quote', {headers:{'x-access-token': localStorage.getItem('token')}})

//         const data = req.json()
//         console.log(data)

//     }

//     useEffect( ()=>{
//         const token = localStorage.getItem('token')
//         if(token){
//             const student = jwtDecode(token);
//             if(!student){
//                 localStorage.removeItem('token')
//                 navigate('/login', { replace: true })
//             }else{
//                 populateQuote()
//             }
//             console.log(student)
//         }

//     }, [navigate])
//     return <h1>Your quote: {quote || 'No quote found'}</h1>
// }
// export default Dashboard

import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
	const navigate = useNavigate()
	const [quote, setQuote] = useState('')
	const [tempQuote, setTempQuote] = useState('')

	async function populateQuote() {
		const req = await fetch('http://localhost:1337/api/quote', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(data.quote)
		} else {
			alert(data.error)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
            const student = jwtDecode(token);
			if (!student) {
				localStorage.removeItem('token')
                navigate('/login', { replace: true })
			} else {
				populateQuote()
			}
		}
	}, [])

	async function updateQuote(event) {
		event.preventDefault()

		const req = await fetch('http://localhost:1337/api/quote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				quote: tempQuote,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(tempQuote)
			setTempQuote('')
		} else {
			alert(data.error)
		}
	}

	return (
		<div>
			<h1>Your quote: {quote || 'No quote found'}</h1>
			<form onSubmit={updateQuote}>
				<input
					type="text"
					placeholder="Quote"
					value={tempQuote}
					onChange={(e) => setTempQuote(e.target.value)}
				/>
				<input type="submit" value="Update quote" />
			</form>
		</div>
	)
}

export default Dashboard