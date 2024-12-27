import React from "react";
import "./Main.css";
import DikosImg from "../../Assets/Images/Diana.png";
import Button from '@mui/material/Button';
export const MainComponent = () => {
    return(
        <div className="main" id="obo_mnie_scroll">
            <div className="obo_mnie"><h2>OBO MNIE</h2></div>
            <div className="main_container">
                <div className="about_text">
                    <h2> „ </h2>
                    <h2>Diana Makhsoian</h2>
                    <h3>Freelance<span>r</span></h3>
                    <p>
                        Cześć! Jestem grafikiem specjalizującym się w przekształcaniu 
                        koncepcji w atrakcyjne wizualnie projekty. Z dbałością o 
                        szczegóły i pasją do tworzenia skutecznych renderingów, eksploruję 
                        sferę koloru, formy i kompozycji, aby tworzyć projekty, które 
                        pozostawiają niezatarte wrażenie.
                        Oferuje kompleksowe usługi w zakresie reklamy obejmujące 
                        między innymi projektowanie graficzne wraz z produkcją 
                        poligraficzną materiałów promocyjnych,
                        Sprawdź moje portfolio i wyruszmy razem w podróż projektową.
                    </p>
                   <div>
                         <Button variant="contained"sx={{
                        background: "#6C2D9C",
                                fontWeight: "bold",
                                fontSize: "15px",
                                transition: "transform 0.3s ease",
                                color:"white",
                                '&:hover': {
                                    borderColor: '#D9B1CB',
                                    color: "white",
                                    transform: "scale(1.1)",
                                },
                            }}>Sprawdz portfolio</Button>
                   </div>
                </div>
                <div className="imgDiko">
                <img src={DikosImg} alt="Diana"  />

                </div>
            </div>
        </div>
    )
}