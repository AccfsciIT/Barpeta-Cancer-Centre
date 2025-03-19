"use client"
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import {HospitalID, API} from "../(components)/Global";

const data = [{ Loader: "#0076bd", name: "PET-CT and Medical Cyclotron", image: "/Facilities/PET_CT.jpg", text: "The medical Cyclotron Machine can produce the radio-active substance (FDG) required for PET-CT investigation. This Medical Cyclotron Facility is the only one of its kinds installed in Eastern India in Government set-up. Dual Head Gama Camera has been procured and installed for clinical use. PET CT imagining is available since August 16. With commissioning of Medical Cyclotron facility, the radio pharmaceutical will be available on site and more number of patients can be taken up for PET CT with no waiting period" },
{ Loader: "#0076bd", name: "Bone Marrow Transplant", image: "/Facilities/bmt.jpg", text: "Bone marrow transplantation, also called as hematopoietic stem cell transplantation, is a sophisticated procedure performed in selected centres.In this procedure, stem cells are collected from a person (called as donor) and transfused to the patient (called as recipient). Previously, stem cells were collected from bone marrow of donors, but now a days, for most cases, stem cells are collected from peripheral veins only.These stem cells collected from donor ultimately goes to the bone marrow of the patient and produces blood cells for the patient.Depending upon the donor, BMT can be autologous or allogenic. In autologous BMT, stem cells are collected from the patient only. In allogenic BMT, stem cells are collected from a relative (brother, sister or parent) or an unrelated person. Allogenic BMT can be of 3 types- matched sibling donor (MSD) type, Haplo match donor (Haplo BMT)type, and matched unrelated donor (MUD) type. Haplo BMT and MUD BMT is difficult to perform compared to MSD BMT. BMT can be lead to cure in various hematological cancers.Aplastic anemia, acute leukemia, multiple myeloma, relapsed lymphoma are some of the common diseases where BMT is performed.BMT is one of the most intensive treatments ever devised to treat a disease. It needs a lot of expertise and collaboration between the physician, nursing staff, pathologists, microbiologists, dietician, intensivists etc.BMT is available only in selected centres in India. Many patients from Assam goes outside for BMT. Availability of BMT in State Cancer Institute will be a definitive moment in the landscape of cancer care in Assam- patients will be able to get quality care at an affordable price." }
]

const Facilities = () => {
    const [expanded, setExpanded] = useState(false);
    const charLimit = 396;

    const [facilities, setFacilities] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFecilities = async () => {
            try {
                const response = await fetch(`${API}api/facilities?HospitalID=${HospitalID}`);
                const data = await response.json();
                if (response.ok) {
                    setFacilities(data.result);
                    // console.log("Images=", data.result);
                } else {
                    console.error("Error:", data.error);
                }
            } catch (error) {
                console.error("Failed to fetch hospital details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFecilities();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
      }
    return (<>
        <Box>
            {facilities.map((Facility, index) => {
                return (
                    <Box display="flex" justifyContent="center" marginBottom={1}>
                        <Grid container display="flex" width="95%" borderRadius={2} sx={index / 2 === 0 ? { borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", background: `linear-gradient(to right, ${Facility.colour1}, ${Facility.colour2})` } : { borderTopRightRadius: "10px", borderBottomRightRadius: "10px", background: "linear-gradient(to right, #cbdae5, #ced0d2)", flexDirection: "row-reverse" }}>
                            <Grid item display="flex" flexDirection="column" xs={8} padding={4} >
                                <Typography variant="h4">{Facility.title}</Typography>
                                <Box
                                    display="flex"
                                    width="5%"
                                    sx={{ backgroundColor: Facility.Loader, height: 10, borderRadius: 10, marginY: 1 }}
                                ></Box>
                                <Typography>{expanded ? text : `${Facility.description.slice(0, charLimit)}...`}</Typography>
                                <Typography fontSize="13px" marginTop={1}>Read More</Typography>
                            </Grid>
                            <Grid item xs={4} sx={index / 2 === 0 ? { position: "relative", height: "auto", overflow: "hidden", clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 5% 100%)" } : { position: "relative", width: "25%", height: "auto", overflow: "hidden", clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)" }}>
                                <Image
                                    src={`http://localhost:3001/${Facility.path}`}
                                    alt="pet-ct"
                                    fill
                                    style={index / 2 === 0 ? { objectFit: "cover", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" } : { objectFit: "cover", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )
            })}
        </Box>
    </>)
}
export default Facilities;