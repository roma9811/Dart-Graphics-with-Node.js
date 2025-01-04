import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Main3.css";
import Branding from "../../Assets/Images/branding.png";
import DTP from "../../Assets/Images/DTP.png";
import Commerce from "../../Assets/Images/E-commerce.png";
import Social from "../../Assets/Images/social_media.png";
import Checkmark from "../../Assets/Images/checkmark.png";
import Add_Group from "../../Assets/Images/add-group.png";
import Savings from "../../Assets/Images/savings.png";

export const MainComponent3 = () => {
    const [isFlipped, setIsFlipped] = useState({
        branding: false,
        dtp: false,
        commerce: false,
        socialMedia: false,
    });

    const handleFlip = (id) => {
        setIsFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };    
    const cards = [
        { id: "branding", src: Branding, title: "BRANDING", backContent: (<ul className="card-list"> 
                                                                               <li>Projekt Logotypa</li>
                                                                                <li>Rebranding</li>
                                                                                <li>Wektoryzacja Logotypa</li>
                                                                                <li>Key visual</li>
                                                                                <li>Prezentacje</li>
                                                                          </ul>) },
        { id: "dtp", src: DTP, title: "DTP", backContent: (<ul className="card-list"> 
                                                                <li>Projekty Wizytówek</li>
                                                                <li>Projekty Banerów</li>
                                                                <li>Projekty Ulotek i Broszur</li>
                                                                <li>Projekty Katalogów </li>
                                                                <li>Projekty Rollupów</li>
                                                            </ul>) },
        { id: "commerce", src: Commerce, title: "E-COMMERCE", backContent:  (<ul className="card-list"> 
                                                                                <li>Banery</li>
                                                                                <li>Grafika na www</li>
                                                                                <li>Layout strony</li>
                                                                                <li>Infografika </li>
                                                                            </ul>) },
    ];

    return (
        <div className="main3" id="oferta_scroll">
            <div className="oferta_text">
                <h2>OFERTA</h2>
            </div>
            <div className="oferta">
                <div className="oferta-container">
                    {cards.map(({ id, src, title, backContent }) => (
                        <ReactCardFlip key={id} isFlipped={isFlipped[id]} flipDirection="horizontal">
                            <div className="oferta-box" onClick={() => handleFlip(id)}>
                                <img src={src} alt={title} height={250} />
                                <h2>{title}</h2>
                            </div>
                            <div className="oferta-box  back-box" onClick={() => handleFlip(id)}>
                                <p>{backContent}</p>
                            </div>
                        </ReactCardFlip>
                    ))}
                </div>
                <ReactCardFlip isFlipped={isFlipped.socialMedia} flipDirection="vertical">
                    <div className="social_media" onClick={() => handleFlip("socialMedia")}>
                        <div className="social-box">
                            <h1>SOCIAL MEDIA</h1>
                            <div className="social_photo">
                                <img src={Social} alt="Social Media" width={300} />
                            </div>
                        </div>
                    </div>
                    <div className="social_media" onClick={() => handleFlip("socialMedia")}>
                        <div className="social-box  back-box">
                            <ul className="card-list">
                                <li>Posty</li>
                                <li>Animacje</li>
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="project-container">
              <h2>PO CO MI PROJECT?</h2>
              <div className="project-box1">
                    <div className="savings">
                        <img src={Savings} alt="Savings" style={{height:"10vh", width:"auto" }}/>
                        <p>Zwiększysz zyski</p>
                    </div>
                    <div className="add_group">
                        <img src={Add_Group} alt="Add-Group" style={{height:"10vh", width:"auto" }} />
                        <p>Pozyskasz nowych klientów</p>
                    </div>
                    <div className="checkmark">
                        <img src={Checkmark} alt="Checkmark" style={{height:"10vh", width:"auto" }}/>
                        <p>Zwiększyć rozpoznawalność marki</p>
                    </div>
              </div>
            </div>
        </div>
    );
};
