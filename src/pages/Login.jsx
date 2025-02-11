import Button from "../components/common/Button";
import FormButton from "../components/common/FormButton";
import { GoogleLogin } from '@react-oauth/google';
import LoginWithGoogle from "../components/common/LoginWithGoogle";


export const Login = () => {
    return (
        <section className="fixed z-[20] inset-0 flex justify-around items-center">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-[50]"></div>

            {/* Form main div */}
            <div className="z-[100] w-[400px] rounded-lg shadow-2xl py-10 px-6 bg-bg">
                <form className="mb-4">
                    <div className="flex flex-col mb-4">
                        <label className="pb-1">Username or Email</label>
                        <input
                            className="text-black text-sm w-full border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px]"
                            type="text"
                            placeholder="Username or Email"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="pb-1">Password</label>
                        <input
                            className="text-black text-sm w-full border-2 border-border-color border-solid rounded-lg py-2 px-4 focus:outline-none h-[35px]"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <FormButton
                        width="w-full"
                        height="h-[35px]"
                        text="Login"
                    />
                </form>

                <div className="flex items-center mb-4">
                    <div className="grow border-t border-gray-300"></div>
                    <span className="shrink mx-4 text-gray-600">OR</span>
                    <div className="grow border-t border-gray-300"></div>
                </div>

                <LoginWithGoogle />
            </div>
        </section>
    );
}

export default Login;
