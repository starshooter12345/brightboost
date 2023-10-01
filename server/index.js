const express = require('express')
const app = express()
const cors=require('cors')
const mongoose = require('mongoose')
const Student = require('./models/student.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/bright-boost');

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await Student.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const student = await Student.findOne({
		email: req.body.email,
	})

	if (!student) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		student.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: student.name,
				email: student.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', student: token })
	} else {
		return res.json({ status: 'error', student: false })
	}
})

app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const student = await Student.findOne({ email: email })

		return res.json({ status: 'ok', quote: student.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await Student.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.listen(1337, () => {
	console.log('Server started on 1337')
})