import { vi, beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './__test__/mocks/server'

// A light-weight module that brings Fetch API to Node.js.
import nodeFetch, { Headers, Request } from 'node-fetch'

vi.stubGlobal('fetch', nodeFetch)
vi.stubGlobal('Request', Request)
vi.stubGlobal('Headers', Headers)

beforeAll(() => {
  server.listen()
  // server.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
  vi.unstubAllGlobals()
})
