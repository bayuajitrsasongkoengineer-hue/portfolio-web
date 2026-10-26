with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('projects = [')
sub = text[pos:pos+3500]
print(sub.encode('ascii', errors='replace').decode('ascii'))
