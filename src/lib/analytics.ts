export interface PageViewEvent {
  path: string;
  timestamp: number;
}

export interface DownloadEvent {
  resourceId: string;
  title: string;
  timestamp: number;
}

export interface DailyStat {
  date: string;
  visitors: number;
  pageviews: number;
  downloads: number;
}

export interface DeviceStat {
  name: string;
  value: number;
}

export interface SubjectStat {
  subject: string;
  downloads: number;
}

export interface AnalyticsData {
  visitorId: string;
  uniqueVisitors: string[]; // List of visitor IDs
  pageViews: PageViewEvent[];
  downloads: DownloadEvent[];
  dailyStats: DailyStat[];
}

const STORAGE_KEY = "math_vault_analytics_v1";

// Helper to format date
const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

// Seed realistic mock data for the last 7 days
const generateMockData = (): AnalyticsData => {
  const visitorId = "visitor_" + Math.random().toString(36).substring(2, 9);
  const uniqueVisitors: string[] = [];
  
  // Create 120 unique visitors
  for (let i = 0; i < 120; i++) {
    uniqueVisitors.push("visitor_" + Math.random().toString(36).substring(2, 9));
  }
  
  // Add current user
  uniqueVisitors.push(visitorId);

  const dailyStats: DailyStat[] = [];
  const baseDate = new Date();
  
  // Generate stats for past 7 days
  for (let i = 6; i >= 0; i--) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() - i);
    
    // Varying traffic on weekends vs weekdays
    const isWeekend = d.getDay() === 5 || d.getDay() === 6; // Fri, Sat (standard weekend in some Middle East regions) or Sat/Sun
    const multiplier = isWeekend ? 0.6 : 1.2;
    
    const visitors = Math.floor((40 + Math.random() * 50) * multiplier);
    const pageviews = Math.floor(visitors * (2 + Math.random() * 2));
    const downloads = Math.floor(pageviews * (0.1 + Math.random() * 0.15));

    dailyStats.push({
      date: formatDate(d),
      visitors,
      pageviews,
      downloads
    });
  }

  // Prepopulate some page views
  const pageViews: PageViewEvent[] = [];
  const paths = ["/", "/lessons", "/resources", "/search", "/lessons/les-01", "/lessons/les-02"];
  const now = Date.now();
  
  for (let i = 0; i < 350; i++) {
    const timeOffset = Math.floor(Math.random() * 6 * 24 * 60 * 60 * 1000); // within last 6 days
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    pageViews.push({
      path: randomPath,
      timestamp: now - timeOffset
    });
  }

  // Prepopulate some downloads
  const downloads: DownloadEvent[] = [];
  const mockFiles = [
    { id: "res-m2-01", title: "Math 2 L1 Lecture Notes" },
    { id: "res-m2-02", title: "Math 2 L2 Practice Sheet" },
    { id: "res-m2-03", title: "Math 2 Formula Reference Sheet" },
    { id: "res-pf-01", title: "Partial Fractions Revision" },
    { id: "res-de-01", title: "Differential Equations Sheet" }
  ];

  for (let i = 0; i < 75; i++) {
    const timeOffset = Math.floor(Math.random() * 6 * 24 * 60 * 60 * 1000);
    const randomFile = mockFiles[Math.floor(Math.random() * mockFiles.length)];
    downloads.push({
      resourceId: randomFile.id,
      title: randomFile.title,
      timestamp: now - timeOffset
    });
  }

  return {
    visitorId,
    uniqueVisitors,
    pageViews,
    downloads,
    dailyStats
  };
};

export const getAnalyticsData = (): AnalyticsData => {
  if (typeof window === "undefined") {
    return { visitorId: "", uniqueVisitors: [], pageViews: [], downloads: [], dailyStats: [] };
  }
  
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const mock = generateMockData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mock));
    return mock;
  }
  
  try {
    return JSON.parse(raw);
  } catch (e) {
    const mock = generateMockData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mock));
    return mock;
  }
};

const saveAnalyticsData = (data: AnalyticsData) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};

export const trackPageView = (path: string) => {
  const data = getAnalyticsData();
  const now = new Date();
  
  // Track page view
  data.pageViews.push({
    path,
    timestamp: now.getTime()
  });

  // Check unique visitor
  if (!data.uniqueVisitors.includes(data.visitorId)) {
    data.uniqueVisitors.push(data.visitorId);
  }

  // Update today's daily stats
  const todayStr = formatDate(now);
  const todayStatIndex = data.dailyStats.findIndex(s => s.date === todayStr);

  if (todayStatIndex >= 0) {
    data.dailyStats[todayStatIndex].pageviews += 1;
    // Add unique visitor count to today if new session/visitor
    // (Simulating visitor activity increase on pageview)
    if (Math.random() > 0.7) {
      data.dailyStats[todayStatIndex].visitors += 1;
    }
  } else {
    // New day
    // Keep last 7 days, remove oldest
    if (data.dailyStats.length >= 7) {
      data.dailyStats.shift();
    }
    data.dailyStats.push({
      date: todayStr,
      visitors: 1,
      pageviews: 1,
      downloads: 0
    });
  }

  saveAnalyticsData(data);
};

export const trackDownload = (resourceId: string, title: string) => {
  const data = getAnalyticsData();
  const now = new Date();

  data.downloads.push({
    resourceId,
    title,
    timestamp: now.getTime()
  });

  // Update today's daily stats
  const todayStr = formatDate(now);
  const todayStatIndex = data.dailyStats.findIndex(s => s.date === todayStr);

  if (todayStatIndex >= 0) {
    data.dailyStats[todayStatIndex].downloads += 1;
  } else {
    if (data.dailyStats.length >= 7) {
      data.dailyStats.shift();
    }
    data.dailyStats.push({
      date: todayStr,
      visitors: 1,
      pageviews: 1,
      downloads: 1
    });
  }

  saveAnalyticsData(data);
};

export const resetAnalytics = () => {
  const mock = generateMockData();
  saveAnalyticsData(mock);
  return mock;
};

// Summary metrics helper
export const getAnalyticsSummary = () => {
  const data = getAnalyticsData();
  
  const totalPageViews = data.pageViews.length;
  const totalDownloads = data.downloads.length;
  const totalUniqueVisitors = data.uniqueVisitors.length;

  // Calculate top pages
  const pageCounts: Record<string, number> = {};
  data.pageViews.forEach(v => {
    pageCounts[v.path] = (pageCounts[v.path] || 0) + 1;
  });

  const topPages = Object.entries(pageCounts)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Calculate top downloads
  const downloadCounts: Record<string, { title: string; count: number }> = {};
  data.downloads.forEach(d => {
    if (!downloadCounts[d.resourceId]) {
      downloadCounts[d.resourceId] = { title: d.title, count: 0 };
    }
    downloadCounts[d.resourceId].count += 1;
  });

  const topDownloads = Object.entries(downloadCounts)
    .map(([id, item]) => ({ id, title: item.title, count: item.count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Device stats (mock static distribution)
  const deviceStats: DeviceStat[] = [
    { name: "Desktop", value: Math.floor(totalPageViews * 0.55) },
    { name: "Mobile", value: Math.floor(totalPageViews * 0.38) },
    { name: "Tablet", value: Math.floor(totalPageViews * 0.07) },
  ];

  // Daily stats dataset
  const chartData = data.dailyStats;

  return {
    totalPageViews,
    totalDownloads,
    totalUniqueVisitors,
    topPages,
    topDownloads,
    deviceStats,
    chartData,
    recentEvents: [
      ...data.pageViews.slice(-10).map(v => ({
        type: "pageview" as const,
        label: `Visited page ${v.path}`,
        timestamp: v.timestamp
      })),
      ...data.downloads.slice(-10).map(d => ({
        type: "download" as const,
        label: `Downloaded resource "${d.title}"`,
        timestamp: d.timestamp
      }))
    ].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10)
  };
};
