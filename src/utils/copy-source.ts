/**
 * Utility functions for working with GitHub source files
 */

/**
 * Constructs the GitHub URL for an example source file
 * @param fileName Name of the source file
 * @returns GitHub URL to view the file in GitHub
 */
export const getSourceFileUrl = (fileName: string): string => {
  const baseUrl = 'https://github.com/youknowriad/wpui/blob/main/src/examples/';
  return `${baseUrl}${fileName}`;
};

/**
 * Fetches and copies source code to clipboard
 * @param fileName Name of the example source file
 * @returns Promise that resolves when copying is complete
 */
export const copySourceToClipboard = async (fileName: string): Promise<boolean> => {
  try {
    // Create GitHub raw content URL
    const githubRawUrl = getSourceFileUrl(fileName).replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
    
    // Fetch the content
    const response = await fetch(githubRawUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch source: ${response.statusText}`);
    }
    
    const sourceCode = await response.text();
    
    // Copy to clipboard
    await navigator.clipboard.writeText(sourceCode);
    return true;
  } catch (error) {
    console.error('Error copying source:', error);
    return false;
  }
};