with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos_roles = text.find('className="fh-roles stagger"')
print(text[pos_roles:pos_roles+2200])
