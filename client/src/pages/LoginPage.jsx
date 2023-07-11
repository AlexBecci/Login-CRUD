import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, errors: singinErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    singin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className=" bg-gray-800 max-w-lg bg-opacity-50 rounded-lg p-8 flex flex-col md:mx-auto w-full my-32 md:my-8 ">
        {singinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Login
          </h2>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-sky-900 rounded border border-gray-600 focus:border-sky-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.username && (
              <p className="text-red-500 my-1">email is required</p>
            )}
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-400">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-sky-900 rounded border border-gray-600 focus:border-sky-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.username && (
              <p className="text-red-500 my-1">password is required</p>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded-xl text-lg mx-auto my-4"
          >
            Login
          </button>
        </form>
        <p className="text-xs sm:text-lg my-4 mx-4 justify-between">
          Don't have an account?
          <Link className="text-sky-500" to={"/register"}>
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
