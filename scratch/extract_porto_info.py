with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Experience
pos_exp = text.find('id="experience"')
print('=== EXPERIENCE SECTION ===')
print(text[pos_exp:pos_exp+2500])

# Skills
pos_skills = text.find('engineeringDisciplines = [')
print('=== SKILLS SECTION ===')
print(text[pos_skills:pos_skills+2500])
