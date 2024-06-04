(async () => {
  if (!crypto) return
  const c = crypto.subtle

  const pw = document.querySelector('.pw')! as HTMLDivElement
  const details = document.querySelector('.details')! as HTMLDivElement
  let input = "", done = false

  const show = () => pw.innerText = input

  const deriveKey = async (pass: string, salt: string) => {
    const key = await c.importKey("raw", new TextEncoder().encode(pass), { name: "PBKDF2" }, false, ["deriveKey"])
    const derived = await c.deriveKey(
      { name: "PBKDF2", salt: new TextEncoder().encode(salt), iterations: 100000, hash: "SHA-256" },
      key,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    )
    return derived
  }

  const hex2buf = (s: string) => new Uint8Array(s.match(/../g)!.map(h=>parseInt(h,16)))

  const open = async (pass: string) => {
    input = "Loading…"
    show()
    const content = (await import('./content.json')).default
    const iv = new TextEncoder().encode(content.iv)
    const key = await deriveKey(pass, content.salt)
    try { 
      const decrypted = await c.decrypt({ name: "AES-GCM", iv }, key, hex2buf(content.data))
      details.innerText = new TextDecoder().decode(decrypted)
    } catch (e) {
      return false;
    }
    return true;
  }

  document.addEventListener('keyup', async e => {
    if (done) return
    if (e.key === 'Backspace') { input = input.slice(0, -1); return show(); }
    if (e.key === "Enter") {
      done = await open(input)
      input = ""
      show()
      return
    }

    if (input.length > 32) return
    if (e.key.length !== 1) return

    input += e.key
    show()
  })
})()