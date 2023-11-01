import React from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
    return (
        <div className="footer">
            <div className='socialMedia'>
                <a href="https://twitter.com/TheMikeDiSanto" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
                <a href="https://www.linkedin.com/in/mpdisanto/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/mdisant" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>
            <div className="contactInfo">
                mikepdi@yahoo.com | 914-403-1696
            </div>
            <p> &copy; 2023 Michael Pierce DiSanto. All rights reserved.</p>
        </div>
    );
}

export default Footer;