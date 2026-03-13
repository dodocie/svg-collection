import DemoCard from '../../components/DemoCard'

export default function Mask() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">遮罩效果</h1>
        <p className="text-gray-600 mt-2">
          使用 mask 创建透明度遮罩，实现渐变消失、图像叠加等效果。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="渐变遮罩"
          description="从左到右渐变消失"
          code={`<mask id="fade-mask">
  <linearGradient>
    <stop offset="0%" stopColor="white"/>
    <stop offset="100%" stopColor="black"/>
  </linearGradient>
</mask>`}
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <defs>
              <mask id="fade-mask">
                <linearGradient id="fade-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="black" />
                </linearGradient>
                <rect x="0" y="0" width="200" height="100" fill="url(#fade-grad)" />
              </mask>
            </defs>
            <rect x="10" y="10" width="180" height="80" rx="8" fill="#8B5CF6" mask="url(#fade-mask)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="径向遮罩"
          description="从中心向外渐变"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <mask id="radial-mask">
                <radialGradient id="radial-grad">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="70%" stopColor="white" />
                  <stop offset="100%" stopColor="black" />
                </radialGradient>
                <rect x="0" y="0" width="150" height="150" fill="url(#radial-grad)" />
              </mask>
            </defs>
            <circle cx="75" cy="75" r="60" fill="#8B5CF6" mask="url(#radial-mask)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="文字遮罩"
          description="文字作为遮罩层"
        >
          <svg width="250" height="100" viewBox="0 0 250 100">
            <defs>
              <mask id="text-mask">
                <rect x="0" y="0" width="250" height="100" fill="black" />
                <text x="125" y="70" textAnchor="middle" fontSize="50" fontWeight="bold" fill="white">MASK</text>
              </mask>
            </defs>
            <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <rect x="0" y="0" width="250" height="100" fill="url(#bg-grad)" mask="url(#text-mask)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="聚光灯效果"
          description="圆形聚光区域"
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <mask id="spotlight-mask">
                <rect x="0" y="0" width="200" height="150" fill="black" />
                <circle cx="100" cy="75" r="40" fill="white">
                  <animate attributeName="cx" values="60;140;60" dur="3s" repeatCount="indefinite" />
                </circle>
              </mask>
            </defs>
            <rect x="0" y="0" width="200" height="150" fill="#1E1B4B" />
            <rect x="0" y="0" width="200" height="150" fill="#8B5CF6" mask="url(#spotlight-mask)" opacity="0.8" />
          </svg>
        </DemoCard>

        <DemoCard
          title="图像叠加遮罩"
          description="多种形状叠加"
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <mask id="overlay-mask">
                <rect x="0" y="0" width="200" height="150" fill="white" />
                <circle cx="50" cy="50" r="30" fill="black" opacity="0.5" />
                <circle cx="150" cy="100" r="25" fill="black" opacity="0.5" />
              </mask>
            </defs>
            <rect x="10" y="10" width="180" height="130" rx="8" fill="#8B5CF6" mask="url(#overlay-mask)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="边缘羽化"
          description="边缘柔和过渡"
        >
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <mask id="feather-mask">
                <rect x="0" y="0" width="200" height="150" fill="black" />
                <rect x="30" y="20" width="140" height="110" rx="8" fill="white">
                  <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                </rect>
              </mask>
              <filter id="feather-blur">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <rect x="0" y="0" width="200" height="150" fill="#1E1B4B" />
            <g mask="url(#feather-mask)" filter="url(#feather-blur)">
              <rect x="30" y="20" width="140" height="110" rx="8" fill="#8B5CF6" />
            </g>
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
