import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup successful");

    // Redirect to login OR dashboard
    navigate("/login");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Company Logo"
          className="mx-auto h-10 w-auto"
        />

        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#0F3460]">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm/6 font-medium text-[#0F3460]">
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 block w-full rounded-md bg-[#0F3460] px-3 py-1.5 text-base text-[#0F3460]
              outline-1 -outline-offset-1 outline-[#0F3460]/10 placeholder:text-gray-500 
              focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-[#0F3460]">
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 block w-full rounded-md bg-[#0F3460] px-3 py-1.5 text-base text-[#0F3460]
              outline-1 -outline-offset-1 outline-[#0F3460]/10 placeholder:text-gray-500 
              focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-[#0F3460]">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              className="mt-2 block w-full rounded-md bg-[#0F3460] px-3 py-1.5 text-base text-[#0F3460]
              outline-1 -outline-offset-1 outline-[#0F3460]/10 placeholder:text-gray-500 
              focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 
            text-sm/6 font-semibold text-white hover:bg-indigo-400 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Create account
          </button>
        </form>

        <p className="mt-10 text-center text-sm/6 text-[#0F3460]">
          Already have an account?{" "}
          <button
            className="font-semibold text-indigo-400 hover:text-indigo-300"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
