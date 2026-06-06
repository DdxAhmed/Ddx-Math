import { useLocalStorage } from "./useLocalStorage";

export interface WatchProgress {
  [lessonId: string]: number; // seconds watched
}

export function useProgress() {
  const [completedLessonsArr, setCompletedLessonsArr] = useLocalStorage<string[]>("mv_completed_lessons", []);
  const [favoriteLessonsArr, setFavoriteLessonsArr] = useLocalStorage<string[]>("mv_favorite_lessons", []);
  const [watchProgress, setWatchProgress] = useLocalStorage<WatchProgress>("mv_watch_progress", {});
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage<string[]>("mv_recently_viewed", []);
  const [downloadHistory, setDownloadHistory] = useLocalStorage<string[]>("mv_download_history", []);

  // Sets for easier O(1) checks
  const completedLessons = new Set(completedLessonsArr);
  const favoriteLessons = new Set(favoriteLessonsArr);

  const toggleComplete = (lessonId: string) => {
    if (completedLessons.has(lessonId)) {
      setCompletedLessonsArr(completedLessonsArr.filter(id => id !== lessonId));
    } else {
      setCompletedLessonsArr([...completedLessonsArr, lessonId]);
    }
  };

  const toggleFavorite = (lessonId: string) => {
    if (favoriteLessons.has(lessonId)) {
      setFavoriteLessonsArr(favoriteLessonsArr.filter(id => id !== lessonId));
    } else {
      setFavoriteLessonsArr([...favoriteLessonsArr, lessonId]);
    }
  };

  const updateWatchProgress = (lessonId: string, seconds: number) => {
    setWatchProgress(prev => ({ ...prev, [lessonId]: seconds }));
  };

  const addRecentlyViewed = (lessonId: string) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(id => id !== lessonId);
      return [lessonId, ...filtered].slice(0, 10);
    });
  };

  const addDownload = (resourceId: string) => {
    if (!downloadHistory.includes(resourceId)) {
      setDownloadHistory(prev => [resourceId, ...prev]);
    }
  };

  return {
    completedLessons,
    favoriteLessons,
    watchProgress,
    recentlyViewed,
    downloadHistory,
    toggleComplete,
    toggleFavorite,
    updateWatchProgress,
    addRecentlyViewed,
    addDownload
  };
}