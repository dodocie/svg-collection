import DemoCard from '../../components/DemoCard'

const GlassButton = ({ text = 'Button', color = '#2ad4ff' }: { text?: string; color?: string }) => (
  <svg viewBox="0 0 200 50" width="200" height="50">
    <defs>
      <linearGradient id={`lg_${color.replace('#', '')}`}>
        <stop stopColor={color} offset={0} />
        <stop stopColor="#d4f6ff" offset={0.295} />
        <stop stopColor={color} offset={0.506} />
        <stop stopColor="#80e5ff" offset={0.732} />
        <stop stopColor={color} offset={1} />
      </linearGradient>
      <linearGradient id={`lg_gloss_${color.replace('#', '')}`}>
        <stop stopColor="#ffffff" stopOpacity={0} offset={0} />
        <stop stopColor="#ffffff" stopOpacity={0.329} offset={0.393} />
        <stop stopColor="#ffffff" offset={0.498} />
        <stop stopColor="#ffffff" stopOpacity={0.094} offset={0.715} />
        <stop stopColor="#ffffff" stopOpacity={0} offset={1} />
      </linearGradient>
      <linearGradient id={`lg_highlight_${color.replace('#', '')}`}>
        <stop stopColor="#ffffff" offset={0} />
        <stop stopColor="#ffffff" stopOpacity={0} offset={1} />
      </linearGradient>
      <filter id={`filter_${color.replace('#', '')}`} x={-0.03} y={-0.14} width={1.06} height={1.29}>
        <feGaussianBlur stdDeviation={2.44} />
      </filter>
    </defs>
    <g opacity={0.274} filter={`url(#filter_${color.replace('#', '')})`} transform="translate(2,2)">
      <path fill="#ffffff" d="m192 8v34h-184v-34h184z" />
      <path fill={`url(#lg_${color.replace('#', '')})`} d="M 8,8 H 192 V 42 H 8 Z" />
    </g>
    <g>
      <path fill={`url(#lg_${color.replace('#', '')})`} d="M 8,8 H 192 V 42 H 8 Z" />
      <path fill="#ffffff" opacity={0.2} d="M 8,8 H 192 V 42 H 8 Z" />
      <path fill={`url(#lg_gloss_${color.replace('#', '')})`} d="M 8,8 H 192 V 42 H 8 Z" />
    </g>
    <path fill={`url(#lg_highlight_${color.replace('#', '')})`} d="M 8,8 V 20 L 192,20 V 8 H 8 Z" />
    <text x="100" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">{text}</text>
  </svg>
)

const BeveledButton = () => (
  <svg className='mx-auto' viewBox="0 0 200 50">
    <defs>
      <linearGradient id="lg_blue">
        <stop stopColor="#2ad4ff" offset={0} />
        <stop stopColor="#d4f6ff" offset={0.295} />
        <stop stopColor="#2ad4ff" offset={0.506} />
        <stop stopColor="#80e5ff" offset={0.732} />
        <stop stopColor="#2ad4ff" offset={1} />
      </linearGradient>
      <linearGradient id="lg_white_gloss">
        <stop stopColor="#ffffff" stopOpacity={0} offset={0} />
        <stop stopColor="#ffffff" stopOpacity={0.329} offset={0.393} />
        <stop stopColor="#ffffff" offset={0.498} />
        <stop stopColor="#ffffff" stopOpacity={0.094} offset={0.715} />
        <stop stopColor="#ffffff" stopOpacity={0} offset={1} />
      </linearGradient>
      <linearGradient id="lg_top_highlight">
        <stop stopColor="#ffffff" offset={0} />
        <stop stopColor="#ffffff" stopOpacity={0} offset={1} />
      </linearGradient>
      <linearGradient id="linearGradient3905" xlinkHref="#lg_blue" gradientUnits="userSpaceOnUse" x1={195} y1={10} x2={5} y2={50} />
      <linearGradient id="linearGradient3907" xlinkHref="#lg_blue" gradientUnits="userSpaceOnUse" x1={5} y1={10} x2={195} y2={50} />
      <linearGradient id="linearGradient3909" xlinkHref="#lg_blue" gradientUnits="userSpaceOnUse" x1={190} y1={44.9} x2={200} y2={-10.1} />
      <linearGradient id="linearGradient3911" xlinkHref="#lg_blue" gradientUnits="userSpaceOnUse" x1={190} y1={-15.04} x2={200} y2={50} />
      <linearGradient id="linearGradient3913" xlinkHref="#lg_white_gloss" gradientUnits="userSpaceOnUse" x1={81.67} y1={-27.64} x2={100} y2={66.6} />
      <linearGradient id="linearGradient4029" xlinkHref="#lg_top_highlight" gradientUnits="userSpaceOnUse" x1={125} y1={-10.9} x2={125} y2={59.8} />
      <filter id="filter4292" x={-0.03} y={-0.14} width={1.06} height={1.29}>
        <feGaussianBlur stdDeviation={2.44} />
      </filter>
    </defs>
    <g id="shadow" opacity={0.274} filter="url(#filter4292)" transform="translate(2,2)">
      <path fill="#ffffff" d="m192 8v34h-184v-34h184z" />
      <path fill="url(#linearGradient3905)" d="m8 8.04v34h184v-34h-184z" />
    </g>
    <g id="button_body">
      <path fill="url(#linearGradient3905)" d="M 8,8 H 192 V 42 H 8 Z" />
      <path fill="#ffffff" d="M 8,8 H 192 V 42 H 8 Z" />
      <path opacity={0.39} fill="url(#linearGradient3907)" d="M 192,8 V 42 H 8 V 8 Z" />
      <path opacity={0.39} fill="url(#linearGradient3909)" d="M 8,42 V 8 H 192 V 42 Z" />
      <path opacity={0.2} fill="url(#linearGradient3911)" d="M 8,8 H 192 V 42 H 8 Z" />
      <path fill="url(#linearGradient3913)" d="M 8,8 H 192 V 42 H 8 Z" />
    </g>
    <path fill="url(#linearGradient4029)" d="M 8,8 V 16.47 L 192,31.75 V 8 H 8 Z" />
  </svg>
)

export default function BeveledGlass() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">玻璃质感按钮</h1>
        <p className="text-gray-600 mt-2">
          使用多层渐变叠加创建玻璃质感效果，包含高光、反射和阴影。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DemoCard
          title="原始玻璃按钮"
          description="多层渐变叠加效果"
        >
          <BeveledButton />

        </DemoCard>

        <DemoCard
          title="深色背景"
          description="在深色背景上显示效果"
        >
          <div className='bg-slate-700 rounded-lg size-full'><BeveledButton /></div>
        </DemoCard>

        <DemoCard
          title="蓝色变体"
          description="自定义颜色"
        >
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex justify-center">
            <GlassButton text="Click Me" color="#3B82F6" />
          </div>
        </DemoCard>

        <DemoCard
          title="紫色变体"
          description="紫色玻璃效果"
        >
          <div className="p-8 bg-gradient-to-br from-indigo-900 to-purple-800 rounded-lg flex justify-center">
            <GlassButton text="Submit" color="#8B5CF6" />
          </div>
        </DemoCard>

        <DemoCard
          title="绿色变体"
          description="绿色玻璃效果"
        >
          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex justify-center">
            <GlassButton text="Confirm" color="#10B981" />
          </div>
        </DemoCard>

        <DemoCard
          title="渐变背景"
          description="在渐变背景上"
        >
          <div className="p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex justify-center">
            <GlassButton text="Gradient" color="#F59E0B" />
          </div>
        </DemoCard>
      </div>
    </div>
  )
}
