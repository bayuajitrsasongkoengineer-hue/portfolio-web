import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    count = 0
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            count += 1
            print(f"[{os.path.basename(filepath)}] Replaced: {old[:40]}... -> {new[:40]}...")
        else:
            print(f"[{os.path.basename(filepath)}] NOT FOUND: {old[:50]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Finished {os.path.basename(filepath)}: {count} replacements.\n")

# 1. Main.jsx
main_reps = [
    (
        "'S-curve motion profile implementation in C/C++ to eliminate inertial jerk & vibration'",
        "'S-curve motion profile implementation in C/C++ to minimize inertial jerk and smooth acceleration transitions'"
    )
]
replace_in_file('D:/downloads/BRT/portfolio-web/src/main.jsx', main_reps)

# 2. SolarCoolingCaseStudy.jsx
solar_reps = [
    (
        "<strong style={{ color: '#16A34A' }}>100% Autonomous</strong>",
        "<strong style={{ color: '#16A34A' }}>Verified Autonomous</strong>"
    ),
    (
        "<strong>100% Cycle Accuracy</strong>",
        "<strong>Repeatable Cycle Response</strong>"
    ),
    (
        "The sensor-relay control loop maintained exceptional repeatability with activation trigger deviation kept within",
        "The sensor-relay control loop maintained consistent repeatability with activation trigger deviation kept within"
    )
]
replace_in_file('D:/downloads/BRT/portfolio-web/src/SolarCoolingCaseStudy.jsx', solar_reps)

# 3. KRAICaseStudy.jsx
krai_reps = [
    (
        "<strong>Sensory interlocks</strong> ensure foolproof sequencing: an analog",
        "<strong>Sensory interlocks</strong> provide deterministic sensor-actuator sequencing: an analog"
    )
]
replace_in_file('D:/downloads/BRT/portfolio-web/src/KRAICaseStudy.jsx', krai_reps)

# 4. LineFollowerCaseStudy.jsx
lf_reps = [
    (
        "The low internal on-resistance of MOSFETs eliminates thermal heatsinking requirements and drastically reduces voltage drops, delivering maximum battery power to the N20 gear motors.",
        "The low internal on-resistance of MOSFETs eliminates bulky heatsink requirements and substantially reduces internal conduction losses compared to bipolar drivers (such as L298N), delivering higher effective voltage to the N20 gear motors."
    ),
    (
        "ensuring zero backlash and high grip against competition tile surfaces.",
        "ensuring rigid motor mounting and stable surface grip on test track surfaces."
    )
]
replace_in_file('D:/downloads/BRT/portfolio-web/src/LineFollowerCaseStudy.jsx', lf_reps)

# 5. SumoRobotCaseStudy.jsx
sumo_reps = [
    (
        "dramatically increasing our effective normal force (N)",
        "effectively transferring opposing mass to increase our normal force (N)"
    ),
    (
        "distribute torsional load across multiple planet gears simultaneously. This ensures reliable shock-proof torque transfer and eliminates gear failure during extreme pushing stalls.",
        "distribute torsional load across multiple planet gears simultaneously. This provides robust torque transfer and significantly reduces gear tooth shearing risk during heavy pushing stalls."
    ),
    (
        "ultra-low transmission latency (&lt;25 ms)",
        "low command transmission latency (~15–25 ms)"
    ),
    (
        "Validated that 4-wheel independent planetary drive vastly outperforms 2-wheel configurations by eliminating slip and wheel-lift on high-friction dohyo rings.",
        "Validated that 4-wheel independent planetary drive maintains superior traction and ground contact stability over 2-wheel configurations on high-friction dohyo rings."
    )
]
replace_in_file('D:/downloads/BRT/portfolio-web/src/SumoRobotCaseStudy.jsx', sumo_reps)

print("ALL REPLACEMENTS APPLIED!")
