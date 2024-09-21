'use client';
import { useContents } from '@/components/Contexts/ContentContext';

const PantipPage: React.FC = () => {
  const { CotentsData } = useContents(); // รับข้อมูลจาก context

  return (
    <div>
      <h1 className="text-sm">Pantip Home Page</h1>

      <div className="grid">
        <div className="order-1 border">
          {/* ตรวจสอบว่า CotentsData มีข้อมูลแล้ว */}
          {CotentsData ? (
            CotentsData.map((i: any) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: CotentsData.eq(i).html() }} />
            ))
          ) : (
            <p>Loading content...</p> // ข้อความระหว่างโหลดข้อมูล
          )}
        </div>
      </div>
    </div>
  );
};

export default PantipPage;
