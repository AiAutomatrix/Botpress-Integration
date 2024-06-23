// facebookShare.ts

import axios from 'axios';

// Replace with your actual Facebook App ID and redirect URI
const app_id = '<YOUR_APP_ID>'; // Replace with your Facebook App ID
const link = 'https://developers.facebook.com/docs/';
const redirect_uri = 'https://your_redirect_uri_here'; // Replace with your redirect URI

const feedDialogUrl = `https://www.facebook.com/dialog/feed?app_id=${app_id}&display=popup&link=${encodeURIComponent(link)}&redirect_uri=${encodeURIComponent(redirect_uri)}`;

// Function to trigger the Feed Dialog
export async function openFeedDialog(): Promise<void> {
  try {
    const response = await axios.get(feedDialogUrl);
    console.log('Successfully opened Facebook feed dialog:', response.data);
    // Handle the response as needed (e.g., redirect user to the URL received in response)
  } catch (error: any) { // Explicitly typing 'error' as 'any' to handle unknown type
    console.error('Error opening feed dialog:', error.message);
    throw error; // Rethrow the error to handle it further up the call stack if necessary
  }
}
