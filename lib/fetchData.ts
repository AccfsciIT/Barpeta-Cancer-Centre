import { HospitalID, API } from "@/app/(components)/Global";

// ✅ Fetch Home Content
export async function fetchHomeContent() {
  try {
    const response = await fetch(`${API}api/home_text?HospitalID=${HospitalID}`, {
      // cache: "force-cache",
      next: { revalidate: 60 },
    });
    const data = await response.json();
    return response.ok && data.result?.length ? data.result[0] : null;
  } catch (error) {
    console.error("Failed to fetch home content:", error);
    return null;
  }
}

// ✅ Fetch Image Slider
export async function fetchImageSlider() {
  try {
    const response = await fetch(`${API}api/home_image_slider?HospitalID=${HospitalID}`, {
      // cache: "force-cache",
      next: { revalidate: 60 },
    });
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error("Failed to fetch images:", error);
    return [];
  }
}

// ✅ Fetch Doctors
export async function fetchDoctors() {
  try {
    const response = await fetch(`${API}api/doctors?HospitalID=${HospitalID}`, {
      // cache: "force-cache",
      next: { revalidate: 60 },
    });
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

// ✅ Fetch Accomplishments
export async function fetchAccomplishments() {
  try {
    const response = await fetch(`${API}api/accomplishments?HospitalID=${HospitalID}`, {
      // cache: "force-cache",
      next: { revalidate: 60 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch accomplishments");
    return data.result || [];
  } catch (error) {
    console.error("Error fetching accomplishments:", error);
    return [];
  }
}

// ✅ Fetch Facilities
export async function fetchFacilities() {
  try {
    const response = await fetch(`${API}api/facilities?HospitalID=${HospitalID}`, {
      // cache: "force-cache",
      next: { revalidate: 900 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch facilities");
    return data.result || [];
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return [];
  }
}

// ✅ Fetch Hospitals
export async function fetchHospitals() {
  try {
    const response = await fetch(`${API}api/our_hospitals`, {
      // cache: "force-cache",
      next: { revalidate: 900 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch hospital details");
    return data.result || [];
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    return [];
  }
}

// ✅ Fetch Abour Us
export async function fetchAboutUs() {
  try {
    const response = await fetch(`${API}api/about_us?HospitalID=${HospitalID}`, {
      // cache: "force-cache",
      next: { revalidate: 900 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch hospital details");
    return data.result || [];
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    return [];
  }
}

// ✅ Fetch News & Events
export async function fetchNewsAndEvents() {
  try {
    const response = await fetch(`${API}api/news_events?HospitalID=${HospitalID}`, {
      // cache: "force-cache",
      next: { revalidate: 900 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch hospital details");
    return data.result || [];
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    return [];
  }
}

// ✅ Fetch Hospital Details
export async function fetchHospitalDetailsAPI() {
  try {
    const response = await fetch(`${API}api/hospital_details?HospitalID=${HospitalID}`, {
      // cache: "force-cache",
      next: { revalidate: 900 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch hospital details");
    return data.result || [];
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    return [];
  }
}