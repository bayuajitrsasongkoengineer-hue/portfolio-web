with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('id="education"')
print(text[pos:pos+2500])
