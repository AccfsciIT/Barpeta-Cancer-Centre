import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Accomplishments = () => {
    const [accomplishments, setAccomplishments] = useState({
        patient_footfall: 0,
        chemo_session: 0,
        radiation_session: 0,
        total_doctors: 0
    });

    const getFootFall = async () => {
        try {
            const result = await axios.post("https://barpetacancercentre.org/api/get-counts-for-center",
                { ccode: "Barpeta" });
            setAccomplishments(result.data); // Ensure only result.data is stored
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        getFootFall();
    }, []);

    // Ref for scrolling trigger
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

    // Animation configuration
    const counterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (value) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 2.5, ease: "easeOut" },
            animateNumber: [0, value],
        }),
    };

    return (
        <Box display="flex" width="100%" justifyContent="center" ref={ref}>
            <Grid container justifyContent="space-between" width="70%" padding={1} marginY={3} spacing={3}>
                {[ 
                    { key: "patient_footfall", label: "Patient Footfall", image: "/Accomplishments/people.png" },
                    { key: "chemo_session", label: "Chemo Session", image: "/Accomplishments/chemo.png" },
                    { key: "radiation_session", label: "Radiation Session", image: "/Accomplishments/radiation.png" },
                    { key: "total_doctors", label: "Doctors", image: "/Accomplishments/doctors.png" }
                ].map((item, index) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        md={3}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        flexDirection="column"
                    >
                        <Image src={item.image} alt={item.label} width={100} height={100} />
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="orange"
                            sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                        >
                            <motion.span
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={counterVariants}
                                custom={accomplishments[item.key]}
                            >
                                {Math.floor(accomplishments[item.key])}
                            </motion.span>
                        </Typography>
                        <Typography borderTop="1px gray solid" padding={1} margin={1} display="flex" width="100%" justifyContent="center">
                            {item.label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Accomplishments;
