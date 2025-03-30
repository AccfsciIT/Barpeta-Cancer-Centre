'use client'
import { Box, Typography } from "@mui/material";
// import ImageSlider from "../../../(components)/ImageSlider"
// import Entries from "./entries";

const page = () => {
    return (<Box display="flex" width="100%" justifyContent="center">
        <Box padding={4} display="felx" width="70%">
            <Typography variant="h4" fontWeight="bold">Northeast Oncology Summit (NEOS) 2024 – Dibrugarh Edition Changing Paradigms of Oncology: Hopes and Challenges</Typography>
            <Typography fontWeight="bold" marginY={1}>27 January 2024</Typography>
            <Typography textAlign='justify' marginBottom={3}>Assam Cancer Care Foundation marked a significant milestone in its commitment to advancing academics and research in the field of Oncology with the successful conclusion of the second edition of Northeast Oncology Summit (NEOS). The two-day multidisciplinary scientific event – NEOS 2024 was hosted by Dibrugarh Cancer Centre on January 27 and 28, 2024 focusing on the theme ‘Changing Paradigms of Oncology: Hopes and Challenges.’

                With the aim to foster collaboration, drive innovation, and explore avenues for addressing the challenges of cancer care in Northeast India, NEOS 2024 emerged as a focal point for a gathering of several eminent medical professionals and delegates from across India and beyond.

                Renowned healthcare professionals including Dr P Arun, Director - Tata Medical Center – Kolkata and Director - Assam Cancer Care Foundation; Dr Anita Borges, Director - Centre for Oncopathology – Mumbai; Dr Sobhan Vinjamuri - Professor, Royal Liverpool University Hospital – London, had delivered insightful keynote lectures at the event. The event featured workshops on various topics, poster presentations, and interactive sessions to address and discuss the day-to-day challenges and highlight recent advancements in cancer care.

                Similar to the inaugural edition held at Tezpur, the active participation of attendees - oncologists, physicians, and PG students - transformed the second edition - NEOS 2024 - into a remarkable feat.

                NEOS 2024 - with its diverse sessions, lectures, and panel discussions - not only showcased the advancements in oncology care but also encouraged an interactive exchange of ideas. The inclusion of MSD sessions and video presentations added a layer of innovation - ensuring that the summit remained dynamic and engaging. As the Summit concluded, it left a trail of insights - laying the foundation for ongoing advancements in the fight against cancer. The key sessions not only fueled intellectual discourse but, are also poised to inspire collaborative efforts to address the unique challenges faced in Northeast India's healthcare landscape.</Typography>

                {/* <ImageSlider/> */}
        </Box>
    </Box>)
}
export default page;