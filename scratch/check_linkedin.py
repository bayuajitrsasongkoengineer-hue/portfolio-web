with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'linkedin\.com/in/[a-zA-Z0-9_\-]+', text)
print('LinkedIn URLs in main.jsx:', set(matches))
