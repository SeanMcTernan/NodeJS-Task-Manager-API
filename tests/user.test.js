const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Sean',
    email: 'seanmc@example.com',
    password: 'NewPass1234567!!'
}

beforeEach( async () => {
    await User.deleteMany()
    await new User (userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: "Sean",
        email: "Sean@example.com",
        password: "NewPAss1234%"
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login non-existant user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: '999ggbbnnm'
    }).expect(400)
})