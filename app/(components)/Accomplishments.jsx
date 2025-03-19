import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Accomplishments = () => {
    return (
        <Box display="flex" width="100%" justifyContent="center">
            <Grid container justifyContent="space-between" width="70%" padding={1} marginY={3} spacing={3}>
                <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    flexDirection="column"
                >
                    <Image src="/Accomplishments/people.png" alt="Accomplishments" width={100} height={100} />
                    <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>5810</Typography>
                    <Typography borderTop="1px gray solid" padding={1} margin={1} display="flex" width="100%" justifyContent="center">Patient Footfall</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    flexDirection="column"
                >
                    <Image src="/Accomplishments/chemo.png" alt="Accomplishments" width={100} height={100} />
                    <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>751</Typography>
                    <Typography borderTop="1px gray solid" padding={1} margin={1} display="flex" width="100%" justifyContent="center">Patient Footfall</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    flexDirection="column"
                >
                    <Image src="/Accomplishments/radiation.png" alt="Accomplishments" width={100} height={100} />
                    <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>2778</Typography>
                    <Typography borderTop="1px gray solid" padding={1} margin={1} display="flex" width="100%" justifyContent="center">Patient Footfall</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    flexDirection="column"
                >
                    <Image src="/Accomplishments/doctors.png" alt="Accomplishments" width={100} height={100} />
                    <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>50</Typography>
                    <Typography borderTop="1px gray solid" padding={1} margin={1} display="flex" width="100%" justifyContent="center">Patient Footfall</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Accomplishments;
