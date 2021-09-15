import { FC } from 'react';
import { Card, CardLayout, CardText } from '../Styles/Card';

const Profile: FC = () => {
  return (
    <CardLayout>
      <Card>
        <h2>Introduction</h2>
        <CardText>
          Hello! I&apos;m Peter, an aspiring full-stack developer with
          experience in QA, DevOps, and back-end technologies. My hope for this
          website is to gain a stronger understanding of UI development with the
          React library, especially with Hooks and TypeScript.
        </CardText>
      </Card>
      <Card>
        <h2>Work</h2>
        <CardText>
          I am a software engineer in Promess, a manufacturing company
          specializing in sensing systems. For a few years, I developed
          full-stack features in the .NET framework. I am also heavily involved
          in the DevOps operations, using Microsoft Azure and CI/CD pipelines.
        </CardText>
      </Card>
      <Card>
        <h2>Education</h2>
        <CardText>
          I am pursuing a Master of Science in Computer Science at Oakland
          University. I graduated with a Bachelor of Science in Microbiology
          from the University of Michigan.
        </CardText>
      </Card>
      <Card>
        <h2>Research</h2>
        <CardText>
          I am working on analyzing{' '}
          <a
            href="https://en.wikipedia.org/wiki/Dependency_injection"
            target="_blank"
            rel="noreferrer"
          >
            Dependency Injection
          </a>{' '}
          (DI), a framework that may help in developing more maintainable
          software. More specifically, I am currently expanding on the CKJM
          metrics tool to detect the presence of DI in Java projects.
        </CardText>
      </Card>
      <Card>
        <h2>Passions</h2>
        <CardText>
          I enjoy writing. I love writing prose and poetry, and hope to publish
          a novel one day. I also like playing guitar and piano. I am trying to
          learn a new piano song and would appreciate any suggestions! My
          musical interests primarily comprise of classical, Christian, and
          Japanese pop.
        </CardText>
      </Card>
      <Card>
        <h2>Current Tech Stack</h2>
        <CardText>
          I am working and researching with Rust, React, GraphQL, Node.js, and
          Java. Languages I hope to tackle soon include Go and Python, and I
          want to try Vue.js in the future as well.
        </CardText>
      </Card>
    </CardLayout>
  );
};

export default Profile;
