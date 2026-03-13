import DemoCard from '../../components/DemoCard'

export default function TransformAnimation() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">变换动画</h1>
        <p className="text-gray-600 mt-2">
          使用 animateTransform 创建旋转、缩放、平移动画效果。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="旋转动画"
          description="绕中心点旋转"
          code={`<animateTransform
  attributeName="transform"
  type="rotate"
  from="0 75 75"
  to="360 75 75"
  dur="2s"
  repeatCount="indefinite"
/>`}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 75 75"
                to="360 75 75"
                dur="3s"
                repeatCount="indefinite"
              />
              <rect x="50" y="50" width="50" height="50" rx="8" fill="#8B5CF6" />
            </g>
          </svg>
        </DemoCard>

        <DemoCard
          title="缩放动画"
          description="脉冲缩放效果"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="30" fill="#8B5CF6">
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.3;1"
                dur="1.5s"
                repeatCount="indefinite"
                additive="sum"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-9,-9;0,0"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </DemoCard>

        <DemoCard
          title="平移动画"
          description="水平来回移动"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <circle cx="30" cy="50" r="20" fill="#8B5CF6">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;140,0;0,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <path d="M 10,80 H 190" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </DemoCard>

        <DemoCard
          title="组合动画"
          description="旋转 + 缩放"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 75 75"
                to="360 75 75"
                dur="4s"
                repeatCount="indefinite"
              />
              <polygon points="75,20 90,60 130,60 100,85 115,130 75,105 35,130 50,85 20,60 60,60" fill="#8B5CF6">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1;0.8;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </polygon>
            </g>
          </svg>
        </DemoCard>

        <DemoCard
          title="摇摆动画"
          description="左右摇摆"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-15,75,130;15,75,130;-15,75,130"
                dur="1s"
                repeatCount="indefinite"
              />
              <rect x="65" y="30" width="20" height="100" rx="10" fill="#8B5CF6" />
              <circle cx="75" cy="30" r="15" fill="#8B5CF6" />
            </g>
          </svg>
        </DemoCard>

        <DemoCard
          title="弹跳动画"
          description="模拟重力弹跳"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <circle cx="75" cy="30" r="20" fill="#8B5CF6">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;0,90;0,0"
                dur="1s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
              />
            </circle>
            <ellipse cx="75" cy="130" rx="30" ry="5" fill="#00000020">
              <animate attributeName="rx" values="30;15;30" dur="1s" repeatCount="indefinite" />
            </ellipse>
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
