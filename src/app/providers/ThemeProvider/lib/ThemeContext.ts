import { createContext } from 'react';

import {Theme} from "~/shared/const/theme";

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.DEFAULT,
    setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
