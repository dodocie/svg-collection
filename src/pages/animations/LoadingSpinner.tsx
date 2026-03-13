import DemoCard from '../../components/DemoCard'

export default function LoadingSpinner() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">加载动画</h1>
        <p className="text-gray-600 mt-2">
          常用的加载指示器和进度动画效果。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="圆环加载"
          description="经典旋转加载动画"
          code={`<circle strokeDasharray="80" strokeDashoffset="60">
  <animateTransform type="rotate" .../>
</circle>`}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="6" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="60">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </DemoCard>

        <DemoCard
          title="点状加载"
          description="三个点依次弹跳"
        >
          <svg width="120" height="60" viewBox="0 0 120 60">
            {['M20,30', 'M60,30', 'M100,30'].map((_, i) => (
              <circle key={i} cx={20 + i * 40} cy="30" r="10" fill="#8B5CF6">
                <animate
                  attributeName="cy"
                  values="30;15;30"
                  dur="0.6s"
                  begin={`${i * 0.15}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="0.6s"
                  begin={`${i * 0.15}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>
        </DemoCard>

        <DemoCard
          title="进度条"
          description="线性进度指示"
        >
          <svg width="200" height="30" viewBox="0 0 200 30">
            <rect x="10" y="10" width="180" height="10" rx="5" fill="#E5E7EB" />
            <rect x="10" y="10" width="0" height="10" rx="5" fill="#8B5CF6">
              <animate attributeName="width" values="0;180;0" dur="2s" repeatCount="indefinite" />
            </rect>
          </svg>
        </DemoCard>

        <DemoCard
          title="脉冲圆环"
          description="向外扩散消失"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            {[0, 1, 2].map((i) => (
              <circle key={i} cx="50" cy="50" r="20" fill="none" stroke="#8B5CF6" strokeWidth="3">
                <animate
                  attributeName="r"
                  from="20"
                  to="45"
                  dur="1.5s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="1.5s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>
        </DemoCard>

        <DemoCard
          title="方块旋转"
          description="四个方块交替旋转"
        >
          <svg width="80" height="80" viewBox="0 0 80 80">
            {[0, 1, 2, 3].map((i) => {
              const positions = [
                { x: 10, y: 10 },
                { x: 45, y: 10 },
                { x: 45, y: 45 },
                { x: 10, y: 45 },
              ]
              return (
                <rect
                  key={i}
                  x={positions[i].x}
                  y={positions[i].y}
                  width="25"
                  height="25"
                  rx="4"
                  fill="#8B5CF6"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="1s"
                    begin={`${i * 0.15}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              )
            })}
          </svg>
        </DemoCard>

        <DemoCard
          title="弧形旋转"
          description="多段弧线旋转"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="1.2s"
                repeatCount="indefinite"
              />
              <path d="M 50,10 A 40,40 0 0,1 90,50" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
              <path d="M 90,50 A 40,40 0 0,1 50,90" fill="none" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />
              <path d="M 50,90 A 40,40 0 0,1 10,50" fill="none" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round" />
              <path d="M 10,50 A 40,40 0 0,1 50,10" fill="none" stroke="#DDD6FE" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
