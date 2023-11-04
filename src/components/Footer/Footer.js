import React from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
    return (
        <div className="#030711 text-white p-4">
            <div className="flex justify-center space-x-4 mb-4">
                <a
                    href="https://twitter.com/TheMikeDiSanto"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon className="white hover:text-blue-300" />
                </a>
                <a
                    href="https://www.linkedin.com/in/mpdisanto/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon className="white hover:text-blue-300" />
                </a>
                <a
                    href="https://github.com/mdisant"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon className="white hover:text-blue-300" />
                </a>
            </div>
            <div className="text-center">
                <a href="mailto:mikepdi@yahoo.com" className="white hover:underline" target="_blank" rel="noopener noreferrer">
                    mikepdi@yahoo.com
                </a>
            </div>
            <div className="text-center">
                <a href="https://www.michaelpdisanto.com/" className="white hover:underline" target="_blank" rel="noopener noreferrer">
                    www.michaelpdisanto.com
                </a>
            </div>
            <div className="text-center text-white pt-6 text-sm">
                version 1.0
            </div>
        </div>
    );
}


export default Footer;