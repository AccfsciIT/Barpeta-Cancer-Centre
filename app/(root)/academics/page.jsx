import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
// import OurHospitals from "../../(components)/OurHospitals"
import Entries from "./entries";
import { fetchAboutUs } from "@/lib/fetchData";

const page = async() => {
    const Entris = await fetchAboutUs();
    return (<>
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <Image
                src="/nfp/nfpbg.jpg"
                alt="background"
                fill
                style={{ objectFit: "cover" }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(255, 165, 0, 0.4)",
                    color: "white",
                    padding: "12px 0",
                }}

            >
                <Typography variant="h4" fontWeight="bold" textShadow="2px 2px 10px rgba(0,0,0,0.5)" paddingX={3}>
                    Nursing Fellowship Programme
                </Typography>
            </Box>

        </Box>
        <Box padding={4}>
            {/* <Typography variant="h4" fontStyle="italic" marginTop={1}></Typography> */}
            <List sx={{ listStyleType: "disc", pl: 2 }}>
                <ListItem sx={{ display: "list-item", padding:"0"}}>
                    <ListItemText primary={<Typography sx={{ fontWeight: "bold" }}>Building 'A' Cadre of Oncology Specialist Nurses for India</Typography>}/>
                </ListItem>
                <ListItem sx={{ display: "list-item", padding:"0" }}>
                    <ListItemText primary={<Typography sx={{ fontWeight: "bold" }}>Join the nursing Fellowship Programme and serve the nation with enhanced skill and pride</Typography>} />
                </ListItem>
            </List>
        </Box>
        <Box padding={4}>
            <Entries Entris={Entris}/>
        </Box>
    </>)
}
export default page;