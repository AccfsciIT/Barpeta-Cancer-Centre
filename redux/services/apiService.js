import { HospitalID, API } from "../../app/(components)/Global";

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API}${endpoint}?HospitalID=${HospitalID}`, {
      next: { revalidate: 60 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch data");
    return data.result || [];
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
}
