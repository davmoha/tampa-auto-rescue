export function lovableAssetUrl(asset: { url: string }): string {
  return asset.url.startsWith("/__l5e/")
    ? `https://cdn.lovable.app${asset.url}`
    : asset.url;
}
