import DemoCard from '../../components/DemoCard'

export default function Glow() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">发光效果</h1>
        <p className="text-gray-600 mt-2">
          结合 feGaussianBlur 和 feMerge 创建发光效果，常用于霓虹灯风格。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="外发光"
          description="物体外部发光"
          code={`<filter id="glow">
  <feGaussianBlur stdDeviation="4" result="blur"/>
  <feMerge>
    <feMergeNode in="blur"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>`}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="outer-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <text x="75" y="85" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#8B5CF6" filter="url(#outer-glow)">
              GLOW
            </text>
          </svg>
        </DemoCard>

        <DemoCard
          title="霓虹效果"
          description="多层发光叠加"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur1" />
                <feGaussianBlur stdDeviation="6" result="blur2" />
                <feGaussianBlur stdDeviation="12" result="blur3" />
                <feMerge>
                  <feMergeNode in="blur3" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <text x="75" y="85" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#00FFFF" filter="url(#neon)">
              NEON
            </text>
          </svg>
        </DemoCard>

        <DemoCard
          title="内发光"
          description="物体内部发光"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="inner-glow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="blur" in2="SourceGraphic" operator="in" result="inner" />
                <feMerge>
                  <feMergeNode in="SourceGraphic" />
                  <feMergeNode in="inner" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="75" cy="75" r="50" fill="#1E1B4B" />
            <circle cx="75" cy="75" r="50" fill="#8B5CF6" filter="url(#inner-glow)" />
          </svg>
        </DemoCard>

        <DemoCard
          title="脉冲发光动画"
          description="动态发光效果"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <defs>
              <filter id="pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur">
                  <animate attributeName="stdDeviation" values="2;8;2" dur="2s" repeatCount="indefinite" />
                </feGaussianBlur>
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="75" cy="75" r="30" fill="#8B5CF6" filter="url(#pulse-glow)" />
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
