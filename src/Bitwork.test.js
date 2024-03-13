const bitwork = require('bitwork')
const bit = new bitwork({ rpc: { protocol: "https", host: "miner.entangleit.com", user: "root", pass: "nfhRO+3[" }, peer: { host: "miner.entangleit.com", port: 80  } } )

describe('bitwork operations', () => {
  test('bitwork ready', async () => {
    expect(bit).toBeDefined()
  })  
  test('bitwork error', async () => {
    bit.on("error", async (err) => {
      console.log('bitwork error', err)
    })
    expect(bit).toBeDefined()
  })
  test('bitwork block', async () => {
    bit.on("block", async (block) => {
      console.log('bitwork block', block)
    })
    expect(bit).toBeDefined()
  })
  test('bitwork tx', async () => {
    bit.on("tx", async (tx) => {
      console.log('bitwork tx', tx)
    })
    expect(bit).toBeDefined()
  })
});
