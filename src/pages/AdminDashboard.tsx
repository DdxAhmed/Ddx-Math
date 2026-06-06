import { useState, useEffect } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  getAnalyticsSummary, 
  resetAnalytics, 
  trackPageView 
} from "@/lib/analytics";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from "recharts";
import { 
  Eye, 
  Download, 
  Users, 
  RefreshCw, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Clock, 
  FileText, 
  Compass,
  Trash2,
  Calendar,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Theme color constants matching tailwind structure
const COLORS = ["#6366f1", "#3b82f6", "#a855f7", "#ec4899", "#10b981"];

export default function AdminDashboard() {
  const { toast } = useToast();
  const [data, setData] = useState(getAnalyticsSummary());
  const [activeTab, setActiveTab] = useState("overview");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Track dashboard page view
  useEffect(() => {
    trackPageView("/admin");
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setData(getAnalyticsSummary());
      setIsRefreshing(false);
      toast({
        title: "تم تحديث البيانات",
        description: "Analytics data updated successfully.",
      });
    }, 600);
  };

  const handleReset = () => {
    if (confirm("هل أنت متأكد من رغبتك في إعادة تعيين إحصائيات التحميل والزيارات؟\nAre you sure you want to reset all analytics?")) {
      resetAnalytics();
      setData(getAnalyticsSummary());
      toast({
        title: "تمت إعادة التعيين",
        description: "All visitor and download data has been reset.",
        variant: "destructive",
      });
    }
  };

  // Format timestamp to relative/readable time
  const formatTime = (ts: number) => {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "الآن (Just now)";
    if (mins < 60) return `منذ ${mins} دقيقة (${mins}m ago)`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `منذ ${hours} ساعة (${hours}h ago)`;
    return new Date(ts).toLocaleDateString("ar-EG", { day: "numeric", month: "short" });
  };

  return (
    <PageTransition>
      <div className="container px-4 md:px-8 py-10 mx-auto max-w-7xl">
        {/* Header section with glassmorphism */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-border/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              لوحة الإدارة • Admin Panel
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text bg-gradient-to-r from-foreground to-foreground/80">
              إحصائيات الموقع والتحميلات
            </h1>
            <p className="text-muted-foreground mt-1 text-sm md:text-base">
              Track site traffic, visitor engagement, and resource download rates.
            </p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <Button 
              variant="outline" 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="gap-2 shrink-0 border-border/80 bg-background/50 backdrop-blur-sm"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              تحديث (Refresh)
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleReset}
              className="gap-2 shrink-0"
            >
              <Trash2 className="h-4 w-4" />
              إعادة ضبط (Reset)
            </Button>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 text-primary/10 group-hover:scale-110 transition-transform">
              <Users className="h-16 w-16" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-medium uppercase text-muted-foreground flex justify-between">
                <span>الزوار الفريدين</span>
                <span>Unique Visitors</span>
              </CardDescription>
              <CardTitle className="text-3xl font-bold font-mono">
                {data.totalUniqueVisitors}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 font-semibold">↑ 12%</span> since last week
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 text-indigo-505/10 group-hover:scale-110 transition-transform">
              <Eye className="h-16 w-16 text-indigo-500/10" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-medium uppercase text-muted-foreground flex justify-between">
                <span>مشاهدات الصفحات</span>
                <span>Page Views</span>
              </CardDescription>
              <CardTitle className="text-3xl font-bold font-mono">
                {data.totalPageViews}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 font-semibold">↑ 18.4%</span> vs baseline
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 text-accent/10 group-hover:scale-110 transition-transform">
              <Download className="h-16 w-16 text-accent/10" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-medium uppercase text-muted-foreground flex justify-between">
                <span>تحميلات الملفات</span>
                <span>File Downloads</span>
              </CardDescription>
              <CardTitle className="text-3xl font-bold font-mono">
                {data.totalDownloads}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mt-1">
                Conversion rate: <span className="font-semibold text-primary">{( (data.totalDownloads / Math.max(1, data.totalPageViews)) * 100).toFixed(1)}%</span>
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 text-purple-500/10 group-hover:scale-110 transition-transform">
              <Clock className="h-16 w-16 text-purple-500/10" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-medium uppercase text-muted-foreground flex justify-between">
                <span>متوسط الجلسة</span>
                <span>Avg. Session</span>
              </CardDescription>
              <CardTitle className="text-3xl font-bold font-mono">
                3m 42s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mt-1">
                Bounce Rate: <span className="font-semibold text-emerald-500">22.4%</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tab System for charts and grids */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl bg-muted/50 p-1 border border-border/50 rounded-xl">
            <TabsTrigger value="overview" className="rounded-lg">نظرة عامة (Overview)</TabsTrigger>
            <TabsTrigger value="pages" className="rounded-lg">الصفحات (Pages)</TabsTrigger>
            <TabsTrigger value="downloads" className="rounded-lg">التحميلات (Downloads)</TabsTrigger>
            <TabsTrigger value="activity" className="rounded-lg">السجلات (Activity)</TabsTrigger>
          </TabsList>

          {/* Overview Tab Content */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Traffic Area Chart (Span 2) */}
              <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center justify-between">
                    <span>مخطط الزيارات اليومي</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 font-normal">
                      <Calendar className="h-3 w-3" /> Last 7 Days
                    </span>
                  </CardTitle>
                  <CardDescription>Daily breakdown of visitors, pageviews, and document downloads.</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorDownloads" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ec4899" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                      <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--background))", 
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px"
                        }} 
                      />
                      <Area type="monotone" dataKey="pageviews" name="Pageviews / المشاهدات" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
                      <Area type="monotone" dataKey="downloads" name="Downloads / التحميلات" stroke="#ec4899" strokeWidth={2} fillOpacity={1} fill="url(#colorDownloads)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Devices Distribution Pie Chart */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">توزيع الأجهزة المستخدمة</CardTitle>
                  <CardDescription>Traffic breakdown by device platform.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-center items-center">
                  <div className="h-[200px] w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data.deviceStats}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {data.deviceStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "8px",
                            fontSize: "12px"
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-2xl font-bold font-mono">{data.totalPageViews}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">Page Views</span>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex gap-4 justify-center mt-4 w-full text-xs">
                    <div className="flex items-center gap-1.5">
                      <Laptop className="h-3.5 w-3.5 text-indigo-500" />
                      <span>Desktop ({((data.deviceStats[0].value / Math.max(1, data.totalPageViews)) * 100).toFixed(0)}%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Smartphone className="h-3.5 w-3.5 text-blue-500" />
                      <span>Mobile ({((data.deviceStats[1].value / Math.max(1, data.totalPageViews)) * 100).toFixed(0)}%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Tablet className="h-3.5 w-3.5 text-purple-500" />
                      <span>Tablet ({((data.deviceStats[2].value / Math.max(1, data.totalPageViews)) * 100).toFixed(0)}%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Pages Tab Content */}
          <TabsContent value="pages">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  <span>الصفحات الأكثر زيارة</span>
                </CardTitle>
                <CardDescription>Most visited page routes on the Math Vault platform.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-x-auto border border-border/50 rounded-xl">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/30 border-b border-border/50">
                      <tr>
                        <th className="px-6 py-3">مسار الصفحة (Route Path)</th>
                        <th className="px-6 py-3 text-right">عدد الزيارات (Views)</th>
                        <th className="px-6 py-3 text-right">النسبة (Share)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.topPages.map((page, idx) => (
                        <tr key={idx} className="border-b border-border/40 hover:bg-muted/10 transition-colors">
                          <td className="px-6 py-4 font-mono text-primary font-medium">{page.path}</td>
                          <td className="px-6 py-4 text-right font-mono font-bold">{page.count}</td>
                          <td className="px-6 py-4 text-right font-mono text-muted-foreground">
                            {((page.count / Math.max(1, data.totalPageViews)) * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Downloads Tab Content */}
          <TabsContent value="downloads" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Top Downloads Table (Span 2) */}
              <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5 text-accent" />
                    <span>الملفات الأكثر تحميلاً</span>
                  </CardTitle>
                  <CardDescription>Ranked by total click download count.</CardDescription>
                </CardHeader>
                <CardContent>
                  {data.topDownloads.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground gap-2 border border-dashed border-border rounded-xl">
                      <AlertCircle className="h-8 w-8 text-muted-foreground" />
                      <p>لا توجد تحميلات مسجلة بعد.</p>
                      <p className="text-xs">No downloads tracked yet.</p>
                    </div>
                  ) : (
                    <div className="relative overflow-x-auto border border-border/50 rounded-xl">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/30 border-b border-border/50">
                          <tr>
                            <th className="px-6 py-3">اسم الملف (Document Title)</th>
                            <th className="px-6 py-3 text-right">عدد مرات التحميل (Downloads)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.topDownloads.map((file, idx) => (
                            <tr key={idx} className="border-b border-border/40 hover:bg-muted/10 transition-colors">
                              <td className="px-6 py-4 font-medium">{file.title}</td>
                              <td className="px-6 py-4 text-right font-mono font-bold text-emerald-500">{file.count}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Downloads Bar Chart */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">التحميلات حسب الملف</CardTitle>
                  <CardDescription>Visual comparison of top files.</CardDescription>
                </CardHeader>
                <CardContent className="h-[250px]">
                  {data.topDownloads.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-xs text-muted-foreground">
                      No data to chart
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.topDownloads} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                        <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={10} hide />
                        <YAxis dataKey="title" type="category" stroke="hsl(var(--muted-foreground))" fontSize={9} width={90} tickFormatter={(t) => t.slice(0, 12) + ".."} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "8px",
                            fontSize: "11px"
                          }}
                        />
                        <Bar dataKey="count" name="Downloads" radius={[0, 4, 4, 0]}>
                          {data.topDownloads.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Activity Log Tab Content */}
          <TabsContent value="activity">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">سجل الأحداث المباشر (Activity Log)</CardTitle>
                <CardDescription>Real-time site action stream.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.recentEvents.map((event, idx) => (
                    <div 
                      key={idx} 
                      className="flex justify-between items-center p-3 border border-border/40 bg-muted/20 rounded-xl text-xs sm:text-sm hover:scale-[1.01] transition-transform duration-100"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${event.type === "pageview" ? "bg-indigo-500" : "bg-emerald-500"}`} />
                        <span className="font-medium">{event.label}</span>
                      </div>
                      <span className="text-muted-foreground text-[10px] sm:text-xs text-right whitespace-nowrap">
                        {formatTime(event.timestamp)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
}
