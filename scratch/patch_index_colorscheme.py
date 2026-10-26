with open('D:/downloads/BRT/portfolio-web/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

target = '<meta name="theme-color" content="#f6f7f5" />'
replacement = '<meta name="color-scheme" content="light only" />\n    <meta name="theme-color" content="#f6f7f5" />'

if target in text:
    text = text.replace(target, replacement, 1)
    with open('D:/downloads/BRT/portfolio-web/index.html', 'w', encoding='utf-8') as f:
        f.write(text)
    print('Inserted color-scheme meta tag successfully!')
else:
    print('Target not found')
