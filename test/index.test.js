'use strict'

const expect = require('chai').expect
const helloworld = require('../index.js')

describe('Function hello()', () => {

	it('should return "Hello World from Nantes"', () => {
		expect(helloworld.hello()).to.equal('Hello World from Nantes')
	})

})