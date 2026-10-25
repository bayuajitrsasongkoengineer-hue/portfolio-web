import urllib.request
import re

url = 'https://portobayu.vercel.app/projects/sumo-robot'
try:
    resp = urllib.request.urlopen(url)
    print('Sumo Vercel Status:', resp.getcode())
    html = resp.read().decode('utf-8')
    scripts = re.findall(r'src=["\']([^"\']+)["\']', html)
    print('Scripts found:', scripts)
    for s in scripts:
        full_url = s if s.startswith('http') else ('https://portobayu.vercel.app' + s)
        s_resp = urllib.request.urlopen(full_url)
        print(s, 'Status:', s_resp.getcode(), 'Bytes:', len(s_resp.read()))
except Exception as e:
    print('Error:', e)
