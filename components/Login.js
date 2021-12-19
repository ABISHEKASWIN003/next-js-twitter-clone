import { signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div className="">
      <div className="flex flex-col items-center space-y-10 pt-40">
        <Image
          src="https://rb.gy/ogau5a"
          width={150}
          height={150}
          objectFit="contain"
        />
        <h2 className=" text-stone-200 h-5 font-extrabold text-5xl">
          Welcome to Twitter Clone
        </h2>
        <span className="text-2xl font-light text-stone-100"> Sign up</span>

        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {/* https://devdojo.com/tailwindcss/buttons#_ */}
              <button
                className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                  {provider.name} Account
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
