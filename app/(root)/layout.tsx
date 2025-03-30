import { ReactNode } from "react";
import Footer from "../(components)/Footer/Footer";
// import Header from "../(components)/Header/Header";
import HeaderPage from '../(components)/Header/HeaderPage';
import { Box, Fab } from "@mui/material";
import { HospitalProvider } from "../(components)/HospitalProvider";
import AnimatedImages from "../(components)/Animation";
import { Metadata } from "next";
import { HospitalID, API } from "../(components)/Global"
import { fetchHospitalDetailsAPI } from "@/lib/fetchData";
import { Call, Edit } from "@mui/icons-material";
// ✅ Move metadata fetching to `generateMetadata`
const API_URL = `${API}api/hospital_details`;
export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await fetchHospitalDetailsAPI();
    return {
      title: data?.name || "Hospital Website",
      description: "Generated by create next app",
      icons: { icon: "/favicon.gif" },
    };
  } catch (error) {
    console.error("Failed to fetch hospital details:", error);
    return {
      title: "Hospital Website",
      description: "Generated by create next app",
      icons: { icon: "/favicon.gif" },
    };
  }
}

// ✅ Layout Component
export default function Layout({ children }: { children: ReactNode }) {
  return (<>
    {/* <HospitalProvider> */}
    <HeaderPage />
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      boxShadow="5px 5px 15px rgba(0, 0, 0, 0.3)"
      marginBottom={3}
      sx={{backgroundColor:'#ffffff', color: 'black'}}
    > 
      {children}
    </Box>
    <Footer />
    <AnimatedImages />
    {/* </HospitalProvider> */}
  </>
  );
}
