#!/usr/bin/env python3

"""
build_cv.py
Author: Francois Charih <francois.charih@gmail.com>
Date created: 10/10/18

Description: This script builds my CV using the template defined in the "latex" folder.
"""
import yaml
import os
import sys
import subprocess as sp
import jinja2
from jinja2 import Template

latex_jinja_env = jinja2.Environment(
	block_start_string = '\BLOCK{',
	block_end_string = '}',
	variable_start_string = '\VAR{',
	variable_end_string = '}',
	comment_start_string = '\#{',
	comment_end_string = '}',
	line_statement_prefix = '%%',
	line_comment_prefix = '%#',
	trim_blocks = True,
	autoescape = False,
	loader = jinja2.FileSystemLoader(os.path.abspath('/'))
)

def journal_to_string(publication):
    volume = f" {publication['volume']}" if publication['volume'] != '' else ''
    issue = f"({publication['issue']})" if publication['issue'] != '' else ''
    pages = f" {publication['pages']}" if publication['pages'] != '' else ''
    additional_info = volume + issue + pages + "."
    comment = f"({publication['comment']})" if publication['comment'] != '' else ''
    title = f"\siteurl{{{publication['title']}}}{{{publication['url']}}}" if publication['url'] else f"{publication['title']}"
    return f"{publication['authors']}. {title} ({publication['year']}). \\textit{{{publication['publisher']}}}{additional_info} {comment}"


def conference_to_string(publication):
    comment = f"({publication['comment']})" if publication['comment'] != '' else ''
    url = f"url: \siteurl{{(paper)}}{{{publication['url']}}}" if publication['url'] != '' else ''
    title = f"\siteurl{{{publication['title']}}}{{{publication['url']}}}" if publication['url'] else f"{publication['title']}"
    return f"{publication['authors']}. {title}. \\textit{{{publication['conference']}}}, {publication['location']}, {publication['date']}."

def other_to_string(publication):
    url = f"\siteurl{{(paper)}}{{{publication['url']}}}" if publication['url'] != '' else ''
    comment = f" ({publication['comment']})" if publication['comment'] != '' else ''
    title = f"\siteurl{{{publication['title']}}}{{{publication['url']}}}" if publication['url'] else f"{publication['title']}"
    return f"{publication['authors']}. {title}. \\textit{{{publication['type']}}}, {publication['publisher']}, {publication['location']}, {publication['date']}, ({publication['num_pages']} pages). {comment}"

def publications_to_string(publications):
    publist = []
    for pub in publications:
        string = ""
        if pub['type'] == 'journal':
            string = journal_to_string(pub)
        elif pub['type'] == 'conference':
            string = conference_to_string(pub)
        else:
            string = other_to_string(pub)
        string = string.replace("F. Charih", "\\textbf{{\\underline{{F. Charih}}}}")
        publist.append({ "string": string, "type": pub['type']})
    return publist

template = latex_jinja_env.get_template(os.path.realpath('./templates/template.tex'))

CONTENTS_DIR = '../src/content/cv'

data = None

contents = {}
degree = None
for content_file in os.listdir(CONTENTS_DIR):
    if not content_file.endswith('.yaml'): continue
    with open(CONTENTS_DIR + '/' + content_file) as yaml_content:
        contents[content_file.rstrip('.yaml')] = yaml.load(yaml_content.read())

cv_string = template.render(
    degrees=contents['education'],
    posters=contents['posters'],
    employments=contents['employment'],
    mentoring=contents['mentoring'],
    presentations=contents['presentations'],
    awards=contents['awards'],
    involvement=contents['involvement'],
    publications=publications_to_string(contents["publications"])
)

# Write the cv
open('output_files/temp.tex', 'w').write(cv_string)

# Compile it
sp.run('xelatex -interaction=nonstopmode -output-directory="." output_files/temp.tex', shell=True)
sp.run('mv temp.pdf charih_cv.pdf', shell=True)
