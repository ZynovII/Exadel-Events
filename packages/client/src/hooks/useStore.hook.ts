import { useContext } from 'react';
import { Context } from '../storage/context/context';

export const useStore = () => useContext(Context);
