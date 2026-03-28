import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Chrome, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

export default function Login() {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithGithub, error, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState(null);

  if (user) {
    navigate('/');
    return null;
  }

  const handleGoogleLogin = async () => {
    setLoading(true);
    setLocalError(null);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setLocalError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setLoading(true);
    setLocalError(null);
    try {
      await signInWithGithub();
      navigate('/');
    } catch (err) {
      setLocalError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Budget<span className="highlight">26</span></h1>
          <p>Sign in to your account</p>
        </div>

        {(error || localError) && (
          <div className="error-message">
            <AlertCircle size={20} />
            <span>{error || localError}</span>
          </div>
        )}

        <div className="login-buttons">
          <button
            className="login-btn google-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <Chrome size={20} />
            <span>{loading ? 'Signing in...' : 'Sign in with Google'}</span>
          </button>

          <button
            className="login-btn github-btn"
            onClick={handleGithubLogin}
            disabled={loading}
          >
            <Github size={20} />
            <span>{loading ? 'Signing in...' : 'Sign in with GitHub'}</span>
          </button>
        </div>

        <div className="login-footer">
          <p>Your data is secure and encrypted</p>
          <p className="disclaimer">
            This app uses Firebase Authentication for secure login
          </p>
        </div>
      </div>
    </div>
  );
}
