with open('D:/downloads/BRT/portfolio-web/src/SumoRobotCaseStudy.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update section numbers to match other case studies
text = text.replace('<span className="cs-section-num">01</span>', '<span className="cs-section-num">01 / CHALLENGE &amp; CONSTRAINTS</span>')
text = text.replace('<span className="cs-section-num">02</span>', '<span className="cs-section-num">02 / CAD DESIGN &amp; MECHANICAL STRUCTURE</span>')
text = text.replace('<span className="cs-section-num">03</span>', '<span className="cs-section-num">03 / ELECTRICAL &amp; CONTROL SYSTEM</span>')
text = text.replace('<span className="cs-section-num">04</span>', '<span className="cs-section-num">04 / RETROSPECTIVE &amp; ITERATIONS</span>')

# 2. Update dimensions in table to be accurate constraints
old_dim = """              <tr>
                <td><strong>Chassis Dimensions</strong></td>
                <td>Max 200 mm × 200 mm</td>
                <td><strong>192 mm (L) × 188 mm (W) × 95 mm (H)</strong></td>
                <td>Provides 4–6 mm clearance margin while maximizing wheel track width for roll stability.</td>
              </tr>
              <tr>
                <td><strong>Combat Mass</strong></td>
                <td>Maximum 1,000 g (1 kg)</td>
                <td><strong>960 – 980 g (ready-to-fight)</strong></td>
                <td>Mass concentrated as low as possible over the 4 drive axles to prevent tipping during head-on impact.</td>
              </tr>"""

new_dim = """              <tr>
                <td><strong>Chassis Dimensions</strong></td>
                <td>Max 200 mm × 200 mm</td>
                <td><strong>&lt;200 mm × 200 mm Boundary Limit</strong></td>
                <td>Designed within standard 1 kg RC sumo boundaries while maximizing wheel track width for roll stability.</td>
              </tr>
              <tr>
                <td><strong>Combat Mass</strong></td>
                <td>Maximum 1,000 g (1 kg)</td>
                <td><strong>Target &le;1,000 g Ready-to-Fight</strong></td>
                <td>Mass centered low across the 4 planetary drive axles to maintain maximum tire traction during push contests.</td>
              </tr>"""

assert old_dim in text, 'old_dim not found'
text = text.replace(old_dim, new_dim, 1)

with open('D:/downloads/BRT/portfolio-web/src/SumoRobotCaseStudy.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated SumoRobotCaseStudy successfully!')
