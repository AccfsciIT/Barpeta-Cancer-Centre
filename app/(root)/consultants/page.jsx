"use client";
import { Box, Grid, Typography } from "@mui/material";
import DoctorCard from "../../(components)/DoctorCard";
import { useState, useEffect } from "react";
import { HospitalID, API } from "../../(components)/Global";
import axios from "axios";

const Doctors = [
    { image: "/Doctors/tanma.jpg", name: "Dr Tanma Mahanta", speciality: "Palliative Doctor", text: "MBBS from Guwahati Medical College and Hospital; diploma in Palliative Medicine from Perth, Australia; BCCPM from IPM Kerela, Certificate course from MNJ Cancer Hospital, Hyderabad. 20 years of experience in Palliative Medicine; given more than 9000 consultations in ACCF" },
    { image: "/Doctors/tanma.jpg", name: "Dr Tanma Mahanta", speciality: "Palliative Doctor", text: "MBBS from Guwahati Medical College and Hospital; diploma in Palliative Medicine from Perth, Australia; BCCPM from IPM Kerela, Certificate course from MNJ Cancer Hospital, Hyderabad. 20 years of experience in Palliative Medicine; given more than 9000 consultations in ACCF" }
];

const Page = () => {
    const [doctors, setDoctors] = useState({}); // Initial state as an array
    const [loading, setLoading] = useState(true);

    const fetchDoctors = async () => {
        try {
            const response = await axios.post(`https://barpetacancercentre.org/api/get-doctor-for-cente`, {ccode: "Barpeta"});
            const data = response;
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
        fetchDoctors(); 
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Box display="flex" width="100%" flexDirection="column" justifyContent="center" marginTop={5}>
            <Box display="flex" flexDirection="column" alignItems="center" width="100%" paddingX={1}>
                <Typography variant="h5" fontWeight="bold">OUR DOCTORS</Typography>
                <Typography variant="h6" textAlign="center" fontSize={14}>The best way to find yourself is to lose yourself in the service of others</Typography>
            </Box>
            <Grid container width="100%">
                {/* {doctors.map((doctor, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} display="flex" justifyContent="center" width="100%">
                        <DoctorCard image={doctor.path} name={doctor.name} speciality={doctor.speciality} text={doctor.text} />
                    </Grid>
                ))} */}
            </Grid>
        </Box>
    );
};

export default Page;
