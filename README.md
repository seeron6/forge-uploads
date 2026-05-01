# forge-uploads

Resumable uploads, virus scan, image transforms, signed URLs.

> A Forge framework. **Live preview**: https://cdn.jsdelivr.net/gh/seeron6/forge-uploads@main/preview/index.html

## What it is

Resumable multipart uploads to S3-compatible storage, async virus scanning, on-the-fly image transforms, and signed-URL access controls.

## Features

- **Resumable** — tus protocol
- **Virus scan** — Async ClamAV pipeline
- **Transforms** — Resize/format/blur on read
- **Signed URLs** — Per-user expiry

## Stack

`node`, `s3`, `clamav`

## Layout

```
src/
└── index.ts          # Reference implementation
preview/
└── index.html        # Live preview surface (loaded by Forge sandbox)
forge.config.json     # Registry manifest (stripped at fork time)
forge.schema.json     # Config schema — drives the dashboard UI
```

## Forking

This repo is a GitHub template. Fork it through the Forge dashboard or directly via:

```
gh repo create your-org/your-uploads --template seeron6/forge-uploads --public
```

When you fork through Forge, the registry records the diff and links your fork
to the variant tree.

---

Forge is a living framework registry — every fork sharpens the next adoption.
Browse more at the registry: <https://github.com/seeron6/ForgeAI>.
