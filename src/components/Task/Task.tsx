import { Box, Typography } from '@mui/material';
import { FC, useMemo, useState } from 'react';
import { Switch } from '../Switch';
import randomColor from 'randomcolor';

export interface taskProps {
  title: string;
  subtitle: string;
}

export const Task: FC<taskProps> = ({ title, subtitle }) => {
  const [isDone, setIsDone] = useState(false);

  const handleSwitch = () => {
    setIsDone((prev) => !prev);
  };

  const color = useMemo(() => randomColor(), []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        padding: '10px 0px',
      }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: '4px',
            height: '35px',
            background: color,
            borderRadius: '5px',
            marginRight: '10px',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ textDecoration: isDone ? 'line-through' : 'none' }}>{title}</Typography>
          <Typography variant="caption" color="#A9A9A9">
            {subtitle}
          </Typography>
        </div>
      </div>
      <Switch onClick={handleSwitch}></Switch>
    </div>
  );
};
