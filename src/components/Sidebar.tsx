import { NavLink } from 'react-router-dom'

interface MenuItem {
  id: string
  title: string
  icon: string
  children?: { id: string; title: string }[]
}

const menuItems: MenuItem[] = [
  {
    id: 'filters',
    title: '滤镜效果',
    icon: '🔆',
    children: [
      { id: 'gaussian-blur', title: '高斯模糊' },
      { id: 'drop-shadow', title: '投影效果' },
      { id: 'glow', title: '发光效果' },
    ],
  },
  {
    id: 'gradients',
    title: '渐变效果',
    icon: '🌈',
    children: [
      { id: 'linear-gradient', title: '线性渐变' },
      { id: 'radial-gradient', title: '径向渐变' },
      { id: 'beveled-glass', title: '玻璃质感' },
    ],
  },
  {
    id: 'animations',
    title: '动画效果',
    icon: '🎬',
    children: [
      { id: 'path-animation', title: '路径动画' },
      { id: 'transform-animation', title: '变换动画' },
      { id: 'loading-spinner', title: '加载动画' },
    ],
  },
  {
    id: 'masks',
    title: '遮罩与裁剪',
    icon: '✂️',
    children: [
      { id: 'clip-path', title: '路径裁剪' },
      { id: 'mask', title: '遮罩效果' },
    ],
  },
  {
    id: 'paths',
    title: '路径效果',
    icon: '🛤️',
    children: [
      { id: 'stroke-animation', title: '描边动画' },
      { id: 'morphing', title: '路径变形' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">SVG 特效集合</h1>
        <p className="text-sm text-gray-500 mt-1">交互式 SVG 效果展示</p>
      </div>
      
      <nav className="p-4">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-4">
            <div className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-600 uppercase tracking-wider">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>
            {item.children && (
              <div className="ml-4 space-y-1">
                {item.children.map((child) => (
                  <NavLink
                    key={child.id}
                    to={`/${item.id}/${child.id}`}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`
                    }
                  >
                    {child.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
