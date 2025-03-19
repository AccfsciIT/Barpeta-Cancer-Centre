"use client";
import { Box, Grid } from "@mui/material";
import DoctorCard from "../../(components)/DoctorCard";
import { useState, useEffect } from "react";
import {HospitalID, API} from "../../(components)/Global";

const Doctors = [
    { image: "/Doctors/tanma.jpg", name: "Dr Tanma Mahanta", speciality: "Palliative Doctor", text: "MBBS from Guwahati Medical College and Hospital; diploma in Palliative Medicine from Perth, Australia; BCCPM from IPM Kerela, Certificate course from MNJ Cancer Hospital, Hyderabad. 20 years of experience in Palliative Medicine; given more than 9000 consultations in ACCF" },
    { image: "/Doctors/tanma.jpg", name: "Dr Tanma Mahanta", speciality: "Palliative Doctor", text: "MBBS from Guwahati Medical College and Hospital; diploma in Palliative Medicine from Perth, Australia; BCCPM from IPM Kerela, Certificate course from MNJ Cancer Hospital, Hyderabad. 20 years of experience in Palliative Medicine; given more than 9000 consultations in ACCF" }
];

const Page = () => {
    const [doctors, setDoctors] = useState({}); // Initial state as an array
    const [loading, setLoading] = useState(true);

    const fetchDoctors = async () => {
        try {
            const response = await fetch(`${API}api/doctors?HospitalID=${HospitalID}`);
            const data = await response.json();
            if (response.ok) {
                setDoctors(data.result);
            } else {
                console.error("Error:", data.error);
            }
        } catch (error) {
            console.error("Failed to fetch doctor details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors(); // Uncomment this when using API
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Box display="flex" width="100%" justifyContent="center" marginTop={5}>
            <Grid container width="90%" spacing={3}>
                {doctors.map((doctor, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} display="flex" justifyContent="center" width="100%">
                        <DoctorCard image={doctor.path} name={doctor.name} speciality={doctor.speciality} text={doctor.text} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Page;
