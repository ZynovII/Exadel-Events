import { useContext } from 'react';
import { Context } from '../context/context';

export const useStore = () => useContext(Context);
