with open('D:/downloads/BRT/portfolio-web/src/figma.css', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('.fh-roles')
print(text[pos:pos+1500].encode('ascii', errors='replace').decode('ascii'))
