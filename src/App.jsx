// JSX = JAVASCRIPT + XML
import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post 
            author="Diego fernandes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae molestiae enim necessitatibus officia. Saepe, debitis. Odio esse neque reiciendis obcaecati quisquam. Ipsa itaque deserunt, dolorem quas delectus neque eius." 
          />
          <Post 
            author="Gustavo Bocci Pimentel"
            content="Um novo texto muito legal"
          />
        </main>
      </div>
    </div>
  )
}