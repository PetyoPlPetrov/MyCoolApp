import { Card, CardProps, Layout } from 'libs/components';
import styles from './index.module.scss';

const people = [
  {
    name: 'Cameron Wilson',
    email: 'c@company.emil',
    dateOfBirth: '5/6/1992',
    address: '4140 parker Avenu, New York',
    phone: '(889)-906-1960',
    password: 'MyPass',
    imageProps: {
      imageUrl: '/person.jpeg',
      alt: 'some employee',
    },
  },
  {
    name: 'Cameron Wilson2',
    email: 'c@company.emil',
    dateOfBirth: '5/6/1992',
    address: '4140 parker Avenu, New York',
    phone: '(889)-906-1960',
    password: 'MyPass',
    imageProps: {
      imageUrl: '/person.jpeg',
      alt: 'some employee',
    },
  },
  {
    name: 'Cameron Wilson3',
    email: 'c@company.emil',
    dateOfBirth: '5/6/1992',
    address: '4140 parker Avenu, New York',
    phone: '(889)-906-1960',
    password: 'MyPass',
    imageProps: {
      imageUrl: '/person.jpeg',
      alt: 'some employee',
    },
  },
] as CardProps[];

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <Layout>
          {people.map((person) => (
            <Card key={person.name} {...person} />
          ))}
        </Layout>
      </div>
    </div>
  );
}

export default Index;
