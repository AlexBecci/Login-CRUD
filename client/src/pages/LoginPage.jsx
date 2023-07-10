import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, errors: singinErrors } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    singin(data);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {singinErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        />
        {errors.email && <p className="text-red-500">email is required</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500">password is required</p>
        )}
        <button type="submit">Login</button>
      </form>
      <p className="flex gap-x-2 justify-between">
        Don't have an account? <Link className="text-cyan-500" to={"/register"}>Sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
