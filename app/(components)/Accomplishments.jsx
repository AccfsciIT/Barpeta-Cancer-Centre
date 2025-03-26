"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
import { fetchAccomplishments } from "../../lib/fetchData";
import {API} from './Global';

const Accomplishments = () => {
    const [accomplishments, setAccomplishments] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const loadAccomplishments = async () => {
            const data = await fetchAccomplishments();
            setAccomplishments(data);
            setLoading(false);
        };
        loadAccomplishments();
    }, []);

    if (loading) return <Loader />;

    return (
        <Box display="flex" width="100%" justifyContent="center" ref={ref}>
            <Grid container justifyContent="space-between" width="70%" padding={1} marginY={3} spacing={3}>
                {accomplishments.map((entry, index) => (
                    <Grid key={index} item xs={12} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Image src={`${API}${entry.path}`} alt={entry.category} width={100} height={100} />
                        <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                            {entry.count}
                        </Typography>
                        <Typography borderTop="1px solid gray" padding={1} margin={1} width="100%" textAlign="center">
                            {entry.category}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Accomplishments;
