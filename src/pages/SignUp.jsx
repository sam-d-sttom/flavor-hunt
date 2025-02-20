import FormButton from "../components/common/FormButton";
import LoginWithGoogle from "../components/common/LoginWithGoogle";
import { IoClose } from "react-icons/io5";
import usePreventBodyScrolling from "../utils/usePreventBodyScroling";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = ({ onClose }) => {
    //prevents body scroling when component renders.
    usePreventBodyScrolling();

    const [username, setUsername] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Sign up user
    function attemptSignUp(e) {
        e.preventDefault();

        // check if form has been submitted/
        if (isFormSubmitted) {
            return;
        }

        setIsFormSubmitted(true);
        
        setUsername(username.trim());
        setLastName(lastName.trim());
        setFirstName(firstName.trim());
        setEmail(email.trim());
        setPassword(password.trim());
        setConfirmPassword(confirmPassword.trim());
        
        // Check if details is set
        if (username.length === 0 || lastName.length === 0 || firstName.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            setIsFormSubmitted(false);
            return console.log("Fill up details");
        }
        
        //Regular expression to check if the user name provided contains only contain letters, numbers, underscores, and hyphens.
        const userNameRegex = /^(?![.-])(?!.*[_.-]{2})[a-zA-Z0-9._-]{3,30}(?<![.-])$/;
        
        //Check if username is correctly set
        if (!userNameRegex.test(username)) {
            setIsFormSubmitted(false);
            return console.log("WRONG USER NAME FORMAT");
        }
        
        //Regular expression to check if the last name is properly set.
        const nameRegex = /^(?!.*[\'-]{2})(?!.*\s{2})[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:[\'-][a-zA-ZÀ-ÖØ-öø-ÿ]+)?(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:[\'-][a-zA-ZÀ-ÖØ-öø-ÿ]+)?)?$/;
        
        //Check if last name is correctly set
        if (!nameRegex.test(lastName)) {
            setIsFormSubmitted(false);
            return console.log("WRONG LAST NAME FORMAT");
        }
        
        //Check if first name is correctly set
        if (!nameRegex.test(firstName)) {
            setIsFormSubmitted(false);
            return console.log("WRONG FIRST NAME FORMAT");
        }
        
        
        //Reular expression to check if the password provided is accepted
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
        
        if (!passwordRegex.test(password)) {
            setIsFormSubmitted(false);
            
            return console.log("WRONG PASSWORD FORMAT");
        }
        
        
        if (password !== confirmPassword) {
            setIsFormSubmitted(false);
            
            return console.log("Password does'nt match confirmation password");
        }

        // post data
        const signUpData = {
            username,
            'last_name': lastName,
            'first_name': firstName,
            email,
            password,
        };


        // make request
        axios.post('https://flavor-hunt-backend-git-main-sam-d-sttoms-projects.vercel.app/api/api/user/create', signUpData).then(response => {
            setIsFormSubmitted(false);

            if (response.status === 201) {
                // send user back to previous page.
                navigate(-1);
            }


        }).catch(error => {
            setIsFormSubmitted(false);
            if (error.status === 500 || error.code === "ERR_NETWORK" || error.code === "ERR_BAD_RESPONSE") {
                console.log("NETWORK ERROR");
            } else if (error.status === 401) {
                console.log("WRONG CREDENTIALS");

            }
            console.log(error)
        })
    }

    return (
        <section className="fixed inset-0 z-[20] bg-overlay-bg overflow-y-scroll">
            <div className="h-full min-h-[500px] flex justify-around items-center">
                {/* Form main div */}
                <div className="z-[100] h-[500px] w-[400px] rounded-lg shadow-2xl py-10 px-1 bg-bg relative">
                    <header className="">
                        <div className="absolute top-2 left-2">
                            <button className="cursor-pointer" onClick={onClose}>
                                <IoClose />
                            </button>
                        </div>
                        <div className="flex flex-col items-center gap-y-2 mb-6">
                            <svg version="1.1" viewBox="0 0 2048 503" width="120" height="" xmlns="http://www.w3.org/2000/svg">
                                <path transform="translate(1777,73)" d="m0 0h50l2 6 15 58 21 79 2 6 1-149h35v252h-41l-18-67-19-71-11-41-1 1v177l-1 1h-35z" fill="#121212" />
                                <path transform="translate(1278,73)" d="m0 0h73l14 3 12 6 9 8 6 11 3 10 2 18v29l-2 14-4 10-5 8-4 5-10 7 9 6 7 7 5 10 3 13 1 8 1 58 1 13 2 8h-41l-2-16-1-55-2-16-4-8-6-4-7-2-20-1v102h-40zm39 36v43l1 35h22l8-3 7-8 2-7v-45l-5-10-7-5z" fill="#151515" />
                                <path transform="translate(1480,73)" d="m0 0h39v109l45-1v-108h40v252h-39v-108h-46v108h-39z" fill="#151515" />
                                <path transform="translate(243,147)" d="m0 0h8l9 3 8 7 4 8 1 4v7l-3 10-6 7-2 2 35 6 27 8 16 7 20 11 18 12 11 9 21 21 9 11 9 13 11 19 9 19 7 21 5 23 2 15 1 21v25h8l5 2 1 3v44l-1 3-2 1h-454l-2-2v-49l5-2h9l-1-2 1-42 4-25 5-20 7-20 10-20 11-18 12-16 11-12 13-13 17-13 15-10 22-11 20-8 23-6 25-4h7l-5-5-4-5-3-6-1-10 4-11 6-7 7-4zm2 12-6 3-4 5-2 5 1 7 6 7 2 1h11l5-4 3-5v-8l-3-6-5-4zm-13 48-18 2-25 6-19 7-25 12-14 9-17 14-10 9-10 10-11 14-10 15-10 18-6 14-7 21-5 26-1 10-1 42h408v-18l-1-29-4-23-5-19-7-18-12-23-10-15-11-14-11-12-11-9-15-12-16-10-17-9-23-9-19-5-18-3-10-1zm-202 242v30h436v-29l-1-1z" fill="#191919" />
                                <path transform="translate(1184,70)" d="m0 0h18l14 3 12 5 10 9 7 11 4 10 2 9 1 12v143l-2 15-4 11-6 11-9 9-12 6-16 4h-22l-13-3-12-6-10-9-8-14-3-9-2-14v-152l3-14 8-16 7-8 11-7 15-5zm3 36-6 3-7 8-2 10v143l1 10 4 6 6 5 2 1h16l8-6 4-8 1-24v-113l-1-20-4-8-6-5-6-2z" fill="#171717" />
                                <path transform="translate(1632,73)" d="m0 0h39l1 202 3 9 7 6 2 1h16l6-4 4-5 2-9 1-200h37v198l-2 15-3 10-5 10-9 10-8 6-10 4-11 2h-24l-10-2-10-4-9-7-8-10-6-13-3-19z" fill="#121212" />
                                <path transform="translate(883,73)" d="m0 0h58l3 17 17 107 16 99 4 25v4h-40l-6-41v-4h-49l-1 11-5 34h-36l1-12 13-82 19-119zm27 48-1 1-18 123 1 1h19l18-1-2-18-14-96-1-9z" fill="#161616" />
                                <path transform="translate(981,73)" d="m0 0h40l9 64 18 123 2 16h2l2-20 12-81 13-90 2-12h36l-1 13-13 83-24 156h-60l-38-247z" fill="#191919" />
                                <path transform="translate(607,73)" d="m0 0h105v35l-1 1h-65l1 54v22h50l1 1v34l-1 1h-51l1 103-1 1h-39z" fill="#171717" />
                                <path transform="translate(1920,73)" d="m0 0h123v35l-2 1h-39l-1 216h-39l-1-51v-158l1-7h-41l-1-1z" fill="#121212" />
                                <path transform="translate(731,73)" d="m0 0h40v217h65v35h-105z" fill="#181818" />
                                <path transform="translate(236,4)" d="m0 0 5 1 5 6 14 6 5 4 2 3v10l-5 6-17 8 16 8 5 5 1 2v8l-5 6-17 9 3 2 12 5 5 4 2 4v8l-5 6-18 10-4 5-7-1-1-1v-7l6-7 15-8h2v-2l-10-3-8-4-5-6v-9l6-7 16-8-16-8-6-7v-8l5-6 8-5 10-3v-2l-9-3-8-4-6-6v-8z" fill="#181818" />
                                <path transform="translate(465,133)" d="m0 0 6 1 3 5 3 11v2l9 3 8 3 3 4-1 5-11 8-3 2-1 17-3 5-7-1-12-8-7 1-8 2h-5l-3-4 1-7 4-10-2-5-9-14 1-3 4-2 17-1 7-8 4-5zm-1 20-4 5-10 2 2 4 2 3-1 5-1 3 3 2 8-1 4 4 3-1 1-8 5-4v-2l-7-4h-2l-1-8z" fill="#191919" />
                                <path transform="translate(198,246)" d="m0 0 4 3v6l-3 3-26 10-14 8-14 11-10 9-9 10-8 11-8 14-8 19-6 21-3 3-6-1-2-3 1-11 6-20 11-23 8-12 11-13 12-12 16-12 15-9 21-9z" fill="#171717" />
                                <path transform="translate(35,146)" d="m0 0 7 6 7 9 17-1 5 3 1 5-9 15 6 15-1 5-3 3-22-4-1 3-10 7h-6l-3-5v-14l-13-8-3-3v-5l5-4 13-5 4-16 4-5zm2 20-3 5-4 5-5 3v2l6 3 2 9 2 1 7-5 8 1-1-10 4-7-1-1-11-1-3-5z" fill="#171717" />
                                <path transform="translate(359,14)" d="m0 0 4 2 3 4-1 4-8 7-9 7-10 9-8 9-10 15-10 21-6 19-3 16-1 13-2 6-4 1-6-3v-19l5-24 7-19 8-16 7-11 8-10 11-12 11-9z" fill="#191919" />
                                <path transform="translate(130,19)" d="m0 0 5 1 8 7 12 12 11 14 9 13 10 18 6 14 6 18 4 19v9l-3 2h-6l-3-8-5-21-5-15-12-25-10-15-11-14-12-13-8-7-1-3z" fill="#181818" />
                                <path transform="translate(388,111)" d="m0 0h20l5 2v9l-1 1h-22l-12 3-13 7-10 8-7 6-11 14-5 5-5-1-3-3 1-5 10-13 12-13 12-9 16-8z" fill="#191919" />
                                <path transform="translate(87,110)" d="m0 0h11l14 3 16 8 14 11 9 9 10 14 1 2v6l-4 3-6-1-10-14-13-13-14-9-13-5-15-2-4-5 2-5z" fill="#181818" />
                                <path transform="translate(65,25)" d="m0 0h11l8 4 6 9 1 4v7l-5 10-9 6-4 1h-9l-6-4-6-7-2-7 1-9 4-7 7-6zm3 12-5 4-1 7 5 5 7 1 4-4 1-2v-7l-5-4z" fill="#1B1B1B" />
                                <path transform="translate(376,167)" d="m0 0h10l8 4 5 6 2 4v13l-5 8-8 5h-13l-6-3-6-7-2-5v-10l4-8 6-5zm3 12-5 4-1 2v6l5 5h7l5-6-1-7-3-3z" fill="#191919" />
                                <path transform="translate(444,33)" d="m0 0h9l8 3 5 6 3 7v10l-5 8-6 4-6 2h-10l-6-4-6-7-1-3v-11l4-8 6-5zm3 12-5 3-2 3 1 6 5 5 4 1 5-3 3-4-1-7-3-3z" fill="#1E1E1E" />
                                <path transform="translate(467,250)" d="m0 0h7l8 3 7 8 2 7-1 9-4 6-6 5-5 2h-12l-7-5-4-6-1-3v-12l5-8 5-4zm2 12-5 3-2 4 1 6 4 4 5 1 5-3 3-5-2-7-5-3z" fill="#1C1C1C" />
                                <path transform="translate(651,384)" d="m0 0 9 1 2 18 1 4 2-10 2-12h9v36l-5 1-1-2v-16l-3 17-1 1h-5l-2-6-2-13v18l-1 1h-5l-1-23v-14z" fill="#363636" />
                                <path transform="translate(965,385)" d="m0 0h10l3 16 1-16h6v37h-6l-2-3-4-19h-2v22l-6-1z" fill="#4F4F4F" />
                                <path transform="translate(1557,385)" d="m0 0h9l3 15 1-4v-11h6v37h-6l-3-9-4-14-1 23-5-1zm13 19 1 2z" fill="#434343" />
                                <path transform="translate(704,384)" d="m0 0 13 1 4 2 1 2v9l-2 5 3 4v7l-2 5-7 3h-10zm6 6v9h6v-8l-1-1zm0 15v11h6l1-1v-9l-1-1z" fill="#484848" />
                                <path transform="translate(797,384)" d="m0 0 12 1 5 3v12l-1 5 1 2 1 14-1 1h-5l-1-4v-10l-6-1v15h-5l-1-1v-36zm5 6v10l1 1h5l1-10-1-1z" fill="#4A4A4A" />
                                <path transform="translate(1693,385)" d="m0 0h14l3 2 1 10-2 7 2 5v13h-6v-15h-6v15h-5l-1-1zm5 5v9l1 2h6v-11z" fill="#464646" />
                                <path transform="translate(1050,384)" d="m0 0 10 1 4 31v6l-6-2v-4h-8v5l-5 1-1-2 5-35zm3 17-2 6 1 3h5v-8z" fill="#424242" />
                                <path transform="translate(1421,385)" d="m0 0h14l4 2v32l-3 2-5 1h-9l-1-4zm5 5 1 26h6l1-1v-25z" fill="#3E3E3E" />
                                <path transform="translate(1647,385)" d="m0 0h7v31h5v-31h7l-1 32-4 4-2 1h-7l-4-4-1-8z" fill="#4A4A4A" />
                                <path transform="translate(843,384)" d="m0 0 6 1v13l6-13 7-1-2 5-5 10 1 8 6 13v2h-6l-6-12-1 1-1 11h-5l-1-1v-36z" fill="#4A4A4A" />
                                <path transform="translate(1379,385)" d="m0 0h11l4 36-4 1-2-1-2-5h-5l-2 6h-5l2-19zm4 11-2 9v5h5v-10z" fill="#424242" />
                                <path transform="translate(924,385)" d="m0 0h9l5 3v29l-4 4-9 1-5-5v-29l1-2zm1 5v21l1 5h6v-26z" fill="#4F4F4F" />
                                <path transform="translate(1169,385)" d="m0 0h11l4 31 1 5-4 1-2-1-1-5h-8v5h-6zm4 11-2 13 4 1 2-1v-9l-1-3z" fill="#474747" />
                                <path transform="translate(753,385)" d="m0 0h11l4 26 1 11h-5l-1-6h-9v5l-4 1-1-3zm6 10-2 2-1 12 5 1v-13z" fill="#393939" />
                                <path transform="translate(1466,385)" d="m0 0h7l3 23 2-6 2-17h6l-1 13-4 24h-8l-2-1-5-33z" fill="#454545" />
                                <path transform="translate(1298,385)" d="m0 0h17v4l-2 1h-9v10l10 1-1 4-9 1v10h10l1 5-1 1h-15l-1-1z" fill="#4B4B4B" />
                                <path transform="translate(606,385)" d="m0 0h17l1 4-12 1v10l9 1 1 2-1 2-9 1v10h10l1 1v5h-16l-1-1z" fill="#5F5F5F" />
                                <path transform="translate(1513,385)" d="m0 0h17l-1 5h-10v10l9 1v4l-9 1v10h10l1 5-1 1h-15l-1-1z" fill="#505050" />
                                <path transform="translate(1216,385)" d="m0 0h7l5 3 1 5-5 1-2-4-5 1 2 6 9 11 1 2v6l-4 5-2 1h-7l-5-5-1-6 4-1 4 4v2l4-1-1-5-9-11-1-3v-7z" fill="#515151" />
                                <path transform="translate(1740,384)" d="m0 0 16 1-1 4-1 1h-9v10h6l3 3-2 3h-7v10h10l1 4-1 2h-16v-37z" fill="#515151" />
                                <path transform="translate(1122,385)" d="m0 0h20l-1 4-5 1-1 32h-6l-1-3v-19l1-10-7-2z" fill="#434343" />
                                <path transform="translate(1253,385)" d="m0 0h19v4l-6 1v32h-6v-32l-7-2z" fill="#404040" />
                                <path transform="translate(1603,385)" d="m0 0h18v4l-7 1v32h-5l-1-25 1-7-6-1-1-3z" fill="#202020" />
                                <path transform="translate(332,108)" d="m0 0 7 1 2 2v6l-4 3-7-1-2-5 3-5z" fill="#2B2B2B" />
                                <path transform="translate(153,100)" d="m0 0 7 1 2 3-1 6-3 2h-5l-4-5 2-5z" fill="#292929" />
                                <path transform="translate(195,28)" d="m0 0 5 1 2 3-1 6-2 2-7-1-2-2 1-7z" fill="#262626" />
                                <path transform="translate(428,224)" d="m0 0h6l3 3v5l-3 3-7-1-2-3 1-5z" fill="#2C2C2C" />
                                <path transform="translate(113,197)" d="m0 0h8l2 2-1 6-5 3-5-3-2-4z" fill="#343434" />
                                <path transform="translate(1054,392)" d="m0 0 2 4v6h-4l1-9z" fill="#fff" />
                                <path transform="translate(378,54)" d="m0 0 3 1-4 4h-2l2-4z" fill="#757575" />
                                <path transform="translate(1054,404)" d="m0 0" fill="#fff" />
                            </svg>
                            <h3>CREATE AN ACCOUNT</h3>
                        </div>
                    </header>

                    <form onSubmit={attemptSignUp} className="mb-4 h-[60%]">
                        {/* Input div */}
                        <div className="h-[90%] overflow-y-scroll px-6">
                            <div className="flex flex-col mb-4">
                                <label className="pb-1">Username</label>
                                <input
                                    className="text-black text-sm w-full border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px]"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="pb-1">Last Name</label>
                                <input
                                    className="text-black text-sm w-full border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px]"
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="pb-1">First Name</label>
                                <input
                                    className="text-black text-sm w-full border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px]"
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="pb-1">Email</label>
                                <input
                                    className="text-black text-sm w-full border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px]"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="pb-1">Password</label>
                                <input
                                    className="text-black text-sm w-full border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px]"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="pb-1">Confirm Password</label>
                                <input
                                    className="text-black text-sm w-full border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px]"
                                    type="password"
                                    placeholder="Confirm Password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Submit button for form */}
                        <div className="px-6">
                            <FormButton
                                width="w-full"
                                height="h-[35px]"
                                text="Sign Up"
                                isFormSubmitted={isFormSubmitted}
                            />
                        </div>
                    </form>

                    <div className="px-6">
                        <div className="flex items-center mb-4">
                            <div className="grow border-t border-gray-300"></div>
                            <span className="shrink mx-4 text-gray-600">OR</span>
                            <div className="grow border-t border-gray-300"></div>
                        </div>

                        <LoginWithGoogle />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;