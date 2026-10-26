with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('id="contact"')
print(text[pos:pos+1500].encode('ascii', errors='replace').decode('ascii'))
