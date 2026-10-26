with open('D:/downloads/BRT/portfolio-web/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

target = '<meta name="color-scheme" content="light only" />'
replacement = '<meta name="color-scheme" content="light" />\n    <meta name="supported-color-schemes" content="light" />'

if target in text:
    text = text.replace(target, replacement, 1)
    with open('D:/downloads/BRT/portfolio-web/index.html', 'w', encoding='utf-8') as f:
        f.write(text)
    print('Updated index.html meta tags successfully!')
else:
    print('Target not found in index.html')
