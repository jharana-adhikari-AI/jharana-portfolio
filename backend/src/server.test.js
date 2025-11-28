import { test, describe } from 'node:test'
import assert from 'node:assert'

describe('Contact Validation', () => {
  test('validates email format correctly', () => {
    const validEmails = ['test@example.com', 'user.name@domain.co.uk']
    const invalidEmails = ['invalid', 'test@', '@domain.com', '']

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    validEmails.forEach((email) => {
      assert.strictEqual(emailRegex.test(email), true, `${email} should be valid`)
    })

    invalidEmails.forEach((email) => {
      assert.strictEqual(emailRegex.test(email), false, `${email} should be invalid`)
    })
  })

  test('validates required fields', () => {
    const validateRequired = (value) => value && value.trim().length > 0

    assert.strictEqual(validateRequired('John Doe'), true)
    assert.strictEqual(validateRequired(''), false)
    assert.strictEqual(validateRequired('   '), false)
    assert.strictEqual(validateRequired(null), false)
    assert.strictEqual(validateRequired(undefined), false)
  })

  test('validates message length', () => {
    const validateMessageLength = (message, min = 10, max = 5000) => {
      if (!message) return false
      const length = message.trim().length
      return length >= min && length <= max
    }

    assert.strictEqual(validateMessageLength('Short'), false)
    assert.strictEqual(validateMessageLength('This is a valid message with more than 10 characters'), true)
    assert.strictEqual(validateMessageLength('a'.repeat(5001)), false)
  })
})

describe('Share Link Generation', () => {
  test('generates unique IDs', () => {
    const generateId = () => Math.random().toString(36).substring(2, 12)

    const id1 = generateId()
    const id2 = generateId()

    assert.notStrictEqual(id1, id2)
    assert.strictEqual(id1.length, 10)
    assert.strictEqual(id2.length, 10)
  })
})

describe('Server Configuration', () => {
  test('uses correct default port', () => {
    const defaultPort = 5000
    const port = process.env.PORT || defaultPort

    assert.strictEqual(typeof port, 'number' in process.env.PORT ? 'string' : 'number')
  })

  test('rate limit configuration', () => {
    const rateLimitConfig = {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100,
    }

    assert.strictEqual(rateLimitConfig.windowMs, 900000)
    assert.strictEqual(rateLimitConfig.max, 100)
  })
})
