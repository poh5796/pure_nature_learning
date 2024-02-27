export function convertDriveUrl(originalUrl: string): string {
  // Split the URL by '/' and get the last segment
  const segments = originalUrl.split("/");
  const fileId = segments[segments.length - 2]; // Get the segment before 'view'
  // Extract the file ID from the segment
  // const fileId = fileIdSegment.split("/d/")[1]?.split("/")[0];
  // console.log(segments);
  // console.log(fileIdSegment);
  // console.log(fileId);

  if (fileId) {
    // Construct the new URL with the extracted ID
    const convertedUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return convertedUrl;
  } else {
    // If the URL format is incorrect or doesn't match, return original URL
    return originalUrl;
  }
}
