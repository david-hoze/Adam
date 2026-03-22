# PDF Build Status Report

Status: `EXECUTED`

Attempted command:
- `latexmk -pdf -interaction=nonstopmode -halt-on-error main.tex`

Outcome:
- compiled PDF: `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/20260320_111343/pdf/adam_whitepaper_20260320_111343.pdf`
- pages: 18
- main-body word count (pages 1-9 via `pdftotext`): 7094
- figure registry count: 15 total (`8` observed / `7` synthetic)

Layout verification:
- method: rendered page 1 and page 11 to PNG with `pdftoppm`
- page 1 artifact: `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/20260320_111343/pdf/page1-01.png`
- page 11 artifact: `/Users/brianray/Adam/assets/white_paper_pipeline/white_paper_drafts/20260320_111343/pdf/page11-11.png`
- result: verified one-column top matter over a two-column body; figure pages rendered successfully.

Notes:
- residual overfull/underfull box warnings remain in `latex_main_build.log`, but the build completed and the layout contract was verified visually.
