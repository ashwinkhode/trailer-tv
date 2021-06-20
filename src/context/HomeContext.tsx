import { useContext, createContext, useReducer } from 'react';
import { trendingData, VideoMetadata } from '../utils/thumbnailData';

type HomeContextType = VideoMetadata & {
  bg?: string;
};

const INITIAL_STATE: HomeContextType = {
  id: trendingData[0].id,
  title: trendingData[0].title,
  channel: trendingData[0].channel,
  description: 'Delete this part',
  bg: 'bg-nobody',
};

const HomeStateContext = createContext(INITIAL_STATE);
const HomeDispatchContext = createContext<React.Dispatch<any> | null>(null);

const homeReducer = (state: HomeContextType, action: any) => {
  switch (action.payload.id) {
    case trendingData[1].id:
      return {
        id: trendingData[1].id,
        title: trendingData[1].title,
        channel: trendingData[1].channel,
        description: 'Delete this part',
        bg: 'bg-coming2america',
      };
    case trendingData[2].id:
      return {
        id: trendingData[2].id,
        title: trendingData[2].title,
        channel: trendingData[2].channel,
        description: 'Delete this part',
        bg: 'bg-loki',
      };
    case trendingData[3].id:
      return {
        id: trendingData[3].id,
        title: trendingData[3].title,
        channel: trendingData[3].channel,
        description: 'Delete this part',
        bg: 'bg-falcon',
      };
    case trendingData[4].id:
      return {
        id: trendingData[4].id,
        title: trendingData[4].title,
        channel: trendingData[4].channel,
        description: 'Delete this part',
        bg: 'bg-jack',
      };
    default:
      return INITIAL_STATE;
  }
};

const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [homeState, dispatchToHome] = useReducer(homeReducer, INITIAL_STATE);
  return (
    <HomeStateContext.Provider value={homeState}>
      <HomeDispatchContext.Provider value={dispatchToHome}>
        {children}
      </HomeDispatchContext.Provider>
    </HomeStateContext.Provider>
  );
};

const useHome = () => {
  const homeState = useContext(HomeStateContext);
  if (typeof homeState === 'undefined') {
    throw new Error('useHome must be used within a HomeProvider');
  }
  return homeState;
};

const useHomeDispatch = () => {
  const homeDispatch = useContext(HomeDispatchContext);
  if (typeof homeDispatch === 'undefined') {
    throw new Error('useHomeDispatch must be used within a HomeProvider');
  }
  return homeDispatch;
};

export { HomeContextProvider, useHome, useHomeDispatch };
