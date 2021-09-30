import { Switch } from '@material-ui/core';
import { useMyTheme } from '../../hooks/useMyTheme.hook';

export const ThemeSwitcher = () => {
  const { isDefaultTheme, toggleTheme } = useMyTheme();

  return <Switch checked={!isDefaultTheme} onChange={toggleTheme} />;
};
