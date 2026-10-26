with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('className="fh-experience-grid"')
end = text.find('</section>', pos)
print(text[pos:end].encode('ascii', errors='replace').decode('ascii'))
