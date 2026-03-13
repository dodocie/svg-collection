import DemoCard from '../../components/DemoCard'

export default function LinearGradient() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">线性渐变</h1>
        <p className="text-gray-600 mt-2">
          使用 linearGradient 创建线性渐变效果，可设置方向和多个颜色节点。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="水平渐变"
          description="从左到右"
          code={`<linearGradient id="h-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stopColor="#8B5CF6"/>
  <stop offset="100%" stopColor="#EC4899"/>
</linearGradient>`}
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="h-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="80" rx="8" fill="url(#h-grad)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="垂直渐变"
          description="从上到下"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="v-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="80" rx="8" fill="url(#v-grad)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="对角渐变"
          description="45度角渐变"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="d-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="80" rx="8" fill="url(#d-grad)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="多色渐变"
          description="彩虹渐变效果"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="rainbow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="17%" stopColor="#F59E0B" />
                <stop offset="33%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="67%" stopColor="#6366F1" />
                <stop offset="83%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <text x="100" y="65" textAnchor="middle" fontSize="40" fontWeight="bold" fill="url(#rainbow-grad)">
              RAINBOW
            </text>
          </svg>
        </DemoCard>

        <DemoCard
          title="渐变动画"
          description="动态移动渐变位置"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="anim-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6">
                  <animate attributeName="stop-color" values="#8B5CF6;#EC4899;#8B5CF6" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#EC4899">
                  <animate attributeName="stop-color" values="#EC4899;#8B5CF6;#EC4899" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="80" rx="40" fill="url(#anim-grad)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="渐变描边"
          description="渐变应用于描边"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <text x="100" y="65" textAnchor="middle" fontSize="36" fontWeight="bold" fill="none" stroke="url(#stroke-grad)" strokeWidth="2">
              STROKE
            </text>
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
