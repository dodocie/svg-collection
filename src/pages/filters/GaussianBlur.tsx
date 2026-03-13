import DemoCard from '../../components/DemoCard'

export default function GaussianBlur() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">高斯模糊</h1>
        <p className="text-gray-600 mt-2">
          使用 feGaussianBlur 滤镜创建模糊效果，stdDeviation 控制模糊程度。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="基础模糊"
          description="stdDeviation=3"
          code={`<filter id="blur">
  <feGaussianBlur stdDeviation="3" />
</filter>`}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="basic-blur">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>
            <circle cx="75" cy="75" r="50" fill="#8B5CF6" filter="url(#basic-blur)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="强烈模糊"
          description="stdDeviation=10"
          code={`<filter id="heavy-blur">
  <feGaussianBlur stdDeviation="10" />
</filter>`}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="heavy-blur">
                <feGaussianBlur stdDeviation="10" />
              </filter>
            </defs>
            <circle cx="75" cy="75" r="50" fill="#8B5CF6" filter="url(#heavy-blur)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="背景模糊效果"
          description="模拟毛玻璃效果"
        >
          <svg width="200" height="120" viewBox="0 0 200 120">
            <defs>
              <filter id="bg-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              </filter>
            </defs>
            <rect x="10" y="10" width="180" height="100" rx="8" fill="#E0E7FF" />
            <rect x="40" y="30" width="120" height="60" rx="4" fill="white" fillOpacity="0.7" filter="url(#bg-blur)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="动态模糊"
          description="鼠标悬停查看效果"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="hover-blur">
                <feGaussianBlur stdDeviation="0">
                  <animate attributeName="stdDeviation" values="0;5;0" dur="2s" repeatCount="indefinite" />
                </feGaussianBlur>
              </filter>
            </defs>
            <circle cx="75" cy="75" r="50" fill="#8B5CF6" filter="url(#hover-blur)" />
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
