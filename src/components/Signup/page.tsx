import { Link } from "react-router-dom";
import "./style.css";

const Signup = () => {
    return (
        <div className="flex items-center h-[80vh] sm:h-[90vh] justify-center">
            <form className="form m-auto">
                {/* Email Input */}
                <div className="flex-column">
                    <label>Name</label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                        <g data-name="Layer 3" id="Layer_3">
                            <path d="M30.853 13.87a15 15 0 0 0-29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0-1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1-4.158-.759V6.726a1 1 0 0 0-2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6z"></path>
                        </g>
                    </svg>
                    <input
                        placeholder="Enter your Name"
                        className="input"
                        type="text"
                        required
                    />
                </div>
                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                        <g data-name="Layer 3" id="Layer_3">
                            <path d="M30.853 13.87a15 15 0 0 0-29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0-1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1-4.158-.759V6.726a1 1 0 0 0-2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6z"></path>
                        </g>
                    </svg>
                    <input
                        placeholder="Enter your Email"
                        className="input"
                        type="email"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="flex-column">
                    <label>Password</label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-64 0 512 512">
                        <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.524 48 48v224c0 26.477-21.547 48-48 48zm-288-288c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zm0 0"></path>
                        <path d="M304 224c-8.832 0-16-7.168-16-16V128c0-53-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16V128c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16zm0 0"></path>
                    </svg>
                    <input
                        placeholder="Enter your Password"
                        className="input"
                        type="password"
                        required
                    />
                </div>

                {/* Sign In Button */}
                <Link className="button-submit flex justify-center items-center" to={"/login"}>Sign In</Link>
                <p className="p">
                    Already have an account? <Link to={"/login"} className="span">Login</Link>
                </p>
                <p className="p line">Or With</p>

                {/* Social Media Buttons */}
                <div className="flex-row">
                    <button className="btn google">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="20"
                            height="20"
                        >
                            <path
                                d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014l57.992 10.632 25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456C103.821 274.792 107.225 292.797 113.47 309.408z"
                                style={{ fill: "#FBBB00" }}
                            />
                            <path
                                d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911H258.79v-80h138.887l109.85.176z"
                                style={{ fill: "#518EF8" }}
                            />
                        </svg>
                        Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
