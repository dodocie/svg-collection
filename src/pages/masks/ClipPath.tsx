import DemoCard from '../../components/DemoCard'

export default function ClipPath() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">路径裁剪</h1>
        <p className="text-gray-600 mt-2">
          使用 clipPath 裁剪元素，只显示裁剪区域内的内容。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="基础裁剪"
          description="使用圆形裁剪"
          code={`<clipPath id="clip">
  <circle cx="75" cy="75" r="50"/>
</clipPath>`}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <clipPath id="circle-clip">
                <circle cx="75" cy="75" r="50" />
              </clipPath>
            </defs>
            <rect x="10" y="10" width="130" height="130" fill="#8B5CF6" clipPath="url(#circle-clip)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="多形状裁剪"
          description="多个裁剪形状组合"
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <clipPath id="multi-clip">
                <circle cx="60" cy="75" r="40" />
                <circle cx="140" cy="75" r="40" />
              </clipPath>
            </defs>
            <rect x="10" y="10" width="180" height="130" fill="#8B5CF6" clipPath="url(#multi-clip)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="文字裁剪"
          description="使用文字作为裁剪区域"
        >
          <svg width="250" height="100" viewBox="0 0 250 100">
            <defs>
              <clipPath id="text-clip">
                <text x="125" y="70" textAnchor="middle" fontSize="50" fontWeight="bold">SVG</text>
              </clipPath>
              <linearGradient id="clip-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="250" height="100" fill="url(#clip-grad)" clipPath="url(#text-clip)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="图片裁剪"
          description="裁剪图片为特定形状"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <clipPath id="hex-clip">
                <polygon points="75,10 130,40 130,100 75,130 20,100 20,40" />
              </clipPath>
            </defs>
            <rect x="0" y="0" width="150" height="150" fill="#8B5CF6" clipPath="url(#hex-clip)" />
            <text x="75" y="75" textAnchor="middle" dy="0.3em" fill="white" fontSize="24">IMG</text>
          </svg>
        </DemoCard>

        <DemoCard
          title="动态裁剪"
          description="动画裁剪路径"
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <clipPath id="anim-clip">
                <circle cx="100" cy="75" r="20">
                  <animate attributeName="r" values="20;60;20" dur="2s" repeatCount="indefinite" />
                </circle>
              </clipPath>
            </defs>
            <rect x="10" y="10" width="180" height="130" fill="#8B5CF6" clipPath="url(#anim-clip)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="波浪裁剪"
          description="波浪形状裁剪"
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <clipPath id="wave-clip">
                <path d="M 0,50 Q 25,30 50,50 T 100,50 T 150,50 T 200,50 L 200,150 L 0,150 Z" />
              </clipPath>
            </defs>
            <rect x="0" y="0" width="200" height="150" fill="#8B5CF6" clipPath="url(#wave-clip)" />
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
