import React from 'react'
import { Button, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FadeUp from '../HomePage/FadeUp/FadeUp';
import Container6 from '../HomePage/FadeUp/Container6/Container6';
import './ContactUs.css'

const ContactUs = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000',
            },
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiInput-underline:after': {
                            borderBottomColor: '#000000',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'rgb(183, 182, 182)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000000',
                            },
                            '& input': {
                                color: "#000000",
                            },
                        },
                    },
                },
            },
        },
    });

    return (
        <div className="contactus-container">
            <div className="contactus-container1 contactus-item" style={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 400, fontSize: 40, marginBottom: "1%", color: "#413F42" }}># Let's Talk</Typography>
            </div>
            <div className="contactus-container2 contactus-item" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontWeight: 400, fontSize: 13, marginBottom: "1%", color: "#413F42" }}>GET IN TOUCH</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 25, marginBottom: "2%" }}>Contact Us Today</Typography>
                <div className="contactus-container2-1-1">
                    <div className="contactus-item">
                        <BusinessIcon sx={{ fontSize: "1.1rem", marginRight: "2%", color: "#413F42" }} />
                        <Typography sx={{ fontWeight: 400, fontSize: 15, color: "#413F42" }}>SRM Institute of Science and Technology</Typography>
                    </div>
                    <div className="contactus-item">
                        <EmailIcon sx={{ fontSize: "1.1rem", marginRight: "2%", color: "#413F42" }} />
                        <Typography sx={{ fontWeight: 400, fontSize: 15, marginBottom: "1%", color: "#413F42" }}>varunagrawal028@gmail.com</Typography>
                    </div>
                    <div className="contactus-item">
                        <LocalPhoneIcon sx={{ fontSize: "1.1rem", marginRight: "2%", color: "#413F42" }} />
                        <Typography sx={{ fontWeight: 400, fontSize: 15, marginBottom: "1%", color: "#413F42" }}>7017471561</Typography>
                    </div>
                </div>
            </div>
            <div className="contactus-container3">
                <ThemeProvider theme={theme}>
                    <div className='contactus-container3-1 contactus-item'>
                        <Typography sx={{ fontWeight: 400, fontSize: 13, marginBottom: "1%", color: "#413F42" }}>LEAVE A MESSAGE</Typography>
                        <Typography sx={{ fontWeight: 700, fontSize: 25, marginBottom: "2%" }}>We Love to Hear from you</Typography>
                        <TextField fullWidth label="Your Name" variant="outlined" sx={{ marginBottom: "1%" }} />
                        <TextField fullWidth label="Email" variant="outlined" sx={{ marginBottom: "1%" }} />
                        <TextField fullWidth label="Subject" variant="outlined" sx={{ marginBottom: "1%" }} />
                        <TextField fullWidth label="Your Message" multiline rows={4} variant="outlined" sx={{ marginBottom: "1%" }} />
                        <Button sx={{
                            borderRadius: "15px", backgroundColor: "black", width: "10%", marginTop: "2%", color: "white", ":hover": {
                                color: "black",
                                backgroundColor: "white",
                                border: "1px solid black"
                            }
                        }}>Submit</Button>
                    </div>
                </ThemeProvider>
            </div>
            <FadeUp>
                <Container6 />
            </FadeUp>
        </div>
    )
}

export default ContactUs;
