with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace sumo-robot metrics in main.jsx
old_metrics = """      ['1 KG / 20×20 CM', 'Chassis mass and dimension limit compliance'],
      ['UP TO 4 KG', 'Tested push load capacity (4× robot mass)'],
      ['4 MOTORS', 'Independent high-torque drive wheels'],
      ['BLUETOOTH', 'Wireless smartphone real-time remote control']"""

new_metrics = """      ['1 KG / 20×20 CM', 'Chassis mass and dimension limit compliance'],
      ['4× PG24 MOTORS', 'Independent planetary high-torque drive axles'],
      ['3S LIPO / L298N', '11.1V high-current motor power delivery'],
      ['BLUETOOTH', 'Wireless smartphone real-time remote control']"""

assert old_metrics in text, 'old_metrics not found in main.jsx'
text = text.replace(old_metrics, new_metrics, 1)

with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated main.jsx sumo-robot metrics successfully!')
