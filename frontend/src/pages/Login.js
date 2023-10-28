import React, { useState, useEffect, useContext } from "react";
// import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth, firebaseError } from "../Firebase";
import GlobalContext from "./../context/GlobalContext";
import { Navigate, Link, useHistory } from "react-router-dom";
import { apiClient } from "./../utils/apiClient"
const Login = () => {
    const { loginToken, setLoginToken} = useContext(GlobalContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            id: email,
            password: password,
        };
        // ユーザー情報をローカルストレージに保存
        const newToken = await apiClient.auth.$post({ body: userData })
        .catch(() => {
        throw new Error('Invalid credential')
        })
        
        setLoginToken(newToken)
    };

    useEffect(() => {
        // ローカルストレージの変更を監視
        window.addEventListener('storage', (e) => {
            if (e.key === 'userData' && e.newValue) {
                const updatedUserData = JSON.parse(e.newValue);
                console.log('ユーザー情報が更新されました:', updatedUserData);
            }
        });
    }, []);

    return (
                    <div className="flex justify-center items-center h-screen bg-gray-200">
                        <div className="relative flex flex-col justify-center items-center w-4/12 min-w-[500px] min-h-[500px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md shadow-gray-500/20">
                            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                ログイン
                            </h4>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col justify-center items-center gap-6">
                                    <div className="relative h-11 w-10/12 min-w-[200px]">
                                        <input
                                            type="email"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Email
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-10/12 min-w-[200px]">
                                        <input
                                            type="password"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Password
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        className="mt-6 block w-10/12 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="submit" onClick={(e)=>handleSubmit(e)}
                                        data-ripple-light="true"
                                    >
                                        ログイン
                                    </button>
                                </div>
                                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                    <a
                                        className="font-semibold text-blue-500 transition-colors hover:text-blue-700"
                                        href="/register"
                                    >
                                        新規登録
                                    </a>
                                    はこちら
                                </p>
                            </form>
                        </div>
                    </div>
    );
};

export default Login;
