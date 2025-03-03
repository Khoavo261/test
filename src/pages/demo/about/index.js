import React from "react";
import FounderProfile from "@site/src/components/FounderProfile/FounderProfile"; // Đảm bảo đường dẫn đúng

const App = () => {
  return (
    <div>
      <FounderProfile
        image="/img/avatar.png"
        name="Khoa Võ"
        role="Founder"
        bio="Mình phụ trách nội dung, thiết kế và chiến lược marketing. Mình đã khởi nghiệp hơn 5 năm với nhiều dự án..."
        highlights={[
          { title: "5 Năm Khởi Nghiệp", description: "Kinh nghiệm phát triển dự án." },
          { title: "Xây Dựng Cộng Đồng", description: "Sáng lập cộng đồng tiếng Đức." },
          { title: "Du Học Sinh", description: "Hiện đang học tại Wien (Áo)." },
        ]}
      />
    </div>
  );
};

export default App;
