import React, { useState, FormEvent, ChangeEvent } from 'react';

const API_URL = 'http://localhost:8000/news_weather_agent';

type Theme = {
  background: string;
  card: string;
  text: string;
  input: string;
  border: string;
  button: string;
  buttonText: string;
  result: string;
  shadow: string;
};

const lightTheme: Theme = {
  background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  card: 'rgba(255,255,255,0.97)',
  text: '#1a202c',
  input: '#f1f5f9',
  border: '#a5b4fc',
  button: 'linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)',
  buttonText: '#fff',
  result: '#f1f5f9',
  shadow: '0 8px 32px #ee097933',
};

const darkTheme: Theme = {
  background: 'linear-gradient(135deg, #3a1c71 0%, #6d5bba 50%, #8f94fb 100%)',
  card: 'rgba(58,28,113,0.97)',
  text: '#f3eaff',
  input: 'rgba(58,28,113,0.85)',
  border: '#8f94fb',
  button: 'linear-gradient(90deg, #8f94fb 0%, #6d5bba 100%)',
  buttonText: '#fff',
  result: 'rgba(58,28,113,0.85)',
  shadow: '0 8px 32px #8f94fb99',
};

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [source, setSource] = useState<string>('newsapi');
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);
  const theme = dark ? darkTheme : lightTheme;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult([]);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, source })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult([]);
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: theme.background, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.5s' }}>
      <div style={{ background: theme.card, borderRadius: 28, boxShadow: theme.shadow, padding: 52, width: 460, maxWidth: '97%', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'background 0.5s, box-shadow 0.5s' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
          <button onClick={() => setDark(d => !d)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 26, color: theme.text }} title="Toggle dark/light mode">
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: 38, color: theme.text, fontWeight: 900, fontSize: 32, letterSpacing: 0.5, textShadow: '0 2px 12px #ee097955' }}>
          News & Real-Time Search Agent
        </h2>
        <form onSubmit={handleSubmit} style={{ marginBottom: 30, display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              value={message}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
              placeholder="Enter your query..."
              style={{
                padding: '20px 18px 20px 18px',
                fontSize: 20,
                borderRadius: 16,
                border: `2.5px solid ${theme.border}`,
                background: theme.input,
                color: theme.text,
                outline: 'none',
                width: '100%',
                boxShadow: '0 6px 24px #ee097922',
                transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
                fontWeight: 600,
                position: 'relative',
                zIndex: 2,
              }}
              required
            />
            {/* Removed the pink 'Query' label */}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <select value={source} onChange={e => setSource(e.target.value)} style={{ flex: 1, padding: 15, fontSize: 18, borderRadius: 14, border: `2.5px solid ${theme.border}`, background: theme.input, color: theme.text, transition: 'background 0.3s, color 0.3s' }}>
              <option value="newsapi">NewsAPI</option>
              <option value="serper">Serper</option>
              <option value="google">Google Custom Search</option>
            </select>
            <button type="submit" style={{ padding: '15px 32px', fontSize: 18, borderRadius: 14, background: theme.button, color: theme.buttonText, border: 'none', fontWeight: 800, boxShadow: '0 2px 12px #ee097955', transition: 'background 0.3s' }} disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
        <div style={{
          background: theme.result,
          padding: 26,
          minHeight: 180,
          maxHeight: 260,
          borderRadius: 14,
          color: theme.text,
          fontSize: 18,
          width: '100%',
          transition: 'background 0.3s, color 0.3s',
          boxShadow: '0 2px 12px #ee097955',
          overflowY: 'auto',
          overflowX: 'auto',
          wordBreak: 'break-word',
        }}>
          {loading ? '' : (
            Array.isArray(result) && result.length > 0 ? (
              result.map((item, idx) => (
                <div key={idx} style={{marginBottom: 18}}>
                  <strong>{item.title}</strong>
                  <div><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></div>
                  <div>{item.summary}</div>
                  <hr />
                </div>
              ))
            ) : (
              <div style={{color: theme.text, fontSize: 18}}>
                No results found.
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
