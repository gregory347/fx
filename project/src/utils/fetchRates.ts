const SHEET_ID = '1W21VRTk1KUpWGJaoB3bcM4ufv4S09VUoF3v7K7PFQeE';
const SHEET_NAME = 'Sheet1';
const API_KEY = 'AIzaSyBGpgZevUyCu8erpSxFqBnAfpDm62uC5wQ';

export async function fetchRates() {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch rates: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.values || data.values.length <= 1) {
      return [];
    }

    const rows = data.values.slice(1); // Skip header row

    return rows.map((row: any[]) => ({
      agentId: row[0] || '',
      country: row[1] || '',
      currency: row[2] || '',
      payIn: row[3] || '',
      amount: parseFloat(row[4]) || 0,
      payoutAmount: parseFloat(row[5]) || 0,
      rates: parseFloat(row[6]) || 0
    }));
  } catch (error) {
    console.error('Error fetching rates:', error);
    throw error;
  }
}