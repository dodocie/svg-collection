import DemoCard from '../../components/DemoCard'

export default function DropShadow() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">投影效果</h1>
        <p className="text-gray-600 mt-2">
          使用 feDropShadow 滤镜创建投影效果，可控制偏移、模糊和颜色。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="基础投影"
          description="dx=4, dy=4, stdDeviation=4"
          code={`<filter id="shadow">
  <feDropShadow dx="4" dy="4" stdDeviation="4" floodColor="#00000040"/>
</filter>`}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="basic-shadow">
                <feDropShadow dx="4" dy="4" stdDeviation="4" floodColor="#00000040" />
              </filter>
            </defs>
            <rect x="40" y="40" width="70" height="70" rx="8" fill="#8B5CF6" filter="url(#basic-shadow)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="柔和阴影"
          description="stdDeviation=8, 较大模糊半径"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="soft-shadow">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#00000030" />
              </filter>
            </defs>
            <rect x="40" y="40" width="70" height="70" rx="8" fill="white" filter="url(#soft-shadow)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="彩色投影"
          description="使用主题色作为投影颜色"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="color-shadow">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#8B5CF6" floodOpacity="0.5" />
              </filter>
            </defs>
            <circle cx="75" cy="75" r="40" fill="#8B5CF6" filter="url(#color-shadow)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="多层投影"
          description="多个 feDropShadow 叠加"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="multi-shadow">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00000020" />
                <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#00000015" />
              </filter>
            </defs>
            <rect x="40" y="40" width="70" height="70" rx="12" fill="white" filter="url(#multi-shadow)" />
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
