import { Checkbox, Typography } from '@mui/material';

import { DataContext } from '../../App';

export const TaskControls = () => {
  return (
    <DataContext.Consumer>
      {({ hideToday, toggleHideToday }) => (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <Checkbox
            checked={hideToday}
            onClick={toggleHideToday}
            sx={{
              color: '#F4F4F4',
              '&.Mui-checked': {
                color: '#F4F4F4',
              },
            }}
          />
          <Typography>Today Tasks:</Typography>
        </div>
      )}
    </DataContext.Consumer>
  );
};
