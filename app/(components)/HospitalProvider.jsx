"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { HospitalID, API } from "../(components)/Global";
import { fetchHospitalDetailsAPI } from "@/lib/fetchData";
const API_URL = `${API}api/hospital_details`;

const HospitalContext = createContext(null);

export function HospitalProvider({ children }) {
    const [hospitalDetails, setHospitalDetails] = useState(null);

    useEffect(() => {
        const fetchHospitalDetails = async () => {
            try {
                const data = await fetchHospitalDetailsAPI();
                setHospitalDetails(data || []); // ✅ Ensure it's an array
            } catch (error) {
                console.error("Error fetching hospital data:", error);
                setHospitalDetails(await fetchHospitalDetailsAPI());
            } finally {
                // setLoading(false);
            }
        };

        fetchHospitalDetails();
    }, []);

    return (
        <HospitalContext.Provider value={hospitalDetails}>
            {children}
        </HospitalContext.Provider>
    );
}

// Custom hook to use hospital details
export function useHospital() {
    return useContext(HospitalContext);
}
