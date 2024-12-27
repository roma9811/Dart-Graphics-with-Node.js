import "./Main4.css";
import Kraina from "../../Assets/Images/kraina.png";
import Barber from "../../Assets/Images/barber.png";
import Billiard from "../../Assets/Images/billiard.png";
import Shine from "../../Assets/Images/shine.png";
import Vix from "../../Assets/Images/vix.png";
import Info from "../../Assets/Images/info.png";
import Smart from "../../Assets/Images/smart.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

export const MainComponent4 = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const sendMail = () => {
        console.log("Sending data:", { email, firstName, lastName, number });  
    
        if (!email || !firstName || !lastName || !number) {
            setMessage("Wszystkie pola są obowiązkowe do wypełnienia.");
            return;
        }
    
        axios.post("http://localhost:6005/send-email", {
            email,
            firstName,
            lastName,
            number,
        }, {
            headers: {
                "Content-Type": "application/json",  
            }
        })
        .then((response) => {
            setMessage("Wiadomość została wysłana pomyślnie!");
            setEmail("");
            setFirstName("");
            setLastName("");
            setNumber("");
        })
        .catch((error) => {
            console.error("Error response:", error.response);  
            setMessage(error.response?.data || "Błąd podczas wysyłania wiadomości.");
        });
    };


    return (
        <div className="main4" id="klienci_scroll">
            <div className="klienci_text">
                <h2>KLIENCI</h2>
            </div>
            <div className="klienci-container">
                <div className="clients-grid">
                    <img src={Kraina} alt="Kraina" className="client-logo large-logo" style={{ width: "20vh" }} />
                    <img src={Billiard} alt="Billiard" className="client-logo medium-logo" style={{ width: "15vh" }} />
                    <img src={Barber} alt="Barber" className="client-logo large-logo" style={{ width: "20vh" }} />
                    <img src={Smart} alt="Smart" className="client-logo medium-logo" style={{ width: "10vh" }} />
                    <img src={Info} alt="Info" className="client-logo large-logo" style={{ width: "15vh" }} />
                    <img src={Vix} alt="Vix" className="client-logo small-logo" style={{ width: "10vh" }} />
                    <img src={Shine} alt="Shine" className="client-logo large-logo" style={{ width: "20vh" }} />
                </div>
            </div>
            <div className="partner">
                <h3>ZOSTAŃ NASZYM PARTNEREM</h3>
                <div className="kontakt_formular">
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
                        <TextField
                            label="Imię"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            variant="standard"
                            sx={textFieldStyles}
                        />
                        <TextField
                            label="Nazwisko"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            variant="standard"
                            sx={textFieldStyles}
                        />
                    </Box>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
                        <TextField
                            label="E-Mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="standard"
                            sx={textFieldStyles}
                        />
                        <TextField
                            label="Numer Telefonu"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            variant="standard"
                            sx={textFieldStyles}
                        />
                    </Box>
                    <div className="wyslij">
                        <Stack spacing={2} direction="row">
                            <Button onClick={sendMail} variant="contained" style={{ background: "#6C2D9C",marginBottom:"20px" }}>
                                Wyślij wiadomość
                            </Button>
                        </Stack>
                    </div>
                    {message && <div className="message">{message}</div>}
                </div>
            </div>
        </div>
    );
};


const textFieldStyles = {
    "& .MuiInput-underline:before": {
        borderBottomColor: "#8B8B8B",
    },
    "& .MuiInput-underline:hover:before": {
        borderBottomColor: "#8B8B8B",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#6C2D9C",
    },
    "& .MuiInputLabel-root": {
        color: "#8B8B8B",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#6C2D9C",
    },
    "& .MuiInputBase-input": {
        color: "#8B8B8B",
    },
};
