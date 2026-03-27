export async function FuelLoader(filter, filterValue) {
  const BASE_URL = "https://uk-daily-fuel-prices.p.rapidapi.com";

  let endpoint = "";
  try {
    switch (filter) {
      case "all":
        endpoint =
          "/api/petrol-prices/nearby?lat=53.3806457&lon=-1.46941&radius=5";
        break;

      case "specific":
        endpoint = `/api/petrol-prices/brand/${filterValue}?page=5&limit=20`;
        break;

      case "fuel-type":
        endpoint = `/api/petrol-prices/fuel-type/${filterValue}`;
        break;

      case "station-status":
        endpoint = `/api/petrol-prices/status`;
        break;

      default:
        endpoint =
          "/api/petrol-prices/nearby?lat=53.3806457&lon=-1.46941&radius=5";
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dfeaf6ba79mshf4a5472af01a80dp1af4aejsnc39c76c478a8",
        "x-rapidapi-host": "uk-daily-fuel-prices.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });

    console.log("STATUS:", response.status);

    const data = await response.json();
    console.log("DATA:", data);

    if (!response.ok) {
      throw new Response(
        JSON.stringify({ message: data.message || "Failed request" }),
        { status: response.status },
      );
    }

    return data;
  } catch (error) {
    console.error("FETCH ERROR:", error);

    throw new Response(JSON.stringify({ message: "Network or CORS error" }), {
      status: 500,
    });
  }
}