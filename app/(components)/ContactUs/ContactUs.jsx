'use client'
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContactPage from "./ContactPage";

const ContactUs = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose} sx={{borderRadius:'10px', maxWidth:"100vw"}}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    borderRadius: 2,
                    width: { md: '70%', xs: '90%' },
                    maxHeight: '90vh', // Keeps modal within viewport height
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Fixed Close Button */}
                <Box 
                    sx={{
                        position: "sticky",
                        top: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        bgcolor: "background.paper",
                        zIndex: 10,
                        p: 1
                    }}
                >
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Scrollable Content */}
                <Box 
                    sx={{
                        overflowY: "auto",
                        maxHeight: "85vh", // Allow space for header
                        // p: 2
                    }}
                >
                    <ContactPage />
                </Box>
            </Box>
        </Modal>
    );
}

export default ContactUs;
