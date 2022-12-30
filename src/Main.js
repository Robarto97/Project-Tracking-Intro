import devices from "./images/illustration-devices.svg";
const Main = () => {
  return (
    <main>
      <div className="img-wrapper">
        <img src={devices} alt="" />
      </div>
      <section>
        <div className="row">
          <span>New</span>
          <p>Monograph Dashboard</p>
        </div>
        <h1>Powerful Insights Into Your Team</h1>
        <p>Project planning and time tracking for agile teams</p>
        <div className="btn-row">
          <button>Schedule a demo</button>
          <span>To see a preview</span>
        </div>
      </section>
    </main>
  );
};

export default Main;
