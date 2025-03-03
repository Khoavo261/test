import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import BarRaceChart from '@site/src/components/Echarts/BarRaceChart';
import rawData from '@site/static/files/life-expectancy-table.json';

const App = () => {
  // Bắt đầu thiết lập menu
  const headerMenuItems = [
    { label: "Tài liệu", link: "/docs/intro" },
    { label: "Blog", link: "/blog" },
    { label: "Demo", link: "/demo/cards" },
  ];

  const handleMenuClick = () => {
    console.log("Đã nhấn vào menu trên di động!");
  };

  const handleSearchClick = () => {
    alert("Đã nhấn vào nút tìm kiếm!");
  };

  // Bắt đầu Chart Data
    const countries = ['Finland', 'France', 'Germany', 'Iceland', 'Norway', 'Poland', 'Russia', 'United Kingdom'];
    const filteredData = rawData.filter((row) => countries.includes(row[3]) && row[4] >= 1950);
  
    const barColorMap = {
      Norway: '#ef2b2d',
      'United Kingdom': '#00247d',
      France: '#ed2939',
      Germany: '#000',
      Iceland: '#003897',
      Finland: '#003580',
      Russia: '#d52b1e',
      Poland: '#dc143c',
    };
  // Kết thúc Chart Data

  return (
    <div>
      <CustomHeader 
        logo="https://docusaurus.io/img/docusaurus_keytar.svg" 
        menuItems={headerMenuItems} 
        textColor="#ffffff"
        onMenuClick={handleMenuClick}
        onSearchClick={handleSearchClick}
      />

      <PureHero 
        title="Minh hoạ Echarts" 
        subtitle="Biểu diễn dữ liệu trực quan trên Web" 
        backgroundImage="https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttonText="Khám phá"
        buttonLink="#" /* Thay link vào đây */
        contentWidth="60%"
        contentPosition="center"
        titleColor="#ffffff"
        subtitleColor="#f0f0f0"
        buttonColor="#ffffff"
        navColor="#ffffff"
      />

    <BarRaceChart
        title="Income of Select European Countries (1950+)"
        subtitle="Dynamic Race of Income Over Time"
        dataset={filteredData}
        barColorMap={barColorMap}
        dataKeyX="Income"
        dataKeyY="Country"
        yearKey="Year"
        figsize={{ width: '90%', height: '600px' }}
        marginTop="40px"
        marginBottom="40px"
        animationDuration={1500}
      />
    </div>
  );
};

export default App;
