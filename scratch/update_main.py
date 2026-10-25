with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Add import
old_imp = "import LineFollowerCaseStudy from './LineFollowerCaseStudy';"
new_imp = "import LineFollowerCaseStudy from './LineFollowerCaseStudy';\nimport SumoRobotCaseStudy from './SumoRobotCaseStudy';"
assert old_imp in text, 'old_imp not found'
text = text.replace(old_imp, new_imp, 1)

# Add route
old_route = """  if (slug === 'line-follower') {
    return (
      <>
        <FigmaHeader />
        <LineFollowerCaseStudy />
        <Footer />
      </>
    );
  }"""

new_route = """  if (slug === 'line-follower') {
    return (
      <>
        <FigmaHeader />
        <LineFollowerCaseStudy />
        <Footer />
      </>
    );
  }
  if (slug === 'sumo-robot') {
    return (
      <>
        <FigmaHeader />
        <SumoRobotCaseStudy />
        <Footer />
      </>
    );
  }"""

assert old_route in text, 'old_route not found'
text = text.replace(old_route, new_route, 1)

with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated main.jsx successfully with SumoRobotCaseStudy')
