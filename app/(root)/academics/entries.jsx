"use client";

import { Box, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react";
import {HospitalID, API} from "../../(components)/Global";
import Loader from "../../(components)/Loader";

const Entries = () => {
    const [Entris, setEntries] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchAboutUs = async () => {
        try {
          const response = await fetch(`${API}api/about_us?HospitalID=${HospitalID}`);
          const data = await response.json();
          if (response.ok) {
            setEntries(data.result);
            console.log("Images=", data.result);
          } else {
            console.error("Error:", data.error);
          }
        } catch (error) {
          console.error("Failed to fetch hospital details:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAboutUs();
    }, []);
    if (loading) {
      return <><Loader/></>;
    }
    return (<>
        <Box display="flex" flexDirection="column" width="100%">
            {Entris.map((Entry, index) => {
                return (<Grid key={Entry.title} container display="flex" width="100%" sx={index % 2 === 0 ? { flexDirection: "row" } : { flexDirection: "row-reverse" }} alignItems="center" justifyContent="center" marginBottom={2}>
                    <Grid item xs={6} padding={4} sx={{ position: "relative", overflow: "hidden" }} width="100%" height="300px">
                        <Image src={`http://localhost:3001/${Entry.path}`} alt="who we are" fill style={{ objectFit: "cover", borderRadius: "5px"}} />
                    </Grid>
                    <Grid item xs={6} padding={4} width="100%" height="300px" display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h5" fontWeight="bold">{Entry.title}</Typography>
                        <Typography>{Entry.description}</Typography>
                    </Grid>
                </Grid>)
            })}
        </Box>
    </>)
}
export default Entries