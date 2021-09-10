import { useContext, createContext, useReducer } from 'react';
import { trendingData, VideoMetadata } from '../utils/thumbnailData';

type HomeContextType = VideoMetadata & {
  bg?: string;
};

const INITIAL_STATE: HomeContextType = {
  videoId: trendingData[0].videoId,
  title: trendingData[0].title,
  channel: trendingData[0].channel,
  bg: 'bg-nobody',
};

const HomeStateContext = createContext(INITIAL_STATE);
const HomeDispatchContext = createContext<React.Dispatch<any> | null>(null);

const homeReducer = (state: HomeContextType, action: any) => {
  switch (action.payload.videoId) {
    case trendingData[1].videoId:
      return {
        videoId: trendingData[1].videoId,
        title: trendingData[1].title,
        channel: trendingData[1].channel,
        bg: 'bg-coming2america',
      };
    case trendingData[2].videoId:
      return {
        videoId: trendingData[2].videoId,
        title: trendingData[2].title,
        channel: trendingData[2].channel,
        bg: 'bg-loki',
      };
    case trendingData[3].videoId:
      return {
        videoId: trendingData[3].videoId,
        title: trendingData[3].title,
        channel: trendingData[3].channel,
        bg: 'bg-falcon',
      };
    case trendingData[4].videoId:
      return {
        videoId: trendingData[4].videoId,
        title: trendingData[4].title,
        channel: trendingData[4].channel,
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
