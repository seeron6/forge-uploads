// Forge — File Uploads. Signed URL + tus resumable.

import { createHmac } from 'node:crypto';

export interface SignedURL {
  url: string;
  expiresAt: number;
}

export function signGet(
  bucket: string,
  key: string,
  secret: string,
  ttlSeconds = 3600,
): SignedURL {
  const expiresAt = Math.floor(Date.now() / 1000) + ttlSeconds;
  const sig = createHmac('sha256', secret).update(`GET:${bucket}/${key}:${expiresAt}`).digest('hex');
  return {
    url: `https://${bucket}.s3.example/${encodeURIComponent(key)}?expires=${expiresAt}&sig=${sig}`,
    expiresAt: expiresAt * 1000,
  };
}

export interface ResumableUpload {
  uploadId: string;
  partSize: number;
  parts: { etag: string; partNumber: number }[];
}
