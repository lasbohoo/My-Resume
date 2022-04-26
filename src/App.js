import './App.css';
import Education from './component/Education/Education';
import Details from './component/personalD/Details.js';
import PersonalSummary from './component/Profile/PersonalSummary';
import ProExp from './component/ProfressionalExp/ProExp';
import Skill from './component/Skills/Skill';
import Ref from './component/Ref/Ref';
import './component/detail.css';

function App() {
  return (
    <div>
      <Details />
      <PersonalSummary />
      <Education />
      <ProExp />
      <Skill />
      <Ref />
    </div>
  );
}

export default App;
