import DemoCard from '../../components/DemoCard'

export default function PathAnimation() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">路径动画</h1>
        <p className="text-gray-600 mt-2">
          使用 animateMotion 让元素沿路径移动，或使用 strokeDasharray 创建描边动画。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="沿路径移动"
          description="元素沿指定路径移动"
          code={`<animateMotion dur="3s" repeatCount="indefinite">
  <mpath href="#path"/>
</animateMotion>`}
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <path id="motion-path" d="M 30,75 Q 100,25 170,75 Q 100,125 30,75" fill="none" />
            </defs>
            <path d="M 30,75 Q 100,25 170,75 Q 100,125 30,75" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" />
            <circle r="8" fill="#8B5CF6">
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href="#motion-path" />
              </animateMotion>
            </circle>
          </svg>
        </DemoCard>

        <DemoCard
          title="描边动画"
          description="strokeDasharray + strokeDashoffset"
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <path id="draw-path" d="M 20,130 L 50,50 L 80,100 L 110,30 L 140,80 L 180,20" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
            </defs>
            <use href="#draw-path" stroke="#E5E7EB" />
            <use href="#draw-path" strokeDasharray="300" strokeDashoffset="300">
              <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" repeatCount="indefinite" />
            </use>
          </svg>
        </DemoCard>

        <DemoCard
          title="圆形描边动画"
          description="环形进度指示"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="50" fill="none" stroke="#E5E7EB" strokeWidth="8" />
            <circle cx="75" cy="75" r="50" fill="none" stroke="#8B5CF6" strokeWidth="8" strokeLinecap="round" strokeDasharray="314" strokeDashoffset="314" transform="rotate(-90 75 75)">
              <animate attributeName="stroke-dashoffset" from="314" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </DemoCard>

        <DemoCard
          title="路径变形"
          description='animate attributeName="d"'
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <path fill="#8B5CF6" opacity="0.8">
              <animate
                attributeName="d"
                values="M 20,100 Q 50,50 100,100 T 180,100 L 180,130 L 20,130 Z;M 20,80 Q 50,30 100,80 T 180,80 L 180,130 L 20,130 Z;M 20,100 Q 50,50 100,100 T 180,100 L 180,130 L 20,130 Z"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="文字描边动画"
          description="文字逐渐显现"
        >
          <svg width="200" height="80" viewBox="0 0 200 80">
            <defs>
              <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <text x="100" y="50" textAnchor="middle" fontSize="32" fontWeight="bold" fill="none" stroke="url(#text-grad)" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200">
              HELLO
              <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" fill="freeze" />
            </text>
          </svg>
        </DemoCard>

        <DemoCard
          title="复杂路径动画"
          description="图标描边效果"
        >
          <svg width="120" height="120" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60"
              strokeDashoffset="60"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            >
              <animate attributeName="stroke-dashoffset" from="60" to="0" dur="1.5s" repeatCount="indefinite" />
            </path>
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
