import * as React from "react";

import { Input } from "../components/input";
import { ButtonAuthGoogle, ButtonDefault } from "../components/button";
import { SIGNIN_FORM } from "../constant/input";
import { setCookie, getCookie } from "cookies-next";
import { UserAPI } from "../api";
import { GetServerSideProps } from "next";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions/userAction";
import { userTab } from "../constant/redux";
import { Link, useHistory } from "react-router-dom";
export interface LoginProps {}

const { SIGNIN } = userTab;

export default function SignInPage(props: LoginProps) {
  const dispatch = useDispatch();
  const router = useHistory();

  const signIn = async (e: any) => {
    e.preventDefault();
    const responseSignIn = await UserAPI.signIn(
      e.target.email.value,
      e.target.password.value
    );
    if (responseSignIn?.data.status === "Success") {
      localStorage.setItem("accessToken", responseSignIn?.data.data.token);
      setCookie("acessToken", responseSignIn?.data.data.token);
      console.log(SIGNIN);
      router.push("/dashboard");
    } else {
      window.alert("login fail");
    }
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow z-0">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="font-extrabold title-sign">
                  Sign in to your account
                </h1>
              </div>
              <ButtonAuthGoogle title="sign in with Google" />
              <div className="max-w-sm items-center mx-auto flex justify-center my-6">
                <div className="flex items-center border-t border-gray-500 dark:border-gray-700 border-dotted flex-grow mr-3"></div>
                <p className="sign-text">Or, sign in with your email</p>
                <div className="flex items-center border-t border-gray-500 dark:border-gray-700 border-dotted flex-grow ml-3"></div>
              </div>
              <form
                className="max-w-sm mx-auto flex-col flex"
                onSubmit={signIn}
              >
                {SIGNIN_FORM.map((input: any, index: number) => {
                  return <Input input={input} key={index} />;
                })}
                <Link to="/forgot-password">
                  <a className="sign-a mb-6">Forgot Password?</a>
                </Link>
                <ButtonDefault title={"Sign in"} />
                <div className="text-center">
                  {`Don't you have an account?`}
                  <Link to="/sign-up">
                    <a className="sign-a"> Sign up</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
