export async function FuelLoader(type = "all", params = {}) {
  try {
    const BASE_URL = "https://uk-daily-fuel-prices.p.rapidapi.com";
    let endpoint = "";

    switch (type) {
      case "status":
        endpoint = "/api/petrol-prices/status";
        break;

      case "fuelTypes":
        endpoint = "/api/petrol-prices/fuel-type";
        break;

      case "all":
        endpoint = "/api/petrol-prices";
        break;

      case "search":
        endpoint = `/api/petrol-prices/search?query=${params.query}`;
        break;

      case "brand":
        endpoint = `/api/petrol-prices/brand/${params.brand}`;
        break;

      case "fuelType":
        endpoint = `/api/petrol-prices/fuel-type/${params.type}`;
        break;

      case "nearby":
        endpoint = `/api/petrol-prices/nearby?lat=${params.lat}&lng=${params.lng}&radius=${params.radius}`;
        break;

      case "updates":
        endpoint = "/api/petrol-prices/updates";
        break;

      case "priceRange":
        endpoint = `/api/petrol-prices/prices?min=${params.min}&max=${params.max}`;
        break;

      default:
        endpoint = "/api/petrol-prices";
    }

    const response = await fetch(BASE_URL + endpoint, {
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
        { status: response.status }
      );
    }

    return data;
  } catch (error) {
    console.error("FETCH ERROR:", error);

    throw new Response(
      JSON.stringify({ message: "Network or CORS error" }),
      { status: 500 }
    );
  }
}