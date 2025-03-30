import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
// import Image from "next/image";
// import OurHospitals from "../../(components)/OurHospitals"
// import Entries from "./entries";

const page = () => {
    return (<>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Typography variant="h5" fontWeight="bold" marginTop={2}>SOCIAL INFRASTRUCTURE</Typography>
            <Typography variant="h6" marginBottom={2} textAlign="center" fontSize={14}>Know your location and get familiarized along</Typography>
            <Grid container width="95%" display="flex" marginY={3}>
                <Grid item lg={2} md={4} xs={12}  sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography color="white" textAlign='center'>Accommodation (housing/ hostels)</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Long Stay: Apartments, and independent houses" />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Short Stay: Mostly guest houses and lodges available like The Bansbari Lodge, few decent hotels like Hotel NGS, Hotel Royal Palace" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>

                <Grid item lg={2} md={4} xs={12}  sx={{marginBottom:1}}>
                    <Box  height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography color="white" textAlign='center'>Education Centres</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Few secondary schools like St Teresa's, ST Marys, Kendriya Vidyalaya, St.Joseph High school" />
                            </ListItem>

                        </List>
                    </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={12} sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}><Typography color="white" textAlign='center'>Health Facilities</Typography></Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Limited hospitals major ones being FAAC Medical college, Barpeta Civil Hospital, Ankuram Hospital, Sanjivani, etc" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={12} sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography color="white" textAlign='center'>Air/ Road/ Tail Connectivity</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Air: Nearest airpot at Guwahati (~90 km)" />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Rail: Railway station at Barpeta Road" />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Local: not good public transport" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={12} sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography color="white" textAlign='center'>Restaurants</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Verify few decent restaurants like Appayan restaurant; Swad Sagar, Walden, Herb and Spic, food city" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item lg={2} md={4} xs={12} sx={{marginBottom:1}}>
                    <Box height={100} justifyContent="center" alignItems="center" display="flex" style={{ backgroundColor: "black", border: "1px white solid" }} paddingX={1} paddingY={3}>
                        <Typography color="white" textAlign='center'>Malls/ Movie Halls</Typography>
                    </Box>
                    <Box height={250} display="flex" sx={{ border: "1px gray solid" }} paddingX={1} paddingY={3}>
                        <List sx={{ listStyleType: "disc", pl: 2 }}>
                            <ListItem sx={{ display: "list-item", color: "black", padding: "0", margin: "0" }}>
                                <ListItemText primary="Handful of shopping places like Vishal, V2, Bazar India, Harsha Bazar and cinema Hall, Sharma Talkies" />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>)
}
export default page;