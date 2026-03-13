import DemoCard from '../../components/DemoCard'

export default function RadialGradient() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">径向渐变</h1>
        <p className="text-gray-600 mt-2">
          使用 radialGradient 创建从中心向外扩散的渐变效果。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="基础径向渐变"
          description="从中心向外扩散"
          code={`<radialGradient id="r-gradient">
  <stop offset="0%" stopColor="#8B5CF6"/>
  <stop offset="100%" stopColor="#EC4899"/>
</radialGradient>`}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <radialGradient id="basic-radial">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </radialGradient>
            </defs>
            <circle cx="75" cy="75" r="60" fill="url(#basic-radial)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="偏移中心"
          description="渐变中心偏移"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <radialGradient id="offset-radial" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </radialGradient>
            </defs>
            <circle cx="75" cy="75" r="60" fill="url(#offset-radial)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="多色径向渐变"
          description="多个颜色节点"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <radialGradient id="multi-radial">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="30%" stopColor="#FBBF24" />
                <stop offset="60%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#DC2626" />
              </radialGradient>
            </defs>
            <circle cx="75" cy="75" r="60" fill="url(#multi-radial)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="聚焦点偏移"
          description="fx, fy 设置聚焦点"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <radialGradient id="focal-radial" cx="50%" cy="50%" fx="25%" fy="25%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#1E1B4B" />
              </radialGradient>
            </defs>
            <ellipse cx="75" cy="75" rx="60" ry="45" fill="url(#focal-radial)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="聚光灯效果"
          description="模拟光照效果"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <defs>
              <radialGradient id="spotlight" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1E1B4B" />
              </radialGradient>
            </defs>
            <rect x="10" y="10" width="180" height="80" rx="8" fill="url(#spotlight)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="按钮光泽"
          description="玻璃质感效果"
        >
          <svg width="200" height="60" viewBox="0 0 200 60">
            <defs>
              <radialGradient id="gloss" cx="50%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="btn-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="40" rx="20" fill="url(#btn-grad)" />
            <rect x="10" y="10" width="180" height="20" rx="10" fill="url(#gloss)" />
            <text x="100" y="37" textAnchor="middle" fontSize="16" fill="white" fontWeight="500">Button</text>
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
