(TeX-add-style-hook
 "template"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "11pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("fontenc" "T1") ("inputenc" "utf8") ("gillius" "default") ("biblatex" "style=trad-abbrv") ("geometry" "margin=0.75in")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art11"
    "fontenc"
    "inputenc"
    "gillius"
    "amsmath"
    "biblatex"
    "MnSymbol"
    "fancyhdr"
    "fontawesome"
    "wasysym"
    "xcolor"
    "enumitem"
    "hyperref"
    "ifthen"
    "xifthen"
    "geometry")
   (TeX-add-symbols
    '("mentoring" 5)
    '("award" 5)
    '("poster" 6)
    '("education" 7)
    '("header" 1)
    '("siteurl" 2))
   (LaTeX-add-bibliographies
    "temp"))
 :latex)

