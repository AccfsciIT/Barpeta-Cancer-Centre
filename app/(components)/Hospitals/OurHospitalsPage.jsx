'use client'
import { selectHospitals, setHospitals } from "@/redux/features/hospitalSlice";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const OurHospitalsPage = () => {
    const ourHospitals = useSelector(selectHospitals); // Read from Redux
    return (<Box>
        <Grid container>
            {ourHospitals.map((hospital) => (
                <Grid
                    key={hospital.id}
                    item md={4} lg={3} xs={12}
                    marginBottom={1}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                    }}
                >
                    <a
                        href={hospital.domain}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: "#0076bd",
                            color: "white",
                            borderRadius: "50px",
                            display: "flex",
                            width: "98%",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 1,
                            textDecoration: "none", // ✅ Removed default underline
                        }}
                    >
                        <Typography paddingY={1} textAlign="center">
                            {hospital.name || "Unnamed Hospital"}
                        </Typography>
                    </a>
                </Grid>
            ))}
        </Grid>
    </Box>);
}
export default OurHospitalsPage;