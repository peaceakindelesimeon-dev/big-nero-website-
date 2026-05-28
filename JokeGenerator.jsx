import { useState } from 'react';

export default function JokeGenerator() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jokeType, setJokeType] = useState('any');

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using JokeAPI - https://jokeapi.dev/
      const url = jokeType === 'any' 
        ? 'https://v2.jokeapi.dev/joke/Any'
        : `https://v2.jokeapi.dev/joke/${jokeType}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error('No joke found');
      }
      
      // Handle both single-part and two-part jokes
      if (data.type === 'single') {
        setJoke({ text: data.joke, type: 'single' });
      } else if (data.type === 'twopart') {
        setJoke({ setup: data.setup, delivery: data.delivery, type: 'twopart' });
      }
    } catch (err) {
      setError(err.message);
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            JOKE GENERATOR
          </h1>
          <p className="text-white/60 text-lg">Get random jokes to brighten your day! 😂</p>
        </div>

        {/* Controls */}
        <div className="bg-zinc-900/50 border border-purple-500/30 rounded-3xl p-8 mb-8 backdrop-blur-xl">
          {/* Joke Type Selector */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-3 uppercase tracking-wider text-sm">
              Joke Category
            </label>
            <select
              value={jokeType}
              onChange={(e) => setJokeType(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-purple-500/50 text-white rounded-xl focus:outline-none focus:border-purple-400 transition cursor-pointer"
            >
              <option value="any">Any Joke</option>
              <option value="general">General</option>
              <option value="knock-knock">Knock-Knock</option>
              <option value="programming">Programming</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            onClick={fetchJoke}
            disabled={loading}
            className={`w-full py-4 px-6 font-bold text-lg uppercase tracking-wider rounded-full transition duration-300 ${
              loading
                ? 'bg-purple-600/50 text-white/50 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? '⏳ Loading...' : '🎭 Get a Joke'}
          </button>
        </div>

        {/* Joke Display */}
        {joke && (
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-3xl p-8 mb-8 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4">
            <div className="text-4xl mb-6">😄</div>
            
            {joke.type === 'single' ? (
              <p className="text-white text-xl leading-relaxed font-medium">
                {joke.text}
              </p>
            ) : (
              <div>
                <p className="text-white/90 text-lg mb-4 font-medium">
                  {joke.setup}
                </p>
                <p className="text-white text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  {joke.delivery}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-3xl p-6 mb-8 text-red-200">
            <p className="font-semibold">❌ {error}</p>
            <p className="text-sm text-red-300 mt-2">Please try again or check your internet connection.</p>
          </div>
        )}

        {/* Initial State Message */}
        {!joke && !error && !loading && (
          <div className="bg-zinc-800/30 border border-white/10 rounded-3xl p-8 text-center">
            <p className="text-white/70 text-lg">
              Click the button above to get started! 🎉
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-white/40 text-sm">
          <p>Powered by <span className="text-purple-400 font-semibold">JokeAPI</span></p>
          <p className="mt-2">Refresh the page or select a new category for more laughs! 😊</p>
        </div>
      </div>
    </div>
  );
}