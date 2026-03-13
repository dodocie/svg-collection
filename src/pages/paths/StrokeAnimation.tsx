import DemoCard from '../../components/DemoCard'

export default function StrokeAnimation() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">描边动画</h1>
        <p className="text-gray-600 mt-2">
          使用 strokeDasharray 和 strokeDashoffset 创建描边绘制动画效果。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="基础描边动画"
          description="线条逐渐绘制"
          code={`<path strokeDasharray="200" strokeDashoffset="200">
  <animate attributeName="stroke-dashoffset" from="200" to="0"/>
</path>`}
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <path d="M 20,80 L 60,20 L 100,60 L 140,30 L 180,50" fill="none" stroke="#E5E7EB" strokeWidth="3" />
            <path d="M 20,80 L 60,20 L 100,60 L 140,30 L 180,50" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeDasharray="200" strokeDashoffset="200">
              <animate attributeName="stroke-dashoffset" from="200" to="0" dur="1.5s" repeatCount="indefinite" />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="描边消失"
          description="线条逐渐消失"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <path d="M 20,50 Q 60,20 100,50 Q 140,80 180,50" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeDasharray="200" strokeDashoffset="0">
              <animate attributeName="stroke-dashoffset" from="0" to="200" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="描边和填充"
          description="先描边后填充"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <linearGradient id="heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
            <path
              d="M 75,40 C 55,20 25,30 25,60 C 25,90 75,120 75,120 C 75,120 125,90 125,60 C 125,30 95,20 75,40"
              fill="url(#heart-grad)"
              stroke="#BE185D"
              strokeWidth="3"
              strokeDasharray="400"
              strokeDashoffset="400"
            >
              <animate attributeName="stroke-dashoffset" from="400" to="0" dur="1.5s" fill="freeze" />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="虚线动画"
          description="虚线移动效果"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <rect x="20" y="20" width="160" height="60" rx="8" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="10,5">
              <animate attributeName="stroke-dashoffset" from="0" to="30" dur="1s" repeatCount="indefinite" />
            </rect>
          </svg>
        </DemoCard>

        <DemoCard
          title="图标描边"
          description="图标绘制动画"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="150"
              strokeDashoffset="150"
              d="M 50,20 L 50,50 L 70,70 M 85,50 A 35,35 0 1,1 50,15"
            >
              <animate attributeName="stroke-dashoffset" from="150" to="0" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="写字效果"
          description="模拟手写"
        >
          <svg width="200" height="80" viewBox="0 0 200 80">
            <defs>
              <linearGradient id="write-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <text x="100" y="55" textAnchor="middle" fontSize="40" fontFamily="cursive" fill="none" stroke="url(#write-grad)" strokeWidth="1.5" strokeDasharray="300" strokeDashoffset="300">
              Hello
              <animate attributeName="stroke-dashoffset" from="300" to="0" dur="3s" fill="freeze" />
            </text>
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
