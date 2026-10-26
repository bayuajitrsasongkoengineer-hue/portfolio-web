with open('D:/downloads/BRT/portfolio-web/src/SolarCoolingCaseStudy.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Add bullet about ±0.6°C sensor benchmark
target = "The sensor-relay control loop maintained consistent repeatability with activation trigger deviation kept within <strong>\u00b10.3\u00b0C</strong> across all outdoor trials, confirming prompt thermal mitigation before deep heat soak occurs."
replacement = "The sensor-relay control loop maintained consistent repeatability with activation trigger deviation kept within <strong>\u00b10.3\u00b0C</strong> across trials. Subsystem calibration verified temperature probe measurement accuracy within <strong>\u00b10.6\u00b0C</strong> against a reference calibrated thermometer."

if target in text:
    text = text.replace(target, replacement)
    print('Updated SolarCoolingCaseStudy.jsx')
else:
    print('Target not found in SolarCoolingCaseStudy.jsx')

with open('D:/downloads/BRT/portfolio-web/src/SolarCoolingCaseStudy.jsx', 'w', encoding='utf-8') as f:
    f.write(text)
