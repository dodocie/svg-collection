export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">SVG 特效集合</h1>
        <p className="text-gray-600 mt-4 text-lg">
          交互式 SVG 效果展示与学习平台。从左侧菜单选择要查看的效果类型。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '🔆', title: '滤镜效果', desc: '高斯模糊、投影、发光', count: 3 },
          { icon: '🌈', title: '渐变效果', desc: '线性渐变、径向渐变', count: 3 },
          { icon: '🎬', title: '动画效果', desc: '路径动画、变换、加载', count: 3 },
          { icon: '✂️', title: '遮罩与裁剪', desc: 'clipPath、mask', count: 2 },
          { icon: '🛤️', title: '路径效果', desc: '描边动画、变形', count: 2 },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <span className="text-4xl">{item.icon}</span>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            <p className="text-xs text-purple-600 mt-3">{item.count} 个示例</p>
          </div>
        ))}
      </div>
    </div>
  )
}
