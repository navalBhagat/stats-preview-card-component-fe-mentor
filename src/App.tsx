import "./App.css";

function App() {
  return (
    <main className="content">
      <div className="card">
        <div className="card-content">
          <h2 className="header">
            Get <span className="highlight">insights</span> that help your
            business grow.
          </h2>
          <p className="description">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="stats">
            <div className="stat-n">
              <span className="bold">10k+</span>
              <span className="all-caps">COMPANIES</span>
            </div>
            <div className="stat-n">
              <span className="bold">314</span>
              <span className="all-caps">TEMPLATES</span>
            </div>
            <div className="stat-n">
              <span className="bold">12M+</span>
              <span className="all-caps">QUERIES</span>
            </div>
          </div>
        </div>
        <div className="card-image">
          <div className="image" />
          <div className="overlay" />
        </div>
      </div>
    </main>
  );
}

export default App;
