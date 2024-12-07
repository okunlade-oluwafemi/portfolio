import React from "react"
import "./Footer.css"

/* Footer */
const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2024 Oluwafemi Timothy Okunlade. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer