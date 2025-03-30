import DoctorsList from "./DoctorsList";
import { fetchDoctors} from "@/lib/fetchData";

export default async function DoctorsPage() {
  const doctors = await fetchDoctors(); // ✅ Fetch once on the server
  // const OurHospitals = await fetchHospitals();
  return <DoctorsList doctors={doctors}/>;
}
