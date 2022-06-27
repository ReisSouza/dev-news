import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type StateContextType = {
  activeDrawer: boolean;
  setActiveDrawer: Dispatch<SetStateAction<boolean>>;

  linkNavbarActive: number;
  setLinkNavbarActive: React.Dispatch<React.SetStateAction<number>>;
};

type StateContextProviderProps = {
  children: ReactNode;
};

export const StateContext = createContext({} as StateContextType);

export function StateContextProvider(props: StateContextProviderProps) {
  const [linkNavbarActive, setLinkNavbarActive] = useState<number>(1);
  const [activeDrawer, setActiveDrawer] = useState<boolean>(false);
  const { children } = props;

  return (
    <StateContext.Provider value={{ linkNavbarActive, setLinkNavbarActive, activeDrawer, setActiveDrawer }}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  const context = useContext(StateContext);
  return context;
}
