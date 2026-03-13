interface DemoCardProps {
  title: string
  description?: string
  children: React.ReactNode
  code?: string
}

export default function DemoCard({ title, description, children, code, }: DemoCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500 mb-4">{description}</p>
        )}
        <div className="flex items-center justify-center min-h-[200px] bg-gray-50 rounded-lg p-4">
          {children}
        </div>
      </div>
      {code && (
        <div className="border-t border-gray-200 bg-gray-900 p-4">
          <pre className="text-sm text-gray-100 overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
