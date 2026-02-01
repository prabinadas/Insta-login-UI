import { useState } from 'react';
import { Facebook, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import GetApp from './GetApp';
import PhoneMockup from './PhoneMockup';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt', { username, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4  ">
      <div className="flex flex-col md:flex-row gap-10 ">

        <PhoneMockup />


        <div className="w-full max-w-sm md:w-88 space-y-4">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-300 mb-2 p-8 shadow-2xl shadow-purple-200/50  h-94">

            <div className="flex justify-center mb-5">

              <img
                src="/insta4.png"
                alt="Instagram"
                className="w-48 h-auto object-contain mx-auto"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Phone number,username or email address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-1 py-2 text-sm border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-1 py-2 text-sm border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-1.5 rounded-lg text-sm hover:from-blue-600 hover:to-blue-700 transition-colors"
              >
                Log in
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="px-4 text-sm font-semibold text-gray-500">OR</div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 text-[#385185] font-semibold text-sm py-2 hover:opacity-80 transition-opacity">
              <Facebook size={20} fill="#385185" />
              Log in with Facebook
            </button>

            <div className="text-center  ">
              <a href="#" className="text-xs text-[#001c37] hover:opacity-80 items-center">
                Forgotten your password?
              </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl mb-2 border border-gray-300 p-5 shadow-2xl shadow-purple-200/50 text-center  ">
            <p className="text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-[#0095f6] font-semibold hover:opacity-80">
                <Link to="/signup"> Sign up</Link>
              </a>
            </p>
          </div>
          <GetApp />
        </div>

      </div>

    </div>


  );
}

export default LoginPage;
