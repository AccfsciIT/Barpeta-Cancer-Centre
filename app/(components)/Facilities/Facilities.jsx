// import DoctorsList from "./DoctorsList";
import Facilities from "./FacilityData"
// import { fetchFacilities, fetchHospitals } from "@/lib/fetchData";

export default async function DoctorsPage() {
  // const facilities = await fetchFacilities(); // ✅ Fetch once on the server
  // const OurHospitals = await fetchHospitals();
  return <Facilities/>;
}
