import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Button from "../common/Button";

export const Footer = () => {
    return (
        <footer className="bg-footer-bg text-soft-white py-12">
            <div className="container mx-auto px-4">
                {/* Quick Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/recipes">Browse</a></li>
                            <li><a href="/categories">News</a></li>
                            <li><a href="/contact">Collection</a></li>
                            <li><a href="/contact">Create</a></li>
                            <li><a href="/about">About Us</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaSquareFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitterSquare />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="col-span-full md:col-span-1">
                        <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-black text-sm grow border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px] mb-2"
                                required
                            />
                            <Button text="Subscribe" height="h-[35px]"/>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p>Email: support@flavorhunt.com</p>
                        <p>Phone: +234 704 267 0017</p>
                        <p>Address: 123 Recipe Street, Food City, FC 12345</p>
                    </div>
                </div>

                {/* Legal Information and Copyright */}
                <div className="text-center border-t border-gray-700 pt-8">
                    <p className="text-sm">
                        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/cookies">Cookie Policy</a>
                    </p>
                    <p className="text-sm mt-2">© 2025 Flavor Hunt. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;