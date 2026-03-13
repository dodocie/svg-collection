import DemoCard from '../../components/DemoCard'

export default function Morphing() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">路径变形</h1>
        <p className="text-gray-600 mt-2">
          使用 animate 改变 path 的 d 属性，实现形状之间的平滑过渡。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="圆形变方形"
          description="形状变形动画"
          code={`<path>
  <animate attributeName="d" values="...circle;...square;...circle"/>
</path>`}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <path fill="#8B5CF6">
              <animate
                attributeName="d"
                values="M 75,25 A 50,50 0 1,1 74.99,25;M 25,25 L 125,25 L 125,125 L 25,125 Z;M 75,25 A 50,50 0 1,1 74.99,25"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="心形变形"
          description="心形脉动"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <path fill="#EC4899">
              <animate
                attributeName="d"
                values="M 75,55 C 60,40 40,45 40,65 C 40,85 75,105 75,105 C 75,105 110,85 110,65 C 110,45 90,40 75,55;M 75,50 C 55,30 30,40 30,65 C 30,95 75,115 75,115 C 75,115 120,95 120,65 C 120,40 95,30 75,50;M 75,55 C 60,40 40,45 40,65 C 40,85 75,105 75,105 C 75,105 110,85 110,65 C 110,45 90,40 75,55"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="星形变形"
          description="星形旋转变形"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <polygon fill="#F59E0B">
              <animate
                attributeName="points"
                values="75,20 90,60 130,60 100,85 115,130 75,105 35,130 50,85 20,60 60,60;75,30 85,65 120,65 95,85 105,120 75,100 45,120 55,85 30,65 65,65;75,20 90,60 130,60 100,85 115,130 75,105 35,130 50,85 20,60 60,60"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </polygon>
          </svg>
        </DemoCard>

        <DemoCard
          title="波浪变形"
          description="动态波浪"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <path fill="#8B5CF6" opacity="0.8">
              <animate
                attributeName="d"
                values="M 0,60 Q 50,40 100,60 T 200,60 L 200,100 L 0,100 Z;M 0,50 Q 50,70 100,50 T 200,50 L 200,100 L 0,100 Z;M 0,60 Q 50,40 100,60 T 200,60 L 200,100 L 0,100 Z"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="形状组合变形"
          description="多形状循环变形"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <path fill="#8B5CF6">
              <animate
                attributeName="d"
                values="M 75,25 A 50,50 0 1,1 74.99,25;M 25,75 L 75,25 L 125,75 L 75,125 Z;M 25,25 L 125,25 L 125,125 L 25,125 Z;M 75,25 A 50,50 0 1,1 74.99,25"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </DemoCard>

        <DemoCard
          title="液体变形"
          description="液体流动效果"
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <path fill="#3B82F6" opacity="0.7">
              <animate
                attributeName="d"
                values="M 0,50 Q 25,30 50,50 T 100,50 T 150,50 T 200,50 L 200,100 L 0,100 Z;M 0,50 Q 25,70 50,50 T 100,50 T 150,50 T 200,50 L 200,100 L 0,100 Z;M 0,50 Q 25,30 50,50 T 100,50 T 150,50 T 200,50 L 200,100 L 0,100 Z"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </DemoCard>
      </div>
    </div>
  )
}
