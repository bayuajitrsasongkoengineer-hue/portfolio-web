with open('D:/downloads/BRT/portfolio-web/src/LineFollowerCaseStudy.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = '<a href="/#projects" className="cs-nav-btn">\n          Back to All Projects <ArrowRight size={16} />\n        </a>'
replacement = '<a href="/projects/sumo-robot" className="cs-nav-btn">\n          Next: Bluetooth Sumo Robot <ArrowRight size={16} />\n        </a>'

assert target in text, 'target string not found'
text = text.replace(target, replacement, 1)

with open('D:/downloads/BRT/portfolio-web/src/LineFollowerCaseStudy.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated LineFollowerCaseStudy successfully')
