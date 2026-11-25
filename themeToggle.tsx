import { useState, useEffect } from 'react'
import { useTheme } from './useTheme'
import { Theme, themes, themeOrder } from './theme'

const themeIcons: Record<Theme, string> = {
  wood: '\u{1F342}',
  night: '\u{1F319}',
  bubble: '\u{1FAE7}',
  onsen: '\u2668\uFE0F',
  ink: '\u25D0',
}

// The ring picker (Frank 2026-11-24): five circles orbit a centre. The
// toggle walks the ring CLOCKWISE so the next theme rides up to the top,
// where it enlarges — the other four stay visible, small. Clicking any
// circle jumps straight to it. Reduced motion = no spin.
export function ThemeToggle() {
  const { activeTheme, setActiveTheme } = useTheme()
  const idx = Math.max(0, themeOrder.indexOf(activeTheme))
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])
  const spin = reduce ? 'none' : 'transform 380ms cubic-bezier(.34,1.56,.64,1)'
  const advance = () => setActiveTheme(themeOrder[(idx + 1) % themeOrder.length])

  return (
    <button
      onClick={advance}
      aria-label="Toggle theme"
      title="toggle theme \u00b7 click a circle to jump"
      style={{
        position: 'relative',
        width: 72,
        height: 72,
        padding: 0,
        borderRadius: '9999px',
        background: 'transparent',
        border: '1px solid color-mix(in srgb, currentColor 18%, transparent)',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `rotate(${idx * 72}deg)`,
          transition: spin,
        }}
      >
        {themeOrder.map((key, i) => {
          const active = key === activeTheme
          return (
            <div
              key={key}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `rotate(${-i * 72}deg) translateY(-24px) scale(${active ? 1.9 : 1})`,
                transition: spin,
              }}
            >
              <div
                onClick={(e) => { e.stopPropagation(); setActiveTheme(key) }}
                title={key}
                style={{
                  width: 14,
                  height: 14,
                  marginLeft: -7,
                  marginTop: -7,
                  borderRadius: '9999px',
                  background: themes[key].accent,
                  boxShadow: active
                    ? `0 0 12px ${themes[key].primitives.sparkle}`
                    : '0 1px 3px rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: active ? 9 : 7,
                  opacity: active ? 1 : 0.7,
                  transform: `rotate(${(i - idx) * 72}deg)`,
                  transition: spin,
                  cursor: 'pointer',
                  lineHeight: 1,
                }}
              >
                {themeIcons[key]}
              </div>
            </div>
          )
        })}
      </div>
    </button>
  )
}
