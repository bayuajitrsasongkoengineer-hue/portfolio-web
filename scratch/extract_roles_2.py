with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos_roles = text.find('Mechanical Engineering Intern')
print(text[pos_roles:pos_roles+1000])
