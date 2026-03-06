# Document Ingest

## Supported formats

- PDF
- CSV
- TXT
- Markdown

## Extraction order

### PDF

1. `pdfplumber`
2. `pypdf`
3. `pdftotext` CLI fallback

Failure is explicit if all three fail.

### CSV

- parsed row-by-row
- normalized into pipe-delimited text chunks

### TXT / Markdown

- decoded with replacement on bad bytes
- chunked by sentence boundaries

## Pipeline

1. Create or update a `documents` record.
2. Extract page-like text units.
3. Chunk text into manageable blocks.
4. Store `document_chunks` with parser and page provenance.
5. Extract top phrases heuristically into memes.
6. Add co-occurrence edges inside each chunk.
7. Materialize a memode when a chunk yields at least two memes.

## Provenance kept

- source path
- document id
- chunk id
- page number where available
- parser used

## Observed validation

This build validated a real PDF ingest on:

- `assets/seed_canon/eden_whitepaper_v14.pdf`

Observed result:

- `24` page-like units
- parser: `pdfplumber`
