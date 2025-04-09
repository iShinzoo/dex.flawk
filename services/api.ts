const API_KEY = process.env.REACT_APP_MORALIS_API_KEY as string;

/**
 * Fetch trending tokens
 * @param chain - Optional chain ID filter
 * @param limit - Number of results to return
 * @returns Promise resolving to trending tokens data
 */
export const getTrendingTokens = async (
  chain: string = "",
  limit: number = 100
): Promise<any[]> => {
  try {
    const chainParam = chain ? `&chain=${chain}` : "";
    const url = `https://deep-index.moralis.io/api/v2.2/tokens/trending?limit=${limit}${chainParam}`;
    console.log("Fetching trending tokens from:", url);

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-Key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : data.result || [];
  } catch (error) {
    console.error("Error fetching trending tokens:", error);
    throw error;
  }
};
