import React, { useState, useEffect } from 'react';
import { Footer } from './Footer'
import { Cloud, Wind, Droplets, Sun, AlertTriangle, TrendingUp, Calendar, Clock } from 'lucide-react';


export function WeatherNews() {
  const [news, setNews] = useState([]);
  const [newsData, setNewsdata] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  console.log('original data', newsData)


  const weatherNews = newsData.map((item, i) => {
    let category = "other";

    const title = item?.title?.toLowerCase() || "";
    const desc = item?.description?.toLowerCase() || "";

    if (title.includes("storm") || desc.includes("storm")) category = "storm";
    else if (title.includes("rain") || desc.includes("rain")) category = "rain";
    else if (title.includes("heat") || desc.includes("heat")) category = "heat";
    else if (title.includes("cold") || desc.includes("snow")) category = "cold";
    else if (title.includes("drought") || desc.includes("drought")) category = "drought";


    return {
      id: i,
      title: item?.title || 'No title',
      description: item?.description || 'No description',
      category,
      date: item?.publishedAt || new Date().toISOString(),
      image: item?.urlToImage || '',
      severity: "high",
      location: "Atlantic Ocean"
    };
  })

  useEffect(() => {
    const sources = ['bbc-news', 'cnn', 'fox-news', 'google-news'];
    const severityLevels = ['high', 'medium', 'low', 'high', 'medium', 'low','medium', 'low', 'high','medium', 'low', 'high',];
    const categories = ['rain', 'storm', 'heat', 'cold', 'drought', 'flood'];

    Promise.all(
      sources.map(source =>
        fetch(`https://saurav.tech/NewsAPI/everything/${source}.json`)
          .then(res => res.json())
      )
    )
      .then(results => {
        const allArticles = results.flatMap(result => result.articles || []);
        const weatherArticles = allArticles.filter(article =>
          article.title?.toLowerCase().includes('weather') ||
          article.title?.toLowerCase().includes('storm') ||
          article.title?.toLowerCase().includes('rain') ||
          article.title?.toLowerCase().includes('flood') ||
          article.description?.toLowerCase().includes('weather')
        );

        setNewsdata(weatherArticles);

        // Create your mapped array here AFTER data is available
        const mappedNews = weatherArticles.map((item, i) => ({
          id: i,
          title: item?.title || 'No title',
          description: item?.description || 'No description',
          category: categories[i % categories.length],
          time: item?.publishedAt ? new Date(item.publishedAt) : new Date() ,
          image: item?.urlToImage || '',
          severity:severityLevels[i % severityLevels.length],
          location: item.source.name
        }));

        setNews(mappedNews);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);


  const categories = [
    { id: 'all', label: 'All News', icon: <Cloud className="w-4 h-4" /> },
    { id: 'storm', label: 'Storms', icon: <Wind className="w-4 h-4" /> },
    { id: 'rain', label: 'Rain & Floods', icon: <Droplets className="w-4 h-4" /> },
    { id: 'heat', label: 'Heat', icon: <Sun className="w-4 h-4" /> },
    { id: 'cold', label: 'Cold & Snow', icon: <Cloud className="w-4 h-4" /> }
  ];

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(item => item.category === selectedCategory);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-yellow-500';
      default: return 'bg-blue-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-white text-lg">Loading Weather News...</p>
        </div>
      </div>
    );
  }




  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-white p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8 animate-fadeIn">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Weather News
                </h1>
                <p className="text-gray-700 text-sm">Stay updated with the latest weather events worldwide</p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap
                ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-[#1e293b] hover:bg-[#2d3b50] hover:scale-105'
                  }
              `}
                style={{
                  animation: `slideUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Active Alerts', value: '12', icon: <AlertTriangle className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
              { label: 'Total News', value: filteredNews.length, icon: <TrendingUp className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
              { label: 'High Severity', value: filteredNews.filter(n => n.severity === 'high').length, icon: <Wind className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
              { label: 'Last Update', value: 'Now', icon: <Clock className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                  <div className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg shadow-lg`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* News Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (

              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700/50 
                transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                ${hoveredCard === item.id ? 'border-blue-500' : ''}
              `}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card Header */}
                <div className="relative h-48  flex items-center justify-center overflow-hidden">
                  <div className={`text-8xl transition-transform duration-500 ${hoveredCard === item.id ? 'scale-125 rotate-12' : 'scale-100'}`}>
                <img src={item.image } alt="not avilable" />
                  </div>
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getSeverityColor(item.severity)}`}>
                    {item.severity.toUpperCase()}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">{item.time.toLocaleString()}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 rounded text-blue-400">{item.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {item.description}
                  </p>
                  <button
                    className={`
                    w-full py-3 rounded-xl font-medium transition-all duration-300
                    ${hoveredCard === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30'
                        : 'bg-[#0f172a] hover:bg-[#1e293b]'
                      }
                  `}
                  >
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4 opacity-50">🌤️</div>
              <h3 className="text-2xl font-bold mb-2">No News Found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}