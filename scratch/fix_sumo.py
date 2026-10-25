with open('D:/downloads/BRT/portfolio-web/src/SumoRobotCaseStudy.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace $m_{opp} \cdot g$ with standard text
# Replace $F_{friction} = \mu \cdot N$ with standard text
# Replace $N$ with N
old_text = 'The acute inclined front wedge is engineered to slip beneath the opposing robot\'s skirt. When the opponent rides up onto the incline, its weight ($m_{opp} \\cdot g$) transfers directly onto our front drive wheels, dramatically increasing our effective normal force ($N$) and maximum pushing friction ($F_{friction} = \\mu \\cdot N$) while breaking the opponent\'s traction with the dohyo surface.'

new_text = 'The acute inclined front wedge is engineered to slip beneath the opposing robot\'s skirt. When the opponent rides up onto the incline, its weight (m &middot; g) transfers directly onto our front drive wheels, dramatically increasing our effective normal force (N) and maximum pushing friction (F_friction = &mu; &middot; N) while breaking the opponent\'s traction with the dohyo surface.'

assert old_text in text, 'old_text not found'
text = text.replace(old_text, new_text, 1)

with open('D:/downloads/BRT/portfolio-web/src/SumoRobotCaseStudy.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Replaced LaTeX in SumoRobotCaseStudy successfully!')
