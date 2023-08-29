import { Layout,Card, CardProps } from 'libs/components';
import styles from './index.module.scss';
const people = [
  {
    name: "Cameron Wilson" ,
    email: "c@company.emil",
    dateOfBirth: "5/6/1992",
    address: "4140 parker Avenu, New York",
    phone: "(889)-906-1960",
    password: "MyPass"
  }
] as CardProps[]

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome app 👋
              <Layout>
                  {people.map(p=><Card {...p}/>)}
              </Layout>
            </h1>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Index;
