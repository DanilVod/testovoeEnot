import { createContext, useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import { getComments } from './api/endpoints';
import { Header, TaskControls, TodoTable } from './components';

const data = [
  {
    [new Date().getDate()]: [
      { title: 'f', subtitle: 'fff' },
      { title: 'f', subtitle: 'fff' },
    ],
  },
  {
    [new Date().getDate() + 1]: [
      { title: 'f12', subtitle: 'fff' },
      { title: 'f', subtitle: 'fff' },
    ],
  },
];

export const DataContext = createContext({
  hideMarquee: false,
  setHideMarquee: () => {},
  hideToday: false,
  toggleHideToday: () => {},
});

function App() {
  const isToday = (day: number) => new Date().getDate() === day;
  const [comments, setComments] = useState('');
  const [hideToday, setHideToday] = useState(false);
  const [hideMarquee, setHideMarquee] = useState(false);

  useEffect(() => {
    getComments.then((res) => setComments(res.data[0].body));
  }, []);

  return (
    <DataContext.Provider
      value={{
        hideMarquee,
        setHideMarquee: () => setHideMarquee((prev) => !prev),
        hideToday,
        toggleHideToday: () => setHideToday((prev) => !prev),
      }}>
      <div className="App">
        <Container sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              background: '#222222',
              height: '80vh',
              width: '40vw',
              borderRadius: '20px',
              padding: '10px 10px',
            }}>
            <Header>To Do</Header>
            <TaskControls />
            {data.map((todosData) => {
              const [[day, data]] = Object.entries(todosData);
              if (hideToday && isToday(+day)) return;
              return <TodoTable key={day} todos={data} />;
            })}
            {hideMarquee && (
              <marquee direction="right" scrollamount="10">
                {comments ? comments : 'Loading'}
              </marquee>
            )}
          </div>
        </Container>
      </div>
    </DataContext.Provider>
  );
}

export default App;
