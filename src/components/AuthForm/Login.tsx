import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '~/generated/graphql';

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors: formFieldError },
  } = useForm();

  const [login, { data, error, loading }] = useLoginMutation({
    fetchPolicy: 'no-cache',
  });

  const onSubmit = async ({ email, password }: IFormInput) => {
    const response = await login({
      variables: {
        email,
        password,
      },
    });

    if (response.data?.login.user) {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="w-full lg:h-full h-5/6 flex flex-col lg:flex-row justify-center items-center mb-8">
      <div className="lg:w-1/2 lg:h-1/2 flex flex-col justify-center items-center space-y-4 lg:border-r-2 lg:border-gray-300">
        <h1 className="font-bold text-6xl">Sign In</h1>
      </div>
      <div className="lg:w-1/2 lg:h-full flex flex-col justify-center items-center">
        <div className="lg:w-2/3 m-8 lg:mx-auto flex flex-col justify-center space-y-4">
          <form
            className="relative flex flex-col justify-center space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {error && (
              <div className="w-full text-red-500 mx-2">{error?.message}</div>
            )}
            {data?.login?.errors && (
              <div className="w-full text-red-500 mx-2">
                {data.login.errors[0]?.message}
              </div>
            )}
            <div className="w-full">
              <label
                className="capitalize"
                aria-labelledby="email"
                htmlFor="email"
              >
                Email Address
                {formFieldError.email?.type === 'required' && (
                  <span className="text-red-500 mx-2">
                    Email Address is required
                  </span>
                )}
              </label>

              <input
                className="w-full rounded focus:outline-none px-2 py-2 bg-[#333333] text-gray-50 border-gray-500 border-b-2 truncate"
                type="email"
                id="email"
                {...register('email', { required: true })}
              />
            </div>

            <div className="w-full">
              <label
                className="capitalize"
                aria-labelledby="password"
                htmlFor="password"
              >
                Password
                {formFieldError.password?.type === 'required' && (
                  <span className="text-red-500 mx-2">
                    Password is required
                  </span>
                )}
              </label>
              <input
                className="w-full rounded focus:outline-none px-2 py-2 bg-[#333333] text-gray-50 border-gray-500 border-b-2 truncate"
                type="password"
                {...register('password', { required: true })}
              />
            </div>
            <button
              type="submit"
              className={clsx(
                loading ? 'bg-gray-500!' : '',
                'w-full mt-8 px-2 py-2 bg-[#FF3333] hover:bg-[#FF4444] active:bg-[#CC0000] font-medium rounded'
              )}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="mt-3 text-gray-400">
          Dont have an account?
          <Link to="/signup">
            <span className="ml-2 text-gray-50">Register Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
