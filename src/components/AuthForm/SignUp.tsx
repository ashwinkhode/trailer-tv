import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useRegisterMutation } from '~/generated/graphql';
import { useUser } from '~/context/UserContext';

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors: formFieldError },
  } = useForm();

  const { onChange, ...rest } = register('confirmPassword', {
    required: true,
  });

  const [signup, { loading, data, error }] = useRegisterMutation();

  const onSubmit = async ({ email, password, confirmPassword }: IFormInput) => {
    if (password === confirmPassword) {
      const response = await signup({
        variables: {
          email,
          password,
        },
      });

      if (response.data?.register.user) {
        if (setUser) {
          setUser({
            userId: response.data.register.user.userId,
            email: response.data.register.user.email,
          });
        }
        navigate('/', {
          replace: true,
        });
      }
    }
  };

  return (
    <div className="w-full lg:h-full h-5/6 flex flex-col lg:flex-row justify-center items-center mb-8">
      <div className="lg:w-1/2 lg:h-1/2 flex flex-col justify-center items-center space-y-4 lg:border-r-2 lg:border-gray-300">
        <h1 className="font-bold text-6xl">Sign Up</h1>
      </div>
      <div className="w-full lg:w-1/2 lg:h-full flex flex-col justify-center items-center">
        <div className="w-full px-8 lg:px-0 lg:w-2/3 m-8 lg:mx-auto flex flex-col justify-center space-y-4">
          <form
            className="relative flex flex-col justify-center space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {data?.register.errors &&
              data.register.errors.map((error) => (
                <div key={error.field} className="w-full text-red-500 mx-2">
                  {error.message}
                </div>
              ))}
            {error && (
              <div className="w-full text-red-500 mx-2">{error.message}</div>
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

            <div className="w-full">
              <label
                className="capitalize"
                aria-labelledby="confirmPassword"
                htmlFor="confirmPassword"
              >
                Confirm Password
                {formFieldError.confirmPassword?.type === 'required' && (
                  <span className="text-red-500 mx-2">
                    Confirm Password is required
                  </span>
                )}
                {formFieldError.confirmPassword?.type === 'validate' && (
                  <span className="text-red-500 mx-2">
                    Confirm Password must be same as Password
                  </span>
                )}
              </label>
              <input
                className="w-full rounded focus:outline-none px-2 py-2 bg-[#333333] text-gray-50 border-gray-500 border-b-2 truncate"
                type="password"
                onChange={(e) => {
                  if (
                    e.currentTarget.value !== getValues('password') &&
                    e.currentTarget.value.length > 3
                  ) {
                    setError('confirmPassword', {
                      type: 'validate',
                      message: 'Confirm Password must be same as Password',
                    });
                  } else {
                    clearErrors('confirmPassword');
                  }
                  onChange(e);
                }}
                {...rest}
              />
            </div>

            <button
              type="submit"
              className={clsx(
                loading ? 'bg-gray-500' : '',
                'w-full mt-8 px-2 py-2 bg-[#FF3333] hover:bg-[#FF4444] active:bg-[#CC0000] font-medium rounded'
              )}
            >
              Register
            </button>
          </form>
        </div>
        <div className="text-gray-400">
          Have an already account?
          <Link to="/login">
            <span className="ml-2 text-gray-50">Login Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
