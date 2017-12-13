'use strict'

const expect = require('chai').expect
const helloworld = require('../index.js')

describe('Function hello()', () => {
	it('should return "Hello world from Nantes"', () => {
		expect(helloworld.hello()).to.equal('Hello world from Nantes')
	})
})