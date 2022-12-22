import { Box, Popper, Typography } from '@mui/material';
import { FC, ReactNode, useRef, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

import './header.css';
import { DataContext } from '../../App';
import { Switch } from '../Switch';

interface headerProps {
  children: ReactNode;
}

export const Header: FC<headerProps> = ({ children }) => {
  const settingIcon = useRef(null);
  const [openPopper, setOpenPopper] = useState(false);
  return (
    <DataContext.Consumer>
      {({ setHideMarquee }) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '8px',
          }}>
          <Typography variant="h3" fontWeight="500">
            {children}
          </Typography>
          <SettingsIcon
            ref={settingIcon}
            onClick={() => setOpenPopper((prev) => !prev)}
            className="settingsIcon"
            fontSize="large"
          />
          <Popper open={openPopper} anchorEl={settingIcon.current}>
            <Box sx={{ border: 1, p: 1, bgcolor: '#333333' }}>
              <Typography>Показывать бегущую строку?</Typography>
              <Switch onClick={setHideMarquee} />
            </Box>
          </Popper>
        </div>
      )}
    </DataContext.Consumer>
  );
};
