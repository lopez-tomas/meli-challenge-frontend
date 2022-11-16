const clearURL = (url: string): string => {
  return url
          .toLowerCase()
          .replace(/\s/g, '-')
          .replace(/[^a-z0-9-]/g, '')
}

export {
  clearURL,
}