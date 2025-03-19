"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {HospitalID, API} from "../(components)/Global";
const API_URL = `${API}api/hospital_details`;

const HospitalContext = createContext(null);

export function HospitalProvider({ children }) {
    const [hospitalDetails, setHospitalDetails] = useState(null);

    useEffect(() => {
        const fetchHospitalDetails = async () => {
            try {
                const response = await fetch(`${API_URL}?HospitalID=${HospitalID}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch hospital details");
                }
                const data = await response.json();
                setHospitalDetails(data.result);
            } catch (error) {
                console.error(error);
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
