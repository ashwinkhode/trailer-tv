import { Link } from 'react-router-dom';
import UserInput from './UserInput';

const Login = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center mb-8">
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center space-y-4 border-r-2 border-gray-300">
        <h1 className="font-bold text-6xl">Sign In</h1>
        <p className="w-2/3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          totam porro autem sunt quisquam!
        </p>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <div className="w-2/3 m-8 mx-auto flex flex-col justify-center space-y-4">
          <UserInput
            placeholder="OmkarKulkarni@gmail.com"
            label="email"
            type="email"
          />
          <UserInput
            placeholder="Password (Min 6 Characters)"
            label="password"
            type="password"
          />
        </div>
        <button className="w-2/3 px-2 py-2 bg-[#FF3333] hover:bg-[#FF4444] active:bg-[#CC0000] font-medium rounded">
          Sign In
        </button>
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
