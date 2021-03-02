#!/usr/bin/env python3
import subprocess as sp

sp.run("git add . && git commit && git push origin main;", shell=True)
sp.run("gatsby build --prefix-paths; cd resume; python3 build_cv.py; cd ..; cp resume/charih_cv.pdf public; cp CNAME public; gh-pages -d public", shell=True)
