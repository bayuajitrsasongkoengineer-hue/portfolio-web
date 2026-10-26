with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('projects = [')
sub = text[pos+3000:pos+7000]
print(sub.encode('ascii', errors='replace').decode('ascii'))
