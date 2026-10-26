with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update card 02 in main.jsx: change ±0.3°C to ±0.6°C
old_card_solar = "test: 'Subsystem verified with temperature sensor precision within \u00b10.3\u00b0C across trials. Automated cooling duty cycle reduced surface temperature by >16\u00b0C back to 25\u00b0C.',"
new_card_solar = "test: 'Subsystem verified with temperature sensor accuracy within \u00b10.6\u00b0C against calibrated reference thermometer. Automated cooling duty cycle reduced surface temperature by >16\u00b0C back to 25\u00b0C.',"

if old_card_solar in text:
    text = text.replace(old_card_solar, new_card_solar)
    print('Updated solar card text in main.jsx')
else:
    # Try ASCII match
    import re
    m = re.search(r"test:\s*'Subsystem verified with temperature sensor precision within [^']+',", text)
    if m:
        text = text[:m.start()] + new_card_solar + text[m.end():]
        print('Regex updated solar card text in main.jsx')
    else:
        print('Solar card text NOT found in main.jsx')

with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'w', encoding='utf-8') as f:
    f.write(text)
