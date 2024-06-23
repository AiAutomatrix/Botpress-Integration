// facebookShare.ts

// Replace with your actual Facebook App ID and redirect URI
const app_id = '<YOUR_APP_ID>'; // Replace with your Facebook App ID
const link = 'https://developers.facebook.com/docs/';
const redirect_uri = 'https://your_redirect_uri_here'; // Replace with your redirect URI

const feedDialogUrl = `https://www.facebook.com/dialog/feed?app_id=${app_id}&display=popup&link=${encodeURIComponent(link)}&redirect_uri=${encodeURIComponent(redirect_uri)}`;

// Function to trigger the Feed Dialog
export async function openFeedDialog(): Promise<void> {
  // Open the Feed Dialog URL in a new window or popup
  window.open(feedDialogUrl, '_blank');
}
