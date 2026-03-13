import type { RouteObject } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

// 首页
import HomePage from '../pages/HomePage'

// 滤镜效果页面
import GaussianBlur from '../pages/filters/GaussianBlur'
import DropShadow from '../pages/filters/DropShadow'
import Glow from '../pages/filters/Glow'

// 渐变效果页面
import LinearGradient from '../pages/gradients/LinearGradient'
import RadialGradient from '../pages/gradients/RadialGradient'
import BeveledGlass from '../pages/gradients/BeveledGlass'

// 动画效果页面
import PathAnimation from '../pages/animations/PathAnimation'
import TransformAnimation from '../pages/animations/TransformAnimation'
import LoadingSpinner from '../pages/animations/LoadingSpinner'

// 遮罩与裁剪页面
import ClipPath from '../pages/masks/ClipPath'
import Mask from '../pages/masks/Mask'

// 路径效果页面
import StrokeAnimation from '../pages/paths/StrokeAnimation'
import Morphing from '../pages/paths/Morphing'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'filters/gaussian-blur',
        element: <GaussianBlur />,
      },
      {
        path: 'filters/drop-shadow',
        element: <DropShadow />,
      },
      {
        path: 'filters/glow',
        element: <Glow />,
      },
      {
        path: 'gradients/linear-gradient',
        element: <LinearGradient />,
      },
      {
        path: 'gradients/radial-gradient',
        element: <RadialGradient />,
      },
      {
        path: 'gradients/beveled-glass',
        element: <BeveledGlass />,
      },
      {
        path: 'animations/path-animation',
        element: <PathAnimation />,
      },
      {
        path: 'animations/transform-animation',
        element: <TransformAnimation />,
      },
      {
        path: 'animations/loading-spinner',
        element: <LoadingSpinner />,
      },
      {
        path: 'masks/clip-path',
        element: <ClipPath />,
      },
      {
        path: 'masks/mask',
        element: <Mask />,
      },
      {
        path: 'paths/stroke-animation',
        element: <StrokeAnimation />,
      },
      {
        path: 'paths/morphing',
        element: <Morphing />,
      },
    ],
  },
]
