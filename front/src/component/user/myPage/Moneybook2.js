import Card from '@mui/material/Card';


export default function Component() {
  return (
    <Card className="w-[300px] bg-orange-100 rounded-3xl overflow-hidden">
      <div className="bg-orange-300 p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">JackEsther님의 가계부</div>
        <div className="text-sm">2024년 08월 ▼</div>
      </div>
      <div className="h-[400px]">
        <div className="p-4 space-y-4">
          <Card className="bg-white/80 p-4 rounded-2xl space-y-2">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">전체거래</div>
              <div className="text-xl font-bold">15,500원</div>
            </div>
            <div className="flex justify-between items-center">
              <div>판매</div>
              <div>2건 15,500원</div>
            </div>
            <div className="flex justify-between items-center">
              <div>구매</div>
              <div>0건 0원</div>
            </div>
            <div className="flex justify-between items-center">
              <div>나눔</div>
              <div>한 0건 받은 0건</div>
            </div>
          </Card>
          <Card className="bg-white/80 p-4 rounded-2xl space-y-2">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">이웃</div>
              <div className="text-xl font-bold">4명</div>
            </div>
            <div className="flex justify-between items-center">
              <div>거래</div>
              <div>0건 0원</div>
            </div>
            <div className="flex justify-between items-center">
              <div>나눔</div>
              <div>0건</div>
            </div>
          </Card>
        </div>
      </div>
      <div className="bg-green-500 p-2 text-center text-white font-semibold">
        나가기
      </div>
    </Card>
  )
}