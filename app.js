import React, { useState, useEffect } from 'react';
import { Monitor, Cpu, HardDrive, Zap, Globe, Settings, MessageCircle, Star, TrendingUp, Users } from 'lucide-react';

const VPSGamingDashboard = () => {
  const [currentLang, setCurrentLang] = useState('vi');
  const [selectedConfig, setSelectedConfig] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const translations = {
    vi: {
      title: "VPS Gaming Pro",
      subtitle: "Sức mạnh gaming không giới hạn",
      joinDiscord: "Tham gia Discord",
      selectPlan: "Chọn gói",
      popular: "Phổ biến",
      recommended: "Đề xuất",
      tabs: "tabs",
      week: "tuần",
      month: "tháng",
      features: "Tính năng nổi bật",
      performance: "Hiệu năng",
      pricing: "Bảng giá",
      additionalInfo: "Thông tin bổ sung",
      configs: [
        {
          name: "Starter",
          popular: false,
          cpu: "Intel Xeon E5-2676v3",
          cores: "12 nhân / 24 luồng",
          gpu: "GTX 1660 4GB/6GB",
          ram: "64GB RAM",
          bloxFruit: 25,
          otherGames: "30-40",
          priceWeekly: 270,
          priceMonthly: 1000,
          color: "from-blue-500 to-purple-600"
        },
        {
          name: "Standard",
          popular: true,
          cpu: "Intel Xeon E5-2680v4",
          cores: "14 nhân / 28 luồng",
          gpu: "GTX 1660 4GB/6GB",
          ram: "64GB RAM",
          bloxFruit: "25-30",
          otherGames: "30-40",
          priceWeekly: 300,
          priceMonthly: 1100,
          color: "from-purple-500 to-pink-600"
        },
        {
          name: "Pro",
          popular: false,
          cpu: "Dual Intel Xeon E5-2680v4",
          cores: "28 nhân total",
          gpu: "GTX 1070/1080",
          ram: "128GB RAM",
          bloxFruit: 50,
          otherGames: "60-70",
          priceWeekly: 425,
          priceMonthly: 1500,
          color: "from-pink-500 to-red-600"
        },
        {
          name: "Ultimate",
          popular: false,
          recommended: true,
          cpu: "Dual Intel Xeon E5-2686v4",
          cores: "36 nhân total",
          gpu: "GTX 1070/1080",
          ram: "128GB RAM",
          bloxFruit: 60,
          otherGames: "80-90",
          priceWeekly: 450,
          priceMonthly: 1600,
          color: "from-red-500 to-orange-600"
        }
      ],
      additionalFeatures: [
        "✅ Hỗ trợ Windows 1511, 21H2, 22H2",
        "💾 Hỗ trợ RAM lên đến 256GB",
        "🌐 Network: VNPT, Viettel, FPT",
        "🔧 Hỗ trợ 24/7"
      ]
    },
    en: {
      title: "VPS Gaming Pro",
      subtitle: "Unlimited gaming power",
      joinDiscord: "Join Discord",
      selectPlan: "Select Plan",
      popular: "Popular",
      recommended: "Recommended",
      tabs: "tabs",
      week: "week",
      month: "month",
      features: "Key Features",
      performance: "Performance",
      pricing: "Pricing",
      additionalInfo: "Additional Info",
      configs: [
        {
          name: "Starter",
          popular: false,
          cpu: "Intel Xeon E5-2676v3",
          cores: "12 cores / 24 threads",
          gpu: "GTX 1660 4GB/6GB",
          ram: "64GB RAM",
          bloxFruit: 25,
          otherGames: "30-40",
          priceWeekly: 11,
          priceMonthly: 40,
          color: "from-blue-500 to-purple-600"
        },
        {
          name: "Standard",
          popular: true,
          cpu: "Intel Xeon E5-2680v4",
          cores: "14 cores / 28 threads",
          gpu: "GTX 1660 4GB/6GB",
          ram: "64GB RAM",
          bloxFruit: "25-30",
          otherGames: "30-40",
          priceWeekly: 12,
          priceMonthly: 44,
          color: "from-purple-500 to-pink-600"
        },
        {
          name: "Pro",
          popular: false,
          cpu: "Dual Intel Xeon E5-2680v4",
          cores: "28 cores total",
          gpu: "GTX 1070/1080",
          ram: "128GB RAM",
          bloxFruit: 50,
          otherGames: "60-70",
          priceWeekly: 17,
          priceMonthly: 60,
          color: "from-pink-500 to-red-600"
        },
        {
          name: "Ultimate",
          popular: false,
          recommended: true,
          cpu: "Dual Intel Xeon E5-2686v4",
          cores: "36 cores total",
          gpu: "GTX 1070/1080",
          ram: "128GB RAM",
          bloxFruit: 60,
          otherGames: "80-90",
          priceWeekly: 18,
          priceMonthly: 64,
          color: "from-red-500 to-orange-600"
        }
      ],
      additionalFeatures: [
        "✅ Support Windows 1511, 21H2, 22H2",
        "💾 RAM support up to 256GB",
        "🌐 Network: VNPT, Viettel, FPT",
        "🔧 24/7 Support"
      ]
    }
  };

  const t = translations[currentLang];

  const PricingCard = ({ config, index }) => (
    <div 
      className={`relative group transform transition-all duration-500 hover:scale-105 ${
        isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {config.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            <Star className="inline w-4 h-4 mr-1" />
            {t.popular}
          </div>
        </div>
      )}
      
      {config.recommended && (
        <div className="absolute -top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            <TrendingUp className="inline w-3 h-3 mr-1" />
            {t.recommended}
          </div>
        </div>
      )}

      <div className={`relative h-full bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-purple-300 transition-all duration-300 ${config.popular ? 'ring-4 ring-purple-200' : ''}`}>
        <div className={`h-2 bg-gradient-to-r ${config.color}`}></div>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{config.name}</h3>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Cpu className="w-4 h-4 mr-1" />
                {config.cores}
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Cpu className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-medium text-gray-700">CPU</span>
              </div>
              <span className="text-sm text-gray-600">{config.cpu}</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Monitor className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-medium text-gray-700">GPU</span>
              </div>
              <span className="text-sm text-gray-600">{config.gpu}</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <HardDrive className="w-5 h-5 text-purple-500 mr-2" />
                <span className="font-medium text-gray-700">RAM</span>
              </div>
              <span className="text-sm text-gray-600">{config.ram}</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              {t.performance}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>🎮 Blox Fruits:</span>
                <span className="font-bold text-purple-600">{config.bloxFruit} {t.tabs}</span>
              </div>
              <div className="flex justify-between">
                <span>🎯 Other Games:</span>
                <span className="font-bold text-blue-600">{config.otherGames} {t.tabs}</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="flex justify-center space-x-4">
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {currentLang === 'vi' ? `${config.priceWeekly}k` : `$${config.priceWeekly}`}
                </div>
                <div className="text-sm text-gray-500">/{t.week}</div>
              </div>
              <div className="text-gray-300">|</div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {currentLang === 'vi' ? `${config.priceMonthly}k` : `$${config.priceMonthly}`}
                </div>
                <div className="text-sm text-gray-500">/{t.month}</div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setSelectedConfig(config)}
            className={`w-full py-3 px-4 bg-gradient-to-r ${config.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
          >
            {t.selectPlan}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Language Selector */}
            <div className="flex justify-center space-x-4 mb-8">
              {['vi', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    currentLang === lang
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {lang === 'vi' ? '🇻🇳 Tiếng Việt' : '🇺🇸 English'}
                </button>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              {t.subtitle}
            </p>

            <a
              href="https://discord.gg/nR8BVxt5eQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.joinDiscord}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.configs.map((config, index) => (
              <PricingCard key={index} config={config} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <Settings className="w-6 h-6 mr-2" />
              {t.features}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, label: currentLang === 'vi' ? 'Khách hàng' : 'Customers', value: '1000+' },
              { icon: Zap, label: currentLang === 'vi' ? 'Uptime' : 'Uptime', value: '99.9%' },
              { icon: Globe, label: currentLang === 'vi' ? 'Máy chủ' : 'Servers', value: '24/7' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPSGamingDashboard;
