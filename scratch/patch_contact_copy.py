with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update Contact heading and paragraph
old_contact_block = """              <div className="fh-eyebrow"><span>05 /</span> GET IN TOUCH</div>
              <h2>Let's build<br />what comes next.</h2>
              <p>Have an engineering role in mind? Let's talk about robotics, mechatronics and building useful systems.</p>"""

new_contact_block = """              <div className="fh-eyebrow"><span>05 /</span> GET IN TOUCH</div>
              <h2>Eager to learn,<br />ready to contribute.</h2>
              <p>As a fresh electrical engineering graduate, I bring solid hands-on fundamentals in mechatronics and prototyping—along with an eager mindset to learn, adapt, and be mentored by experienced teams. Actively seeking entry-level engineering roles in robotics, manufacturing, or hardware development.</p>"""

if old_contact_block in text:
    text = text.replace(old_contact_block, new_contact_block)
    print('Replaced contact section copy!')
else:
    print('old_contact_block NOT found')

# 2. Fix LinkedIn typo if any: change bayuajitrasasongko to bayuajitrisasongko
if 'bayuajitrasasongko' in text:
    text = text.replace('bayuajitrasasongko', 'bayuajitrisasongko')
    print('Fixed LinkedIn URL typo (added missing i in trisasongko)!')

with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'w', encoding='utf-8') as f:
    f.write(text)
