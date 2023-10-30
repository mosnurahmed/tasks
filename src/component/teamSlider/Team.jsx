import TeamSlider from "./TeamSlider";
import "./TeamSlider.css";

export default function Team() {
  return (
    <>
      <div className="contentTeam">
        <h1>Meet Our Talented Team</h1>
        <p>We are already a Family of 20+ Talented Individuals & Growing.</p>
        <div className="slideContainer">
          <TeamSlider/>
        </div>
      </div>
    </>
  );
}
