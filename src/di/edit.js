const fs = require('fs')
const crypto = require('crypto')
const readline = require('readline')

;(async () => {
  const makeBuffer = s => Buffer.from(s, 'utf8')

  // Read from stdin
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const password = makeBuffer(await new Promise(resolve => {
    rl.question('Password: ', a => { rl.close(); resolve(a) })
  }))
  const content = JSON.parse(fs.readFileSync('content.json', 'utf8'))
  
  const key = crypto.pbkdf2Sync(password, makeBuffer(content.salt), 1e5, 256/8, 'sha256')
  const iv = makeBuffer(content.iv)
  const data = Buffer.from(content.data, 'hex')
  const authTag = data.subarray(-16)
  const encryptedData = data.subarray(0, -16)
  
  const decrypt = () => {
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv)
    decipher.setAuthTag(authTag)
    const decrypted = decipher.update(encryptedData, 'binary', 'utf-8')
    return decrypted + decipher.final('utf-8')
  }
  
  fs.writeFileSync('decr', decrypt(), 'utf-8')
  // Spawn nvim for editing
  const { spawn } = require('child_process')
  const nvim = spawn('nvim', ['decr'], { stdio: 'inherit' })

  await new Promise(resolve => nvim.on('exit', resolve))
  const read = fs.readFileSync('decr', 'utf-8')
  fs.unlinkSync('decr')

  const encrypt = () => {
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
    const encrypted = Buffer.concat([cipher.update(read, 'utf-8'), cipher.final()])
    // Append auth tag
    return Buffer.concat([encrypted, cipher.getAuthTag()])
  }

  const hex = encrypt().toString('hex')
  content.data = hex
  fs.writeFileSync('content.json', JSON.stringify(content), 'utf-8')
})()
