import { cvData } from './data/cv';
import { CvSection } from './components/CvSection';
import { Header } from './components/Header';
import { ExperienceList } from './components/ExperienceList';
import { EducationList } from './components/EducationList';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { ActivityList } from './components/ActivityList';
import './App.css';

function App() {
  const {
    name,
    headline,
    summary,
    contact,
    experience,
    education,
    skills,
    languages,
    otherActivities,
  } = cvData;

  return (
    <div className="cv-page">
      <Header
        name={name}
        headline={headline}
        summary={summary}
        contact={contact}
      />
      <main>
        <CvSection id="experience" title="Zkušenosti" prominent>
          <ExperienceList employers={experience} />
        </CvSection>
        <CvSection id="education" title="Vzdělání" prominent>
          <EducationList items={education} />
        </CvSection>
        <CvSection id="skills" title="Dovednosti" prominent>
          <Skills groups={skills} />
        </CvSection>
        <CvSection id="languages" title="Jazyky" prominent>
          <Languages items={languages} />
        </CvSection>
        {otherActivities && otherActivities.length > 0 && (
          <CvSection id="activities" title="Přednášky a další aktivity" prominent>
            <ActivityList items={otherActivities} />
          </CvSection>
        )}
      </main>
    </div>
  );
}

export default App;
