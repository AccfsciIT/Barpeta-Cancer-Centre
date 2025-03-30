// import DoctorsList from "./DoctorsList";
import Header from './Header'
import { fetchFacilities, fetchHospitalDetailsAPI, fetchHospitals } from "@/lib/fetchData";
import APICalls from './APICalls';

export default async function HeaderPage() {
    const OurHospitals = await fetchHospitals();
    const Facilities = await fetchFacilities();
    const HospitalDetails = await fetchHospitalDetailsAPI();
    return (<>
    <APICalls HospitalDetails={HospitalDetails} OurHospitals={OurHospitals} Facilities={Facilities}/>
    <Header HospitalDetails={HospitalDetails} OurHospitals={OurHospitals}/>
    </>);
}
